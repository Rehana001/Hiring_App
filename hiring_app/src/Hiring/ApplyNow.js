import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import SuccessfulScreen from './SuccessfulScreen';
import { useNavigation } from '@react-navigation/native';

const ApplyNow =  () => {
    const navigation = useNavigation();

  const NavigateSuccessScreen = () => {
    navigation.navigate('SuccessfulScreen');
  };
 

  return (
    <View style={styles.container}>
      <View style={styles.uploadView}>
        <Text style={styles.uploadText}>Upload Resume/CV</Text>
        <Text style={styles.belowText}>Upload your resume or CV to apply for Job Vacancy</Text>
        <View style={styles.dottedBox}>
          {/* Your upload symbol or icon goes here */}
          <Text>Drag and Drop your file here</Text>
          <Text style={styles.uploadImage}>📤</Text>
          <TouchableOpacity style={styles.BrowseButton}>
            <Text style={styles.BrowseText}>Browse</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.ApplyButton} onPress={NavigateSuccessScreen}>
          <Text style={styles.BrowseText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ApplyNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadView: {
    marginTop: 50,
    backgroundColor: '#e4e8dc',
    height: 290,
    width: 280,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
  },
  dottedBox: {
    borderStyle: 'dotted',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    width: 200,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  uploadImage: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  belowText: {
    fontSize: 11,
    paddingTop: 7,
    paddingLeft: 10,
  },
  uploadText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  BrowseButton: {
    color: 'blue',
    backgroundColor: '#08214d',
    borderRadius: 5,
    margin: 10,
  },
  BrowseText: {
    color: 'white',
    padding: 10,
  },
  ApplyButton: {
    color: 'blue',
    backgroundColor: '#08214d',
    borderRadius: 5,
    margin: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 15,
  },
});
