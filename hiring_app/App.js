import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import Register from './src/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hiring_Page from './src/Hiring_Page';
import Hiring_Screen from './src/Hiring_Screen';
import Providing_Screen from './src/Providing_Screen';


export default function App() {

  const Stack= createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Hiring" component={Hiring_Page}/>
        <Stack.Screen name="Hiring_Screen" component={Hiring_Screen}/>
        <Stack.Screen name="Providing_Screen" component={Providing_Screen}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //  <Login/>
    //   {/* <Register/> */}
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
