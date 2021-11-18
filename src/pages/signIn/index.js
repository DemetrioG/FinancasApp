import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import general from '../../styles/general';
import styles from './style';
import SignUp from '../signup';

export default function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[general.container, general.background]}
    >
      <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
        <View style={[general.containerCenter, general.background]}>
          <Image source={require('../../assets/Logo.png')} style={styles.image}/>

          <View style={general.alignH}>
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
              secureTextEntry={true}
            />

            <TouchableOpacity style={general.buttonGreen} onPress={handleLogin}>
              {
                loadingAuth ? (
                  <ActivityIndicator size={20} color="#FFF"/>
                ) : (
                  <Text style={general.btnText}>Acessar</Text>
                )
              }
            </TouchableOpacity>
            <TouchableOpacity onPress={ () => navigation.navigate(SignUp) }>
              <Text style={styles.textLink}>Criar uma conta!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}