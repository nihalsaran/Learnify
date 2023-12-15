import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading process, e.g., fetching data, checking authentication, etc.
    // After the loading is done, navigate to the next screen
    setTimeout(() => {
      navigation.replace('Welcome'); // Replace 'MainScreen' with your desired screen name
    }, 3000); // Change the timeout duration as needed
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Learnify</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Set your desired background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Set your desired text color
  },
});

export default SplashScreen;
