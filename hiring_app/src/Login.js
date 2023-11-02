import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'


const Login = () => {

    this.state = {
        username: '', // Initialize the text state
      }; 
    this.state={
        password: '',
    }

  return (
    <View>
      <Text>LOGIN TO YOUR ACCOUNT</Text>
      <Text> Email</Text>
      <Card>
      <TextInput
      placeholder='Enter your email here'
      value={this.state.username}
      />
      </Card>
      <Text> Password </Text>
      <Card>
      <TextInput
      placeholder='Enter password'
      value={this.state.password}/>
      </Card>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})