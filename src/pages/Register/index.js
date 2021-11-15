import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import { format } from 'date-fns';
import firebase from '../../services/firebaseConnection';
import Header from '../../components/Header';
import Picker from '../../components/Picker';
import general from '../../styles/general';
import styles from './styles';

export default function Register() {

  const { user: usuario } = useContext(AuthContext);
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [type, setType] = useState('receita');

  function handleSubmit() {
    Keyboard.dismiss();
    if (isNaN(parseFloat(value)) || type === null) {
      alert('Preencha todos os campos!');
      return;
    }

    Alert.alert(
      'Confirme os dados',
      `Tipo ${type} - Valor: ${parseFloat(value)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  //Cadastrando movimentação
  async function handleAdd() {
    //Pegando uid do usuário logado
    let uid = usuario.uid;

    //Gerando chave aleatória para salvar no banco
    let key = await firebase.database().ref('historic').child(uid).push().key;
    await firebase.database().ref('historic').child(uid).child(key).set({
      tipo: type,
      valor: parseFloat(value),
      data: format(new Date, 'dd/MM/yy')
    })

    //Atualizando Saldo
    let user = firebase.database().ref('users').child(uid);
    await user.once('value')
    .then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);

      type === 'despesa' ? saldo -= parseFloat(value) : saldo += parseFloat(value);

      user.child('saldo').set(saldo);
    })
    Keyboard.dismiss();
    setValue('');
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <View style={[general.background, general.container, general.alignH]}>
        <Header/>
        <TextInput
          placeholder="Valor desejado"
          placeholderTextColor="#d1d1d1"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={ () => Keyboard.dismiss() }
          style={general.input}
          value={value}
          onChangeText={ (v) => setValue(v) }
        />
        <Picker
          onChange={setType}
          type={type}
        />
        <TouchableOpacity style={general.buttonGreen} onPress={handleSubmit}>
          <Text style={styles.btnText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}