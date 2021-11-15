import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import general from '../../styles/general';
import styles from './styles';

export default function Profile() {

  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);

 return (
  <View style={[general.background, general.container, general.alignH]}>
    <Header/>
    <Text style={styles.nameText}>{ user && user.nome }</Text>
    <TouchableOpacity style={general.buttonGreen} onPress={ () => navigation.navigate('Registrar') }>
      <Text style={styles.btnText}>Registrar Gastos</Text>
    </TouchableOpacity>
    <TouchableOpacity style={general.buttonRed} onPress={ () => signOut() }>
      <Text style={styles.btnText}>Sair</Text>
    </TouchableOpacity>
  </View>
  );
}