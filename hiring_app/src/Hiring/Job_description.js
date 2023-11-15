import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import ApplyNow from './ApplyNow';

const Job_description = ({ navigation }) => {
  const [modal, setModal] = useState(false);

  const ApplyNowNavigation = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Job details</Text>
      <Card style={styles.cardContent}>
        <View style={styles.contentContainer}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 15, padding: 7 }}
            source={require('../../assets/Images/maths_teacher.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.jobTitle}>Mathematics Teacher</Text>
            <Text style={styles.schoolName}>Alpha College</Text>
          </View>
        </View>
      </Card>
      <View style={styles.sideBySideContainer}>
        <Text style={styles.basicDetails}>Salary</Text>
        <Text style={styles.Details}>65000 Pkr</Text>
      </View>
      <View style={styles.sideBySideContainer}>
        <Text style={styles.basicDetails}>Type</Text>
        <Text style={styles.Details}>Full Time</Text>
      </View>
      <View style={styles.sideBySideContainer}>
        <Text style={styles.basicDetails}>Location</Text>
        <Text style={styles.Details}>Alpha College PECHS block 6</Text>
      </View>
      <View style={styles.line}></View>
      <Text style={styles.subHeading}>Job Description:</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <View style={styles.line}></View>
      <Text style={styles.subHeading}> Requirements:</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <TouchableOpacity style={styles.button} onPress={ApplyNowNavigation}>
        <Text style={styles.ApplynowText}> Apply Now</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Apply Now</Text>
            <TouchableOpacity onPress={handleCloseModal}>
              <Text style={styles.modalCloseButton}>Close</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.modalContent}>
            {/* Add your ApplyNow component or any other content for the modal */}
            <ApplyNow />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#dce0f7',
  },
  sideBySideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 9,
  },
  basicDetails: {
    padding: 4,
    fontWeight: '300',
  },
  Details: {
    padding: 4,
    fontWeight: 'bold',
    color: '#1049ad',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: '#aaadb3',
  },
  button: {
    backgroundColor: '#08214d',
    borderRadius: 5,
    margin: 30,
  },
  ApplynowText: {
    color: 'white',
    padding: 10,
    paddingLeft: 100,
  },
  subHeading: {
    fontSize: 16,
    padding: 8,
    fontWeight: 'bold',
  },
  content: {
    padding: 6,
    justifyContent: 'space-between',
    fontWeight: '300',
  },
  header: {
    paddingLeft: 120,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 6,
    marginBottom: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 15,
  },
  cardContent: {
    padding: 8,
    color: '#e1e6ed',
  },
  jobTitle: {
    padding: 5,
    marginBottom: 3,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#08214d',
  },
  schoolName: {
    fontSize: 14,
    fontWeight: '400',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#08214d',
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  modalCloseButton: {
    fontSize: 16,
    color: 'white',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    maxHeight: '50%',
    margin: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default Job_description;
