import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const YourScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Your Screen Content Goes Here</Text>
    </View>
  );
};

YourScreen.navigationOptions = {
  title: 'Your Screen Title', // Set your desired screen title
  headerStyle: {
    backgroundColor: '#08214d', // Set your desired header background color
  },
  headerTintColor: '#fff', // Set your desired header text color
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default YourScreen;
