import React from 'react';
import {View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Hiring/Home';
import Saved from './Hiring/Saved';
import Messages from './Hiring/Messages';
import Profile from './Hiring/Profile';
import { Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons';
import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

function Hiring_Screen() {
  return (
    
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Saved"
        component={Saved}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="save" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={Messages}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
   
  );
}

export default Hiring_Screen;

const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }
})