import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Card, Button } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.subheading}>Name</Text>
        <Card style={styles.card}>
          <TextInput
            placeholder='Username'
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </Card>

        <Text style={styles.subheading}> Email Address </Text>
        <Card style={styles.card}>
          <TextInput
            placeholder='Enter your email'
          />
        </Card>

        <Text style={styles.subheading}> Mobile Number </Text>
        <Card style={styles.card}>
          <TextInput
            placeholder='Enter your mobile number'
          />
        </Card>

        <Text style={styles.subheading}>Password</Text>
        <Card style={styles.passwordCard}>
          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholder='Password'
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!isPasswordVisible}
              style={styles.passwordInput}
            />
          </View>
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Feather
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={24}
              color='#000'
            />
          </TouchableOpacity>
        </Card>

        <Button mode="contained" style={styles.Registerbutton}>
          <Text style={{ fontSize: 16 }}>Register</Text>
        </Button>
        <Text>Already have an account? 
          <TouchableOpacity>
          <Text>Login now</Text>
          </TouchableOpacity>
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  subheading: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 250,
  },
  card: {
    padding: 6,
    width: '98%',
    margin: 2,
    padding: 8,
  },
  passwordCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    margin: 2,
    padding: 8,
  },
  passwordInputContainer: {
    flex: 1,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    margin: 5,
  },
  Registerbutton: {
    margin: 6,
    padding: 5,
    width: '97%',
    marginTop: 50,
  },
});

export default Register;
