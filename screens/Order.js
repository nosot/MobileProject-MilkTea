import React ,{useState,useEffect, useCallback} from 'react';
import { View ,StyleSheet,ScrollView,ActivityIndicator,RefreshControl} from 'react-native';
import { Appbar,Card,Title, Paragraph} from 'react-native-paper';
import {Text,Input,Image,Button,CheckBox} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from '../database/firebaseDb';
import {db} from '../database/firebaseDb'
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs,doc ,deleteDoc} from 'firebase/firestore/lite';
import Header from '../components/HeaderTab';



export default function Order({navigation}) {
  const [item,setItem] = useState([]);
  const [user,setUser] = useState("");
  const OrderItem = collection(db,"Users");
  
  
  

  onAuthStateChanged(auth,(currentUser) => {
    if(currentUser){
      setUser(currentUser.uid);
    }
  });

  useEffect(() => {
    try{
    const getData = async() =>{
      const Orderlist = await getDocs(collection(OrderItem,user,"cart"));
      setItem(Orderlist.docs.map((doc) => ({...doc.data(),id: doc.id})))

        

     // setItem(drinklist.docs.map((doc) => doc.data()))
    };
    getData();
    }catch(error){
      alert('No Data!!');

    }
  
});
  
  return (
    <View style={styles.container}>
      <Header title='Cart' />
      <ScrollView style={styles.paper}
        
      >
       
        {item.map((order) =>{
           
          
             return(
              <Card.Content style={styles.paper2}
                
                key={order.id}
              >
                <Title style={styles.colortitle}>ID: {order.id}</Title>
                <Title style={styles.colortitle}>Name: {order.name}</Title>
                <Title style={styles.colortitle}>Hot or Cool: {order.Hot_or_Cool}</Title>
                <Title style={styles.colortitle}>Option cool: {order.cool}</Title>
                <Title style={styles.colortitle}>Size: {order.size}</Title>
                <Title style={styles.colortitle}>SugarLevel: {order.Sugar_Level}</Title>
                <Title style={styles.colortitle}>Topping: {order.topping}</Title>
                <Button title={'Delete'} 
                  containerStyle={{
                    width:100,
                    marginVertical:10,
                  }}
                  buttonStyle={{
                    backgroundColor: 'red',
                    borderRadius: 25,
                    height:50,
                  }}
                  onPress={{}}
                ></Button>
              </Card.Content>
          )
        })}

      </ScrollView>
        <Button 
        title={'Submit'} 
        containerStyle={{
          width:400,
          marginBottom:10,
          alignSelf:'center',
          borderRadius:100,
      
        }}
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 25,
          height:60,
        }}
        onPress={{}}
        ></Button>
        
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
  flexDirection:'column',

  backgroundColor:'#533535',
},
  image:{
    borderRadius:25,
 },
 colortitle:{
  color:'#D0AF84',
},

  
})
  
