import React from "react";
import {LogBox } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Order from "../screens/Order";
import Profile from "../screens/Profile";
import Menu from "../screens/Menu";
import MilkTea from "../subscreen/MilkTea";
import Coffee from "../subscreen/Coffee";
import BrownSugar from "../subscreen/BrownSugar"
import Dessert from "../subscreen/Dessert"
import Detail from "../subscreen/Detail";

LogBox.ignoreLogs(['Remote debugger']);
const Stack = createNativeStackNavigator();

export default function AuthStack(){

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen  name="Login" component={Login} />
            <Stack.Screen  name="Register" component={Register} />

            <Stack.Screen  name="Home" component={Buttomtab} />
            <Stack.Screen  name="Order" component={Order} />
            <Stack.Screen  name="Profile" component={Profile} />
            <Stack.Screen  name="Detail" component={Detail} />

            <Stack.Screen  name="BrownSugar" component={BrownSugar} />
            <Stack.Screen  name="Dessert" component={Dessert} />
            <Stack.Screen  name="MilkTea" component={MilkTea} />
            <Stack.Screen  name="Coffee" component={Coffee} />


          
         </Stack.Navigator>
         
    );
}

const Tab = createMaterialBottomTabNavigator();

 function Buttomtab() {
  return (
    
    <Tab.Navigator
      initialRouteName="Buttomtab"
      activeColor="#AE431E"
      labelStyle={{ fontSize: 12 }}
      barStyle= {{backgroundColor: '#FFBF86'}}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={"black"} size={26} />
          ),
        }}
      />

  <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="apps-box" color={"black"} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-minus" color={"black"} size={26} />
          ),
        }}
      />

<Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={"black"} size={26} />
          ),
        }}
      />


    </Tab.Navigator>
  );
}