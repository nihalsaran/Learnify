import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Footer from '../Facultypage/Footer'

const Background = () => {
  return (
    <ImageBackground
      source={require('/Users/nihalsarandasduggirala/Desktop/LearnDEI/Learnify/src/components/Subjectpage/imgbg.jpeg')} // Replace with your image path
      style={styles.backgroundImage}
    >
     
    </ImageBackground>
  )
}

export default Background

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // or 'contain' as per your preference
      width: '100%',
      height: 900,
    },
  });