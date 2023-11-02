import React, { useState } from 'react';
import { View, TextInput, ScrollView, Image, TouchableOpacity, Linking, StyleSheet, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const openGoogleLink = () => {
    Linking.openURL('https://www.google.com');
  };

  const openFacebookLink = () => {
    Linking.openURL('https://www.facebook.com');
  };

  const openTwitterLink = () => {
    Linking.openURL('https://www.twitter.com');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headingText}>LOGIN TO YOUR ACCOUNT</Text>
        <Text style={styles.subheading}>Email</Text>
        <Card style={styles.card}>
          <TextInput
            placeholder='Username'
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </Card>
        <Text style={styles.subheading}>Password</Text>
        <Card style={styles.card}>
          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholder='Password'
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!isPasswordVisible}
              style={styles.passwordInput}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Feather
                name={isPasswordVisible ? 'eye' : 'eye-off'}
                size={24}
                color='#000'
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </Card>
        <Text style={styles.ForgotPass}>Forgot Password?</Text>
        <Button mode="contained" style={styles.Loginbutton}>
          Login
        </Button>
        <Text style={styles.continue}>or continue with</Text>

        <View style={styles.ImageView}>
          <TouchableOpacity onPress={openFacebookLink}>
            <Image
              source={require('../assets/Images/facebook_icon.jpg')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={openTwitterLink}>
            <Image
              source={require('../assets/Images/twitter_icon.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={openGoogleLink}>
            <Image
              source={require('../assets/Images/google_icon.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 15, paddingLeft: 50, paddingTop: 60 }}>
          Don't have an account?
          <TouchableOpacity>
            <Text style={styles.RegisterText}> Register Now</Text>
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
    paddingTop: 200,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 40,
    marginTop: 2,
  },
  subheading: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    padding: 6,
    width: '98%',
    margin: 2,
    padding: 8,
  },
  ForgotPass: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
    paddingLeft: 200,
    margin: 8,
  },
  Loginbutton: {
    margin: 8,
    padding: 5,
  },
  continue: {
    paddingLeft: 100,
    margin: 15,
    marginTop: 35,
    fontSize: 15,
    fontWeight: 'bold',
  },
  ImageView: {
    flexDirection: 'row',
    alignItems: 'center', // Align images vertically in the center
    paddingLeft: 100,
  },
  socialIcon: {
    margin: 5,
    width: 40,
    height: 40,
  },
  RegisterText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 15,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    margin: 5,
  },
});

export default Login;
