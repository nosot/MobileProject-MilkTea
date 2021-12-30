import React ,{useEffect,useState}from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigator/Authstack';


export default function App() {


  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

