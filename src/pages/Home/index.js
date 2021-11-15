import React, { useContext, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import HistoricList from '../../components/HistoricList';
import styles from './styles';
import general from '../../styles/general';

export default function Home() {

  const [historic, setHistoric] = useState([
    {key: '1', tipo: 'receita', valor: 1200},
    {key: '2', tipo: 'despesa', valor: 200},
    {key: '3', tipo: 'receita', valor: 10},
    {key: '4', tipo: 'receita', valor: 80.50},
    {key: '5', tipo: 'despesa', valor: 80.50},
    {key: '6', tipo: 'receita', valor: 350},
  ])

  const { user } = useContext(AuthContext);

  return (
    <View style={[general.background, general.container]}>
      <Header/>
      <View>
        <Text style={styles.nameTxt}>Nome</Text>
        <Text style={styles.saldoTxt}>R$5.000,00</Text>
      </View>

      <Text style={styles.lastInfo}>Ultimas Movimentações</Text>
      <FlatList 
        style={styles.list}
        showsVerticalScrollIndicator={false}
        data={historic}
        keyExtractor={ item => item.key }
        renderItem={ ({item}) => ( <HistoricList data={item}/> ) }
      />
    </View>
  );
}