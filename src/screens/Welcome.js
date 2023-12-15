import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  const defaultProps = {
    text1: 'Welcome to Learnify, your personalized learning app',
    text2: 'Learnify is the ultimate app for students. Start your learning journey now!',
    label1: 'Login',
    label2: 'Sign Up',
    image: 'https://assets.api.uizard.io/api/cdn/stream/451c6043-92d2-4a63-8f0d-26ef49ff1878.png',
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignUpPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: defaultProps.image }}
          style={styles.image}
        />
      </View>
      <Text style={styles.text1}>{defaultProps.text1}</Text>
      <Text style={styles.text2}>{defaultProps.text2}</Text>
      <TouchableOpacity
        style={styles.button1}
        onPress={handleLoginPress}
      >
        <Text style={styles.buttonText}>{defaultProps.label1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={handleSignUpPress}
      >
        <Text style={styles.buttonText}>{defaultProps.label2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    position: 'absolute',
    top: height * 0.1,
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.6 / 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: width * 0.6 / 2,
  },
  text1: {
    color: '#080a0b',
    fontSize: 32,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontWeight: '700',
    lineHeight: 40,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 200,
  },
  text2: {
    color: '#5d5d5b',
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button1: {
    marginTop: 20,
    width: width * 0.4,
    height: height * 0.07,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#121212',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    marginTop: 20,
    width: width * 0.4,
    height: height * 0.07,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#121212',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#121212',
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontWeight: '700',
    lineHeight: 20,
  },
});
