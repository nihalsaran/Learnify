import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';

import Footer from '../components/Facultypage/Footer';
import Subjects from '../components/Materialpage/Subjects';

const Materialpage = () => {
  return (
    <ImageBackground
      source={require('/Users/nihalsarandasduggirala/Desktop/LearnDEI/Learnify/src/components/Materialpage/background.jpeg')} // Replace with your image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Subjects />
        <Footer />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Add other styles as needed for your content layout
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' as per your preference
    width: '100%',
    height: '100%',
  },
});

export default Materialpage;
