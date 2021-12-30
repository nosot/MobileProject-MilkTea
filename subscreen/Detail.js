import React ,{useState,useEffect} from 'react';
import {View,Text ,StyleSheet,ActivityIndicator,TouchableOpacity, TouchableOpacityBase,ScrollView} from 'react-native';
import {Input,Image,Button,} from 'react-native-elements'
import { auth } from '../database/firebaseDb';
import { MaterialIcons } from '@expo/vector-icons';
import {db} from '../database/firebaseDb'
import { collection,doc,addDoc, getDocs} from 'firebase/firestore/lite';
import {onAuthStateChanged} from 'firebase/auth';
import Header from '../components/HeaderTab';
import { Title,Card} from 'react-native-paper'; 
import {Picker} from '@react-native-picker/picker';

export default function Detail({navigation,route}) {
const item = route.params;
const [Hotorcool, setHotorcool] = useState('');
const [Cool, setCool] = useState('');
const [Size, setSize] = useState('');
const [sugar, setSugar] = useState('');
const [Topping, setTopping] = useState('');
const [totol, setTotal] = useState('');
const [user,setUser] = useState("");

const getUsersAuth = collection(db,'Users');


onAuthStateChanged(auth,(currentUser) => {
  if(currentUser){
    setUser(currentUser.uid);
  }
});



  const SubmittoCart = async() => {
    const GetCart  =  await  addDoc(collection(getUsersAuth,user,'cart'),{
      id: user,
      name:item.name,
      image: item.image,
      Hot_or_Cool: Hotorcool,
      cool:Cool,
      size:Size,
      Sugar_Level:sugar,
      topping:Topping,


  });
   alert('Add Order to Cart Succes!');
  }



return(
  <View style = {styles.container}>

    <Header title='Detail' />
    
    <ScrollView style={styles.paper}>


    <Card.Content style={styles.paper2}>
        <Image  
      source={{ uri:(item.image)}}  
      style={styles.Logo}  
      PlaceholderContent={<ActivityIndicator />}/>
          <Title key={item.id} style={{color:'#FFF1BD' ,marginStart:30,alignSelf:'center', marginStart:10}}>{item.name}</Title>
          
        </Card.Content>
       
      
          {/*hot or cool */}
          <Text style={styles.title}>Hot Or Cool</Text>
        <Picker
          mode='dropdown'
          selectedValue={Hotorcool}
          style={styles.Pick}
          onValueChange={(itemValue) => setHotorcool(itemValue)}
        >
          <Picker.Item label='' value={'No data'} />
          <Picker.Item label='Hot' value={'Hot'} />
          <Picker.Item label='Cool' value={'Cool'} />
          
        </Picker>
          {/*Cool*/}
          <Text style={styles.title}>*Cool</Text>
        <Picker
          mode='dropdown'
          selectedValue={Cool}
          style={styles.Pick}
          onValueChange={(itemValue) => setCool(itemValue)}
        >
          <Picker.Item label='' value={'No data'} />
          <Picker.Item label='Ice' value={'Ice'} />
          <Picker.Item label='Frappe' value={'Frappe'} />
          
        </Picker>
          {/*Size*/}
          <Text style={styles.title}>Size</Text>
        <Picker
          mode='dropdown'
          selectedValue={Size}
          style={styles.Pick}
          onValueChange={(itemValue) => setSize(itemValue)}
        >
          <Picker.Item label='' value={'No data'} />
          <Picker.Item label='S' value={'S'} />
          <Picker.Item label='M' value={'M'} />
          <Picker.Item label='L' value={'L'} />
        </Picker>
          {/*Sugar Level*/}
          <Text style={styles.title}>Sugar Level</Text>
        <Picker
          mode='dropdown'
          selectedValue={sugar}
          style={styles.Pick}
          onValueChange={(itemValue) => setSugar(itemValue)}
        >
          <Picker.Item label='' value={'No data'} />
          <Picker.Item label='0%' value={'0%'} />
          <Picker.Item label='25' value={'25%'} />
          <Picker.Item label='50%' value={'50%'} />
          <Picker.Item label='75%' value={'75%'} />
          <Picker.Item label='100%' value={'100%'} />

        </Picker>
          {/*Topping*/}
          <Text style={styles.title}>Topping</Text>
          <Picker
          mode='dropdown'
          selectedValue={Topping}
          style={styles.Pick}
          onValueChange={(itemValue) => setTopping(itemValue)}
        >
          <Picker.Item label='' value={'No data'} />
          <Picker.Item label='No Topping' value={'No Topping'} />
          <Picker.Item label='Bubble' value={'Bubble'} />
          <Picker.Item label='Jelly' value={'Jelly'} />
          <Picker.Item label='MilkCream' value={'Milk Cream'} />
          <Picker.Item label='Micro Foam' value={'Micro Foam'} />
          <Picker.Item label='Whip Cream' value={'Whip Cream'} />


        </Picker>
        
        

      

         {/* Submit*/}
      
         <Button  title='Submit' 
        containerStyle={{
          width:100,
          marginVertical:20, 
          marginLeft:30,
          alignSelf:'flex-end',        
        }}
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 25,
          height:50,
        }}
        onPress={SubmittoCart} />

    </ScrollView>
  </View>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#D0AF84',
  },
  box:{
    backgroundColor: 'white',
    padding:5,
    marginVertical:20,
    alignSelf:'center',
    height:50,
    width:55,
    borderRadius: 15,
    
    marginStart:80,
  },
  Logo :{
    width:100,
    width: 150,
    padding:25,
    height:125,
    borderRadius:25,
    marginHorizontal:70,
    marginVertical:10
},
Pick :{
    backgroundColor:'#D0AF84',
    paddingLeft:20,
    width:150,
    height:40,
    marginHorizontal:100
},
  paper:{
    borderRadius:25,
    marginVertical:15,
    marginLeft:10,
    marginRight:10,
    flexGrow:1,
    flexDirection:'row',
    backgroundColor:'white',
},
paper2:{
  borderRadius:25,
  marginHorizontal:-50,
  marginVertical:15,
  
  width:"100%",
  height:200,
  backgroundColor:'#533535',
},
paper3:{
  borderRadius:25,
  flexDirection:'row',
  marginVertical:5,
  marginLeft:10,
  height:500,
  marginRight:10,
  backgroundColor:'#533535',
},
title:{
    width:100,
    height:20,
    fontSize:20,
    marginVertical:5,
    marginHorizontal:30,
    
    
    
},
})
  
