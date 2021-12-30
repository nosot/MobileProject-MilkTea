import React ,{useState,useEffect}from 'react';
import {View ,StyleSheet,ActivityIndicator,ScrollView,SafeAreaView,Alert} from 'react-native';
import {Text,Input,Image,Button} from 'react-native-elements'
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { auth } from '../database/firebaseDb'; 
import {db} from '../database/firebaseDb'
import { collection,addDoc, doc } from 'firebase/firestore/lite';
import { createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth';

export default function Register({navigation}) {
    
  const [userId,setUserId] = useState('');
 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const getUsersAuth = collection(db,'Users');
    
      
   
    useEffect(() => {
    const Id = onAuthStateChanged(auth,(currentUser) => {
      if(currentUser){
        setUserId(currentUser.uid);

      }
    });
      return Id;
  },[])

    const RegisterUser = async()=>{
      try{
        if (email !=''&&password!=''&&confirmPassword!='') {
          
          if(password==confirmPassword){
            const  userRegister = await createUserWithEmailAndPassword(auth,email,password);
            console.log(userId)
           
            alert('Register Success!!')
            
          }else{
            alert('Password Not Match!!');
          }
        }else{
          alert('Email 0r Password Not Correct!!');
        }
      }catch(error){
        console.log(error.massage);
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <Image  
      source={{ uri: 'https://cdn.discordapp.com/attachments/883715436393414707/905121517468266496/logo.png' }}  
      style={styles.Logo}  
      PlaceholderContent={<ActivityIndicator />}/>

      <Text h3 style={styles.welcome}>Register User</Text>
      <Text style={styles.title}>Email</Text>

      {/* Email*/}
      <Input style={styles.box} placeholder='Email' value={email} onChangeText={text=>setEmail(text)} keyboardType={"email-address"}/>

      {/* Password*/}
      <Text style={styles.title}>Password</Text>
      <Input style={styles.box} placeholder='Password' value={password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>

      <Text style={styles.title}>Confirm Password</Text>
      <Input style={styles.box} placeholder='Confirm Password' value={confirmPassword} secureTextEntry={true} onChangeText={text=>setConfirmPassword(text)}/>
      {/* Submit*/}
    
        <Button  title='Register'
        containerStyle={{
          width:330,
          marginHorizontal:50,
          marginVertical:10,
          alignSelf:'center',          
        }}
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 3,
          height:50,
        }}
        onPress={RegisterUser} />
      
    
       
       <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
          <Text>Do you have  account? </Text>
          <Text style={{marginLeft: 4 , color: 'blue'}}
            onPress={() => navigation.navigate('Login')}
          >

            Sign In
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
