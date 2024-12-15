import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView, Switch } from 'react-native';
import React, {useState} from 'react';
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'


import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      //   tabBarShowLabel: false, // Hide the label
      tabBarStyle: { backgroundColor: "green" }, // set the background color
      tabBarLabelPosition: "below-icon", // set the position of the label
      tabBarActiveTintColor: "purple", // set the active tab color
      tabBarInactiveTintColor: "white", // set the inactive tab color
    }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: "Home Page", // set the label
          tabBarIcon: () => <Ionicons name={"home"} size={20} />, // set the icon
          tabBarBadge: 3, // set the badge
        }}
      /> 
      <Tab.Screen name="Login" component={LoginScreen} 
      />
    </Tab.Navigator>
  </NavigationContainer>
  );
};
