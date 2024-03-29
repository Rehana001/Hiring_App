import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import Job_description from './Job_description';

const Home = ({navigation}) => {

  const NavigateJobDescription=()=>{
    navigation.navigate("Job_description")
};
const handleLogout = () => {
  // Perform logout actions here
  // For example, navigate to the login screen
  navigation.navigate('Login'); // Replace 'Login' with the actual name of your login screen
};


  return (
    <View style={styles.container}>
       <View style={styles.ViewInfo}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 30 }}
          source={require('../../assets/Images/person.jpeg')}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.text}>Hello, Rehana</Text>
          <Text style={styles.text}>Good Morning</Text>
          <View style={{marginLeft:230,}}>
            <Icon name="bell" size={20} color="tomato" />
          </View>
        </View>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Icon name="sign-out" size={20} color="blue" />
          <Text style={styles.logoutText}> Logout</Text>
        </TouchableOpacity>
      </View>
      <Card style={styles.SearchCard}>
        <View style={styles.SearchContent}>
          <Icon name="search" size={20} color="gray" />
          <TextInput
            style={styles.SearchInput}
            placeholder="Search"
          />
          <Icon name="ellipsis-h" size={20} color="gray" />
        </View>
      </Card>
      <Image
        style={{ width: 350, height: 170,marginLeft:10,marginRight:50 }}
        source={require('../../assets/Images/join_Image.jpg')}
      />
      <View style={styles.row}>
        <Text style={styles.sideByText}>Job recommendations</Text>
        <Text style={styles.seeAlltext}>see all</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {/* Render multiple cards inside the ScrollView */}
        <Card style={styles.JobCard}>
        <View style={styles.JobText}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 30 }}
          source={require('../../assets/Images/maths_teacher.png')}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.text}>Mathematics Teacher</Text>
          <Text style={styles.text}>Karachi,Pakistan</Text>
          <TouchableOpacity onPress={NavigateJobDescription}>
          <Text style={styles.JDtext}>See Job description</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.saveIcon}>
              <Icon name="bookmark" size={20} color="#1d6b43" />
            </View>
      </View>
        </Card>

        <Card style={styles.JobCard}>
        <View style={styles.JobText}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 30 }}
          source={require('../../assets/Images/English.png')}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.text}>English Teacher</Text>
          <Text style={styles.text}>Karachi,Pakistan</Text>
          <TouchableOpacity onPress={NavigateJobDescription}>
          <Text style={styles.JDtext}>See Job description</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.saveIcon}>
              <Icon name="bookmark" size={20} color="#1d6b43" />
            </View>
      </View>
        </Card>

        <Card style={styles.JobCard}>
        <View style={styles.JobText}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 30 }}
          source={require('../../assets/Images/geography.png')}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.text}>Geography Teacher</Text>
          <Text style={styles.text}>Karachi,Pakistan</Text>
          <TouchableOpacity onPress={NavigateJobDescription}>
          <Text style={styles.JDtext}>See Job description</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.saveIcon}>
              <Icon name="bookmark" size={20} color="#1d6b43" />
            </View>
      </View>
        </Card>

        <Card style={styles.JobCard}>
        <View style={styles.JobText}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 15 }}
          source={require('../../assets/Images/computer_science.png')}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.text}>Computer Science Teacher</Text>
          <Text style={styles.text}>Karachi,Pakistan</Text>
          <TouchableOpacity onPress={NavigateJobDescription}>
          <Text style={styles.JDtext}>See Job description</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.saveIcon}>
              <Icon name="bookmark" size={20} color="#1d6b43" />
            </View>
      </View>
        </Card>

        {/* Add more cards as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#dce0f7',
  },
  text: {
    fontSize: 16,
    
  },
  ViewInfo: {
    flexDirection: 'row',
    padding: 6,
    marginLeft: 20,
    paddingTop: 10,
  },
  SearchCard: {
    padding: 10,
    margin: 10,
  },
  SearchContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  SearchInput: {
    marginLeft: 10,
    fontSize: 15,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  sideByText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAlltext: {
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'blue',
  },
  scrollView: {
    flex: 1,
  },
  JDtext:{
    fontSize:13,
    color:'blue',
    textDecorationLine:'underline',
    marginTop:6,
  },
  JobText:{
    flexDirection: 'row',
    padding: 6,
    marginLeft: 20,
    paddingTop: 10,
  },
  JobCard:{
    padding: 6,
    margin: 10,
  },
  saveIcon: {
    marginLeft: 'auto',
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    marginLeft: 5,
    color: 'blue',
  },
});

export default Home;
