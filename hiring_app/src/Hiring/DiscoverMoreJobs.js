import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const DiscoverMoreJobs = () => {
  return (
    <View style={styles.container}>
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
              <Text style={styles.categoryText}>Part Time</Text>
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
              <Text style={styles.categoryText}> Full Time</Text>
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
              <Text style={styles.categoryText}> Part Time</Text>
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
              <Text style={styles.categoryText}>Full Time</Text>
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
              source={require('../../assets/Images/maths_teacher.png')}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.text}>Mathematics Teacher</Text>
              <Text style={styles.text}>Karachi,Pakistan</Text>
              <Text style={styles.categoryText}>Part Time</Text>
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
              <Text style={styles.categoryText}>Full Time</Text>
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
              <Text style={styles.categoryText}> Part Time</Text>
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
              <Text style={styles.categoryText}>Full Time</Text>
            </View>
            <View style={styles.saveIcon}>
              <Icon name="bookmark" size={20} color="#1d6b43" />
            </View>
          </View>
        </Card>


        {/* Add more cards as needed */}
      </ScrollView>
    </View>
  )
}

export default DiscoverMoreJobs

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  JobText: {
    flexDirection: 'row',
    padding: 6,
    marginLeft: 20,
    paddingTop: 10,
  },
  JobCard: {
    padding: 6,
    margin: 10,
  },
  saveIcon: {
    marginLeft: 'auto',
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  categoryText:{
    color:'#0d3e80',
    fontSize:13,
  }
})