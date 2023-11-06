import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Hiring/Home';
import Saved from './Hiring/Saved';
import Messages from './Hiring/Messages';
import Profile from './Hiring/Profile';
import { Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons';
import { StyleSheet } from 'react-native';
import Login from './Login';


const Drawer = createDrawerNavigator();

function Hiring_Screen({ navigation }) {
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
      {/* Logout Item */}
      <Drawer.Screen
        name="Logout"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="log-out" size={size} color={color} />
          ),
          drawerLabel: 'Logout',
        }}
      >
        {() => (
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => {
              // Add your logout logic here
              navigation.navigate('Login'); // Replace 'Login' with your login screen name
            }}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Hiring_Screen;
