import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView, Switch } from 'react-native';
import React, {useState} from 'react';
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'


import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: "My dashboard", // set title
          drawerLabel: "Dashboard label", // set label
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ), // set icon
          drawerActiveTintColor: "#333", // set active tab
          drawerActiveBackgroundColor: "lightblue", // set active tab background color
          drawerInactiveTintColor: "#666", // set inactive tab
          drawerContentStyle: {
            backgroundColor: "#c6cbef", // set drawer background color
            paddingTop: 10, // set top padding
          },
        }}
      /> 
      <Drawer.Screen name="Login" component={LoginScreen} 
      />
    </Drawer.Navigator>
  </NavigationContainer>
  );
};
