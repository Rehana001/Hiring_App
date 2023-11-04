import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'



const Hiring_Page = ({navigation}) => {

    const NavigateHiringScreen=()=>{
        navigation.navigate("Hiring_Screen")
    };

    const NavigateProvidingScreen=()=>{
        navigation.navigate("Providing_Screen")
    };
  return (
    <View>
        <View style={styles.firstcardView}>
      <Text style={styles.HeadingText}>We are Hiring</Text>
        <TouchableOpacity onPress={NavigateHiringScreen}>
        <Card style={styles.Card}>
            <Image 
            source={require('../assets/Images/we_are_hiring.jpg')}
            style={styles.Image}/>
        </Card>
        </TouchableOpacity>
        </View>
        <View style={styles.secondcardView}>
        <Text style={styles.HeadingText}> We are providing </Text>
        <TouchableOpacity onPress={NavigateProvidingScreen}>
        <Card style={styles.Card}>
            <Image 
            source={require('../assets/Images/find_candidate.jpeg')}
            style={styles.Image}/>
        </Card>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Hiring_Page

const styles = StyleSheet.create({
    Image:{
        height:responsiveHeight(20),
        width: responsiveWidth(60),
        alignContent:'center',
        justifyContent:'center',
        
    },
    Card:{
        paddingLeft:responsiveWidth(5),
        marginLeft:responsiveWidth(15),
        marginRight: responsiveWidth(14),
        marginTop:responsiveWidth(5),
        paddingTop: responsiveHeight(3),
        paddingBottom: responsiveWidth(4),
        backgroundColor:'#136b32',
    },
    HeadingText:{
    fontWeight:'bold',
    fontSize:responsiveFontSize(4),
    paddingLeft:responsiveWidth(18),
    },
    secondcardView:{
        paddingTop:responsiveWidth(20),
    },
    firstcardView:{
        paddingTop: responsiveWidth(10),
    }
})