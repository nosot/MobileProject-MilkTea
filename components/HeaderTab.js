
import * as React from 'react';
import { Appbar,Card ,Button, Title, Paragraph} from 'react-native-paper';
import {View ,StyleSheet,SafeAreaView,ScrollView,Platform, Alert,TouchableOpacity} from 'react-native';
import {Text,Input} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { authentication } from '../database/firebaseDb'; 
import {  signOut } from 'firebase/auth';


export default function Header (props){
    return(
      <Appbar.Header style={styles.header}>
          <Appbar.Content style={{alignItems:'center'}} title={props.title}/>
        </Appbar.Header>
    );
  }
  
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#461111',

        
    },
})