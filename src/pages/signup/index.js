import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthProvider, { AuthContext } from '../../contexts/auth.js';
import general from '../../styles/general.js';
import styles from './style';

export default function SignUp() {

  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, name);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[general.container, general.background]}
    >
      <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <View style={[general.containerCenter, general.background]}>

          <View style={general.alignH}>
            <TextInput
              placeholder="Seu nome"
              placeholderTextColor="#d1d1d1"
              autoCorrect={false} //Sem corretor de teclado
              autoCapitalize="none" //Sem primeira letra maiúscula
              style={general.input}
              value={name}
              onChangeText={ (v) => setName(v) }
            />

            <TextInput
              placeholder="Seu e-mail"
              placeholderTextColor="#d1d1d1"
              autoCorrect={false} //Sem corretor de teclado
              autoCapitalize="none" //Sem primeira letra maiúscula
              keyboardType="email-address"
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

            <TouchableOpacity style={general.buttonGreen} onPress={handleSignUp}>
              {
                loadingAuth ? (
                  <ActivityIndicator size={20} color="#FFF"/>
                ) : (
                  <Text style={general.btnText}>Cadastrar</Text>
                )
              }
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}