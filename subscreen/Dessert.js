import React ,{useState} from 'react';
import { View ,StyleSheet} from 'react-native';
import {Text,Input,Image,Button,CheckBox} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { authentication } from '../database/firebaseDb';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Header from '../components/HeaderTab';

export default function Dessert({navigation}) {
  return (
    <View style={styles.container}>
      <Header title='Sweet'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#D0AF84',
  },
  box:{
    marginBottom:10,
    paddingVertical:10,
    alignItems:'center',
    borderRadius:100,
  },
  Logo :{
    width: '100%',
    padding:25,
    height:100,
    borderRadius:100,

},
  paper:{
    borderRadius:25,
    marginVertical:15,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#FA9191',
},
  image:{
    borderRadius:25,
  }
  
})
  
