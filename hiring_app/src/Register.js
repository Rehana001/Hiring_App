import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Card, Button } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { responsiveWidth,responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const NavigateLogin=()=>{
    navigation.navigate("Login")
  }

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
        <View style={styles.LowerText}>
        <Text style={{ fontSize: 15,paddingLeft:30, paddingTop: 60 }}>
          Already have an account? 
          <TouchableOpacity onPress={NavigateLogin}>
            <Text style={styles.LoginText}> Login Now</Text>
          </TouchableOpacity>
        </Text>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: responsiveWidth(12),
  },
  subheading: {
    fontSize: responsiveFontSize(2),
    marginTop: responsiveWidth(2),
    marginBottom: responsiveWidth(2),
    paddingRight: responsiveWidth(60),
  },
  card: {
    padding: responsiveWidth(3),
    width: '98%',
    margin: responsiveWidth(1),
    padding: responsiveWidth(2),
  },
  passwordCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    margin: responsiveWidth(1),
    padding: responsiveWidth(1),
  },
  passwordInputContainer: {
    flex: 1,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    margin: responsiveWidth(1),
  },
  Registerbutton: {
    margin: responsiveWidth(1),
    padding: responsiveWidth(2),
    width: '97%',
    marginTop: responsiveWidth(10),
  },
  LoginText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: responsiveWidth(3.5),
  },
  LowerText:{
    paddingTop:responsiveWidth(18),
    paddingLeft:responsiveWidth(2.5),
  }
});

export default Register;
