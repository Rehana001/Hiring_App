import { StyleSheet, Text, View, TextInput, ScrollView, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'

const Login = () => {
  this.state = {
    username: '',
  };
  this.state = {
    password: '',
  };

  const openGoogleLink = () => {
    Linking.openURL('https://www.google.com');
  };
  
  const openFacebookLink=()=>{
    Linking.openURL('https://www.facebook.com')
  };

  const openTwitterLink=()=>{
    Linking.openURL('https://www.twitter.com')
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headingText}>LOGIN TO YOUR ACCOUNT</Text>
        <Text style={styles.subheading}>Email</Text>
        <Card style={styles.card}>
          <TextInput
            placeholder='Username'
            value={this.state.username}
          />
        </Card>
        <Text style={styles.subheading}>Password</Text>
        <Card style={styles.card}>
          <TextInput
            placeholder='Password'
            value={this.state.password}
            secureTextEntry={true}
          />
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
        <Text style={{fontSize:15,paddingLeft:50, paddingTop:90}}>Dont have account? <Text style={styles.RegisterText}>Register Now</Text></Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200
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
    color: "blue",
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: "underline",
    paddingLeft: 200,
    margin: 8,
  },
  Loginbutton: {
    margin: 8,
    padding:5,
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
    paddingLeft:100,
  },
  socialIcon: {
    margin: 5,
    width: 40,
    height: 40,
    
  },
  RegisterText:{
    color:"blue",
    textDecorationLine:"underline",
    fontWeight:'bold',
    fontSize:15,
  }
});

export default Login;
