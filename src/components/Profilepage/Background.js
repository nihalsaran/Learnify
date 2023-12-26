import React from 'react';
import { View, Image as RNImage, ImageBackground, StyleSheet, Text as RNText } from 'react-native';
import Card from './Card';

const styles = StyleSheet.create({
  ImageContainer: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 8,
    zIndex: -1,
    position: 'relative',
    overflow: 'hidden', // Use overflow to achieve borderRadius in ImageBackground

  },
  imageContainer: {
    position: 'absolute',
    top: 100,
    left: 150,
    width: 130,
    height: 130,
    borderRadius: 100000,
    overflow: 'hidden', // Mimics border-radius for images in React Native
  },
  text1: {
    color: '#121212',
    fontSize: 20,
    fontFamily: 'Poppins',
    top: 250,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
  },
  text2: {
    color: '#121212',
    fontSize: 20,
    fontFamily: 'Poppins',
    top: 260,
    left: -5,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
  },
  text3: {
    color: '#121212',
    fontSize: 20,
    fontFamily: 'Poppins',
    top: 300,
    left: -100,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
  },
  text4: {
    color: '#121212',
    fontSize: 20,
    fontFamily: 'Poppins',
    top: 300,
    left: -100,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
  },
  text5: {
    color: '#121212',
    fontSize: 20,
    fontFamily: 'Poppins',
    top: 252,
    left: 100,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
  },
  text6: {
    color: '#121212',
    fontSize: 20,
    fontFamily: 'Poppins',
    top: 253,
    left: 100,
    fontWeight: '500',
    lineHeight: 24,
    textAlign: 'center',
  },
});

const defaultProps = {
  image1: 'https://images.unsplash.com/photo-1542435503-956c469947f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw3fHxzdHVkZW50JTIwYmFja2dyb3VuZCUyMHxlbnwxfHx8fDE2OTUwMTg3NzV8MA&ixlib=rb-4.0.3&q=80&w=1080',
  image: 'https://assets.api.uizard.io/api/cdn/stream/cbeb7bda-58a9-4bba-bbf0-fc387b20a20b.png',
  text1: 'XYZ',
  text2: '@XYZ',
  text3: '15',
  text4: 'Courses',
  text5: '24',
  text6: 'Subjects',

}

const Background = (props) => {
  return (
    <ImageBackground
      style={{
        ...styles.ImageContainer,
      }}
      source={{ uri: props.image ?? defaultProps.image1 }}
    >
        <RNImage
        style={{
            ...styles.imageContainer,
        }}
        source={{ uri: props.image || defaultProps.image }}
      />

<RNText style={styles.text1}>
      {props.text || defaultProps.text1}
    </RNText>
    <RNText style={styles.text2}>
      {props.text || defaultProps.text2}
    </RNText>
    <RNText style={styles.text3}>
      {props.text || defaultProps.text3}
    </RNText>
    <RNText style={styles.text4}>
      {props.text || defaultProps.text4}
    </RNText>
    <RNText style={styles.text5}>
      {props.text || defaultProps.text5}
    </RNText>
    <RNText style={styles.text6}>
      {props.text || defaultProps.text6}
    </RNText>
    <Card   />


    </ImageBackground>
    
    
  );
};

export default Background;
