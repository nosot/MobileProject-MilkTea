import * as React from 'react';
import { Appbar,Card ,Button, Title, Paragraph} from 'react-native-paper';
import {View ,StyleSheet,SafeAreaView,ScrollView,Platform, Alert,TouchableOpacity} from 'react-native';
import {Text,Input} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { authentication } from '../database/firebaseDb'; 
import {  signOut } from 'firebase/auth';
import Header from '../components/HeaderTab';


const SignOutUser =()=>{
  signOut(authentication)
  .then((re)=>{
      console.log(re);
      setIsSignedIn(false)
  })
  .catch((err)=>{
      console.log(err);
  })
}




export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Header title='Home'/>
      <ScrollView>
        <Card style={styles.paper}>
            <Card.Content style={styles.box}>
              <Text h3>Promotion</Text>
              <Card.Cover style={styles.Logo} 
              source={{uri:'https://cdn.discordapp.com/attachments/883715436393414707/905121517468266496/logo.png'}} /> 
              <Button >Get start</Button>
            </Card.Content>
        </Card>

  
       
            <Text h4 style={{color:'black',marginVertical:15 ,marginHorizontal:20}}>Drink</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Drink')}>  
              <Card.Cover style={styles.image}
              source={{uri:'https://cdn.discordapp.com/attachments/883715436393414707/905121517468266496/logo.png'}} /> 
              </TouchableOpacity>
      
    

       
            <Text h4 style={{color:'black',marginVertical:20 ,marginHorizontal:20}}>Sweet Meat</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Sweet')}>  
  
            <Card.Cover style={styles.image}
              source={{uri:'https://cdn.discordapp.com/attachments/883715436393414707/905121517468266496/logo.png'}} /> 
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
    marginRight:10,
    backgroundColor:'#FA9191',
},
  image:{
    borderRadius:25,
    width:'90%',
    alignSelf:'center',
  }
  
})
  
