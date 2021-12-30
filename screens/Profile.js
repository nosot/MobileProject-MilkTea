import React,{useState,useEffect} from 'react';
import { Appbar,Card ,Button, Title, Paragraph} from 'react-native-paper';
import {View ,StyleSheet,SafeAreaView,ScrollView,Platform,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../components/HeaderTab';
import { Avatar } from 'react-native-elements';
import { auth } from '../database/firebaseDb';
import { signOut ,onAuthStateChanged} from 'firebase/auth';



export default function Profile({navigation}) {
  const [user,setUser] = useState("");
  onAuthStateChanged(auth,(currentUser) => {
    if(currentUser){
      setUser(currentUser.email);
    }
  });


  const SignOut = async() => {
    signOut(auth)
    .then(() => {
      console.log('LogOut with:',user)
       navigation.replace('Login')
    })
    .catch(error => alert(error.massage))
  }
  

  return (
    <View style={styles.container}>
        <Header title='Profile' />
        <ScrollView>
          <Card style={styles.paper}>
              <Card.Content style={styles.paper2}>
              <Avatar
            size={125}
            rounded
            icon={{ name: 'adb', type: 'material' }}
            containerStyle={{ backgroundColor: 'orange',alignSelf:'center' }}
          />
          <TouchableOpacity>

            <Card.Content style={styles.box}>
              <Title style={{alignSelf:'center',marginVertical:10}}>Username</Title>
            </Card.Content>
          </TouchableOpacity>

          <TouchableOpacity>

            <Card.Content style={styles.box}>
            <Title style={{alignSelf:'center',marginVertical:10}}>Address</Title>
            </Card.Content>
          </TouchableOpacity>


          <TouchableOpacity>

            <Card.Content style={styles.box}>
            <Title style={{alignSelf:'center',marginVertical:10}}>ChangePassword</Title>
            </Card.Content>
          </TouchableOpacity>


          <TouchableOpacity onPress={SignOut}>

            <Card.Content style={{borderRadius:25,
               marginVertical:15,
               marginLeft:10,
               height:50,
               marginRight:10,
               backgroundColor:'red',}}>
              
              <Title  style={{alignSelf:'center',marginVertical:10,color:'white'}}> 
              <MaterialCommunityIcons name="power" color={"white"} size={30}/>
              Logout</Title>
        
            </Card.Content>
          </TouchableOpacity>
            </Card.Content>
          </Card>
        </ScrollView>
    </View>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F0D7',
  },
  box:{
    borderRadius:25,
    marginVertical:15,
    marginLeft:10,
    height:50,
    marginRight:10,
    backgroundColor:'white',
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
    height:700,
    marginRight:10,
    backgroundColor:'#FF8E00',
},
paper2:{
  borderRadius:25,
  marginVertical:15,
  marginLeft:10,
  marginRight:10,
  height:670,
  backgroundColor:'#533535',
},
  image:{
    borderRadius:25,
  }
  
})
  
