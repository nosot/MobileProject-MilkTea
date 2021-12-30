import React,{useState,useEffect} from 'react';
import { Appbar,Card ,Button, Title, Paragraph} from 'react-native-paper';
import {View ,StyleSheet,SafeAreaView,ScrollView,Platform, Alert,TouchableOpacity} from 'react-native';
import {Text,Input} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { auth } from '../database/firebaseDb'; 
import Header from '../components/HeaderTab';






export default function Home({navigation}) {

  return (
    <View style={styles.container}>
      <Header title='Home'/>
      <ScrollView style={styles.paper}>
        <Card style={styles.paper2}>
            <Card.Content style={styles.box}>
              <Text h3>{}</Text>
              <Card.Cover style={styles.Logo} 
              source={{uri:'https://cdn.discordapp.com/attachments/883715436393414707/905121517468266496/logo.png'}} /> 
              <Title style={{color:'beige'}} >Welcome</Title>
            </Card.Content>
        </Card>

  
       
            <Text h4 style={{color:'#461111',marginVertical:15 ,marginHorizontal:20}}>Popular Milk Tea BrownSugar </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('BrownSugar')}>  
              <Card.Cover style={styles.image}
              source={{uri:'https://media.istockphoto.com/photos/ice-bubble-milk-tea-in-takeaway-glass-picture-id1142539780?k=20&m=1142539780&s=612x612&w=0&h=4P05iuEkGvhVIq00hQF5rjjNVp3nvpn51dXjWzmNZp8='}} /> 
              </TouchableOpacity>
      
    

       
            <Text h4 style={{color:'#461111',marginVertical:20 ,marginHorizontal:20}}>Popular Dessert</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Dessert')}>  
  
            <Card.Cover style={styles.image}
              source={{uri:'https://images-gmi-pmc.edge-generalmills.com/7c1096c7-bfd0-4806-a794-1d3001fe0063.jpg'}} /> 
            </TouchableOpacity>
       

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
  image:{
    borderRadius:25,
    width:'90%',
    alignSelf:'center',
  }
  
})
  
