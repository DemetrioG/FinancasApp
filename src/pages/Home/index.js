import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, Vibration, Alert } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns';
import Header from '../../components/Header';
import HistoricList from '../../components/HistoricList';
import styles from './styles';
import general from '../../styles/general';
import { da, fi } from 'date-fns/locale';

export default function Home() {

  const [historic, setHistoric] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  //Atualiza informações de saldo e lançamentos na abertura do app
  useEffect( () => {
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      });

      await firebase.database().ref('historic').child(uid).orderByChild('data').limitToLast(10).on('value', (snapshot) => {
        setHistoric([]);
        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor,
            data: childItem.val().data
          }
          //Pega os valores da state e incrementa eles
          setHistoric(oldArray => [...oldArray, list].reverse());
        })
      })
    }

    loadList();
  }, []);

  function handleDelete(data) {
    Vibration.vibrate();
    Alert.alert(
      'Atenção',
      `Você deseja excluir a ${data.tipo} de ${data.valor} ?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Excluir',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )
  }

  async function handleDeleteSuccess(data) {
    await firebase.database().ref('historic').child(uid).child(data.key).remove()
    .then( async () => {
      let saldoAtual = saldo;
      data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor)

      await firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <View style={[general.background, general.container]}>
      <Header/>
      <View>
        <Text style={styles.nameTxt}>{user && user.nome}</Text>
        <Text style={styles.saldoTxt}>R$  {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
      </View>

      <Text style={styles.lastInfo}>Ultimas Movimentações</Text>
      <FlatList 
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={historic}
        keyExtractor={ item => item.key }
        renderItem={ ({item}) => ( <HistoricList data={item} deleteItem={handleDelete}/> ) }
      />
    </View>
  );
}