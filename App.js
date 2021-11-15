import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './src/services/firebaseConnection';
import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#1F1F1F" barStyle="light-content"/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}