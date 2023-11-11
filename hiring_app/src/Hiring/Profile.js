import { StyleSheet, Text, View, Linking, Image } from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  const emailAddress = 'abc@gmail.com';
  const MobileNumber = '0332336495';
  const websiteUrl = 'https://example.com';

  const handleEmailPress = () => {
    const emailLink = `mailto:${emailAddress}`;
    Linking.openURL(emailLink);
  };

  const handleMobilePress = () => {
    const phoneLink = `tel:${MobileNumber}`;
    Linking.openURL(phoneLink);
  };

  const handleWebsitePress = () => {
    Linking.openURL(websiteUrl);
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 350, height: 300 }}
        source={require('../../assets/Images/minimum-viable-team.jpg')}
      />
      <View style={styles.ProfileView}>
        <Text style={styles.ContactText}>Contact Information</Text>
        <View style={styles.infoContainer}>
          <FontAwesomeIcon name="envelope" style={styles.icon} />
          <Text style={styles.HeadingText}>Email Address: </Text>
          <Text onPress={handleEmailPress} style={styles.emailText}>
            {emailAddress}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <FontAwesomeIcon name="phone" style={styles.icon} />
          <Text style={styles.HeadingText}>Mobile Number: </Text>
          <Text onPress={handleMobilePress} style={styles.MobileText}>
            {MobileNumber}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <FontAwesomeIcon name="globe" style={styles.icon} />
          <Text style={styles.HeadingText}>Website: </Text>
          <Text onPress={handleWebsitePress} style={styles.websiteText}>
            {websiteUrl}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <FontAwesomeIcon name="info" style={styles.icon} />
          <Text style={styles.HeadingText}>About Me:</Text>
        </View>
        <Text style={styles.contentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
   
  },
  emailText: {
    color: 'blue',
    textDecorationLine: 'underline',
    padding: 6,
  },
  MobileText: {
    color: 'blue',
    textDecorationLine: 'underline',
    padding: 6,
  },
  websiteText: {
    color: 'blue',
    textDecorationLine: 'underline',
    padding: 6,
  },
  ProfileView: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  ContactText: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 6,
  },
  HeadingText: {
    fontSize: 15,
    padding: 6,
    fontWeight: '500',
  },
  contentText: {
    margin: 6,
    padding: 6,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },
  icon: {
    fontSize: 20,
    color: '#0c99a8',
    marginRight: 6,
  },
});

export default Profile;
