import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './src/services/firebaseConnection';

import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1F1F1F" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}