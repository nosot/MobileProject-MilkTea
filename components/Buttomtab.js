import * as React from 'react';
import { Text, View,LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Order from '../screens/Order';
import Home from '../screens/Home';
import Profile from '../screens/Profile';




const Tab = createMaterialBottomTabNavigator();

export default function Buttomtab(navigation) {
  return (
    
    <Tab.Navigator
      initialRouteName="Buttomtab"
      activeColor="#AE431E"
      labelStyle={{ fontSize: 12 }}
      barStyle= {{backgroundColor: '#FFBF86' }}
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
        name="Order"
        component={Order}
        options={{
          tabBarLabel: 'Order',
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