import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const SuccessfulScreen = () => {

    const navigation = useNavigation();

    const navigatetoAppliedJobList=()=>{
        navigation.navigate("AppliedJobLists")
    }

    const navigatetoDiscoverMoreJobs=()=>{
        navigation.navigate("DiscoverMoreJobs")
    }
    return (
        <View style={styles.container}>

            <Image
                style={styles.SuccessImage}
                source={require('../../assets/Images/Success.jpg')}
            />
            <Text style={styles.SuccessfulText}>Successful</Text>
            <Text style={styles.contentText}>Your resume is uploaded successfully</Text>
            <TouchableOpacity style={styles.ListButton} onPress={navigatetoAppliedJobList}>
                <Text style={styles.jobList}>See Applied Job Lists</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MoreJobsButton} onPress={navigatetoDiscoverMoreJobs}>
                <Text style={styles.jobList}>Discover more Jobs </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SuccessfulScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    SuccessImage: {
        height: 200,
        width: 200,
        padding: 7,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 50,
    },
    SuccessfulText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 10,
        margin: 6,
        color: '#0d3e80',
    },
    contentText: {
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    ListButton: {
        color: 'blue',
        backgroundColor: '#08214d',
        borderRadius: 5,
        margin: 10,
        paddingLeft: 40,
        paddingRight: 50,
        marginTop: 85,
    },
    jobList: {
        color: 'white',
        padding: 10,
        borderRadius: 10,

    },
    MoreJobsButton: {
        color: 'blue',
        backgroundColor: '#08214d',
        borderRadius: 5,
        margin: 10,
        paddingLeft: 40,
        paddingRight: 50,
    }
})