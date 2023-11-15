import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const SuccessfulScreen = () => {
  return (
    <View>
      <Text>SuccessfulScreen</Text>
      <Image
            style={styles.SuccessImage}
            source={require('../../assets/Images/Success.jpg')}
          />
    </View>
  )
}

export default SuccessfulScreen

const styles = StyleSheet.create({
    SuccessImage:{
        height:200,
        width:200,
        padding:10,
        borderRadius:10,
        marginLeft:70,
    }
})