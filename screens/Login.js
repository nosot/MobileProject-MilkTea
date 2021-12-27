import React ,{Component, useState}from 'react';
import {View ,StyleSheet,ActivityIndicator,ScrollView ,SafeAreaView, Keyboard, Alert} from 'react-native';
import {Text,Input,Image,Button} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { authentication } from '../database/firebaseDb'; 
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function Login({navigation}) {
    const [isSignedIn,setIsSignedIn] = useState(false);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const SignInUser =()=>{
      signInWithEmailAndPassword(authentication,email,password)
        if(authentication!=''){

            setIsSignedIn(true)
            console.log(Alert.alert('Login Success'));
            navigation.navigate('Home')
          
        }else{
          console.log(Alert.alert('Email or Password not correct'));
        }
    }

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

  return (
    <SafeAreaView style={styles.container}>
      <Image  
      source={{ uri: 'https://cdn.discordapp.com/attachments/883715436393414707/905121517468266496/logo.png' }}  
      style={styles.Logo}  
      PlaceholderContent={<ActivityIndicator />}/>

      <Text h3 style={styles.welcome}>Welcome</Text>
      <Text style={styles.title}>Email</Text>

      {/* Email*/}
      <Input style={styles.box} placeholder='Email' value={email} onChangeText={text=>setEmail(text)} keyboardType={"email-address"}/>

      {/* Password*/}
      <Text style={styles.title}>Password</Text>
      <Input style={styles.box} placeholder='Password' value={password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>

      {/* Submit*/}
      
        <Button  title='Sign in' onPress={SignInUser} />
        
      
       <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
          <Text>Don't have an account? </Text>
          <Text style={{marginLeft: 4 , color: 'blue'}}
            onPress={() => navigation.navigate('Register')}
          >

            Create account
          </Text>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: 'beige',
  },
  Logo :{
      width: 270,
      height:270,

  },
  welcome: {
      color:'black',
  },
  box:{
    backgroundColor: 'white',
    padding:10,
    borderWidth: 3,
    width:'90%',
    borderRadius: 15,
    marginTop: 10,
  },
  title:{
      width:'90%',
      marginBottom: 5,
  },
  submit:{
    color:"black",
  }
})
  
