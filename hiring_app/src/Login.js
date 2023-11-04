import React, { useState } from 'react';
import { View, TextInput, ScrollView, Image, TouchableOpacity, Linking, StyleSheet, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { responsiveWidth,responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions';

const Login = ({navigation}) => {
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

  // const NavigateLogin=()=>{
  //   if(username=="Rehana" && password=="12345"){
  //     navigation.navigate("Hiring_Page")
  //   };
    const NavigateRegister=()=>{
      navigation.navigate("Register")
    };

    const NavigateHiring=()=>{
      if(username=="Rehana" && password=="1234"){
        navigation.navigate("Hiring")
      }
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
        <Button mode="contained" style={styles.Loginbutton} onPress={NavigateHiring}>
          Login
        </Button>
        <Text style={styles.continue}>or continue with</Text>

        <View style={styles.ImageView}>
          <TouchableOpacity onPress={openFacebookLink}>
            <Image
              source={require('../assets/Images/facebook_icon.png')}
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

        <View style={styles.LowerText}>
        <Text style={{ fontSize: 15, paddingLeft: 50, paddingTop: 60 }}>
          Don't have an account?
          <TouchableOpacity onPress={NavigateRegister}>
            <Text style={styles.RegisterText}> Register Now</Text>
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
    paddingTop: responsiveWidth(30),
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3),
    margin: responsiveWidth(6),
    marginTop: 2,
  },
  subheading: {
    fontSize: responsiveFontSize(1.75),
    marginTop: responsiveWidth(3),
    marginBottom: responsiveWidth(2),
  },
  card: {
    padding: responsiveWidth(5),
    width: '98%',
    margin: responsiveWidth(1),
    padding: responsiveWidth(2),
  },
  ForgotPass: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.75),
    textDecorationLine: 'underline',
    paddingLeft: responsiveWidth(60),
    margin: responsiveWidth(2),
  },
  Loginbutton: {
    margin: responsiveWidth(4),
    padding: responsiveWidth(1),
  },
  continue: {
    paddingLeft: responsiveWidth(30),
    margin: responsiveWidth(2),
    marginTop: responsiveWidth(3),
    fontSize: responsiveFontSize(1.75),
    fontWeight: 'bold',
  },
  ImageView: {
    flexDirection: 'row',
    alignItems: 'center', // Align images vertically in the center
    paddingLeft: responsiveWidth(30),
  },
  socialIcon: {
    margin: responsiveWidth(0.5),
    width: responsiveWidth(10),
    height: responsiveHeight(5),
  },
  RegisterText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.75),
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    margin: responsiveWidth(2),
  },
  LowerText:{
    paddingTop:responsiveWidth(10),
    paddingLeft:responsiveWidth(1)
  }
});

export default Login;
