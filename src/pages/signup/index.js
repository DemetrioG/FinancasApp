import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import general from '../../styles/general';
import styles from './style';

export default function SignUp() {

  const [nome, setNome]       = useState('');
  const [password, setPassword] = useState('');

 return (

  <View style={[general.containerCenter, general.background]}>
    <Image source={require('../../assets/Logo.png')} style={styles.image}/>

    <View style={general.alignH}>
      <TextInput
        placeholder="Seu nome"
        placeholderTextColor="#d1d1d1"
        autoCorrect={false} //Sem corretor de teclado
        autoCapitalize="none" //Sem primeira letra maiúscula
        style={general.input}
        value={nome}
        onChangeText={ (v) => setNome(v) }
      />

      <TextInput
        placeholder="Seu e-mail"
        placeholderTextColor="#d1d1d1"
        autoCorrect={false} //Sem corretor de teclado
        autoCapitalize="none" //Sem primeira letra maiúscula
        style={general.input}
        value={email}
        onChangeText={ (v) => setEmail(v) }
      />
      
      <TextInput
        placeholder="Sua senha"
        placeholderTextColor="#d1d1d1"
        autoCorrect={false} //Sem corretor de teclado
        autoCapitalize="none" //Sem primeira letra maiúscula
        style={general.input}
        value={password}
        onChangeText={ (v) => setPassword(v) }
      />

      <TouchableOpacity style={general.button}>
        <Text style={general.btnText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}