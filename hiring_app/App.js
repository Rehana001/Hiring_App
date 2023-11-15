import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import Register from './src/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Hiring_Page from './src/Hiring_Page';
import Hiring_Screen from './src/Hiring_Screen';
import Providing_Screen from './src/Providing_Screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/Hiring/Home';
import Saved from './src/Hiring/Saved';
import CustomDrawer from './src/CustomDrawer';
import Job_description from './src/Hiring/Job_description';
import ApplyNow from './src/Hiring/ApplyNow';
import SuccessfulScreen from './src/Hiring/SuccessfulScreen';
import AppliedJobLists from './src/Hiring/AppliedJobLists';
import DiscoverMoreJobs from './src/Hiring/DiscoverMoreJobs';

const Stack= createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <HiringScreens/>
    {/* <DrawerNavigator /> */}
  </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Saved" component={Saved} />
    </Drawer.Navigator>
  );
}

function HiringScreens() {
  return (
   
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="Hiring" component={Hiring_Page} />
      <Stack.Screen name="Hiring_Screen" component={Hiring_Screen} options={{ headerShown: false }}/>
      <Stack.Screen name="Providing_Screen" component={Providing_Screen} />
      <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
      <Stack.Screen name="Job_description" component={Job_description} options={{ headerShown: false }}/>
      <Stack.Screen name="ApplyNow" component={ApplyNow}/>
      <Stack.Screen name="SuccessfulScreen" component={SuccessfulScreen}/>
      <Stack.Screen name="AppliedJobLists" component={AppliedJobLists}/>
      <Stack.Screen name="DiscoverMoreJobs" component={DiscoverMoreJobs}/>
    </Stack.Navigator>
  )
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
