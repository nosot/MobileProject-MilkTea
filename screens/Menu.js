import React ,{useState} from 'react';
import { View ,StyleSheet,ScrollView,TouchableOpacity, TouchableOpacityBase} from 'react-native';
import {Text,Input,Image,Button,CheckBox} from 'react-native-elements'
import { Card,Title } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from '../database/firebaseDb';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Header from '../components/HeaderTab';

export default function Menu({navigation}) {

  const catagory =['Coffee','MilkTea','BrownSugar','Dessert']
 

  return (
    <View style={styles.container}>
      <Header title='Menu' />
      <ScrollView style={styles.paper2}>
        { catagory.map((drinklist) => {
           return(
          
            <TouchableOpacity onPress={()=> navigation.navigate(drinklist)}>
            <Card.Content style={styles.paper3}>
              <Text h1 style={{color:'#461111',alignSelf:'center',}}>{drinklist}</Text>

            </Card.Content>
            </TouchableOpacity>
           )
        })}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0AF84',
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
    height:400,
    marginRight:10,
    backgroundColor:'white',
},
paper2:{
  borderRadius:25,
  marginVertical:15,
  marginLeft:10,
  marginRight:10,
  backgroundColor:'#461111',
},
paper3:{
  borderRadius:25,
  justifyContent:'space-evenly',
  marginVertical:15,
  marginLeft:10,
  height:200,
  marginRight:10,
  backgroundColor:'#FFBF86',
},
  image:{
    borderRadius:25,
    width:'90%',
    alignSelf:'center',
  }
  
})
  
