import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Messages = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    // Add logic here to handle sending the message
    console.log('Sending message:', inputValue);
    // You can clear the input after sending if needed
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder='Message here'
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
         <FontAwesome5Icon
          name="paper-plane"
          style={styles.sendIcon}
          onPress={handleSend}
        />
       
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageInput: {
    backgroundColor: '#dce0e0',
    flex: 1,
    margin: 15,
    paddingTop: 6,
    paddingLeft: 5,
    paddingBottom: 50,
    borderRadius: 5,
    height: 100,
  },
  sendIcon: {
    fontSize: 24,
    color: 'purple',
    marginHorizontal: 4,
    paddingRight: 5,
  },
});
