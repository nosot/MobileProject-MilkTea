import React ,{useState,useEffect} from 'react';
import { View ,StyleSheet,Image,ActivityIndicator,TouchableOpacity, TouchableOpacityBase,ScrollView,Text} from 'react-native';
import {Input,Button,CheckBox} from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth } from '../database/firebaseDb';
import {db} from '../database/firebaseDb'
import { collection,doc, getDocs} from 'firebase/firestore/lite';
import Header from '../components/HeaderTab';
import { Title,Card} from 'react-native-paper'; 


export default function MilkTea({navigation}) {

  const [item,setItem] = useState([]);
  const DrinkItem = collection(db,"Drink","MilkTeaList","List");

  useEffect(() => {
    const getData = async () =>{
      const drinklist = await getDocs(DrinkItem);
      setItem(drinklist.docs.map((doc) => ({...doc.data(),id: doc.id})))
     // setItem(drinklist.docs.map((doc) => doc.data()))
    };
  
  getData();
},[]);

return(
  <View style = {styles.container}>

    <Header title='SugarBrown' />
    
    <ScrollView style={styles.paper}>
    {item.map((drink) => {
      return(
          <TouchableOpacity onPress={()=> navigation.navigate('Detail',drink)}>
            
          <Card.Content style={styles.paper2}>
          <Image  key={drink.id}
      source={{ uri:(drink.image)}}  
      style={styles.Logo}  
      PlaceholderContent={<ActivityIndicator />}/>
          <Text style={{color:'#D0AF84' ,alignSelf:'flex-start',marginStart:30,fontSize:16 }}
          >{drink.name} </Text>
          <Text style={{color:'#D0AF84' ,alignSelf:'flex-start',marginStart:30,fontSize:16 }}
          >Price : $ 100 </Text>
          </Card.Content>
          </TouchableOpacity>
        

      )
    })}
    </ScrollView>
  </View>
)

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
    width: 150,
    height:125,
    marginHorizontal:10,
    borderRadius:25,
    alignSelf:'center',

},
  paper:{
    borderRadius:25,
    marginVertical:15,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'white',
},
paper2:{
  borderRadius:25,
  justifyContent:'space-evenly',
  marginVertical:15,
  marginLeft:10,
  height:200,
  marginRight:10,
  backgroundColor:'#533535',
},
  image:{
    borderRadius:25,
  }
  
})
  
