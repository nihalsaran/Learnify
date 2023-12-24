import React from 'react';
import { View, Image, StyleSheet, Text as RNText, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    top: 110,
    left: 65,
    width: 300,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  text: {
    color: '#ffffff',
    fontSize: 32,
    fontFamily: 'Poppins',
    fontWeight: '500',
    lineHeight: 38,
    position: 'absolute',
    bottom: 10,
    left: 100,
    top: 50,
  },
  button: {
    position: 'absolute', // Ensure the button is positioned absolutely
    top: 145, // Adjust top position as needed based on your layout
    left: 90, // Adjust left position as needed based on your layout
    width: 120,
    height: 36,
    paddingHorizontal: 8,
    borderWidth: 0,
    borderRadius: 12,
    backgroundColor: '#121212',
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins',
    lineHeight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // Set a higher zIndex to bring the button to the front
  },
});

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxBc3NpZ25tZW50fGVufDF8fHx8MTcwMzQwNzY5N3ww&ixlib=rb-4.0.3&q=80&w=1080',
  text: '   DHA\nSystem',
  label: 'Coming Soon',
};

const Homepagecomp3 = ({ image, text, label }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: image || defaultProps.image }}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
        }}
      />
      <RNText style={styles.text}>
        {text || defaultProps.text}
      </RNText>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#ffffff', fontSize: 14, fontFamily: 'Poppins', lineHeight: 16 }}>
          {label || defaultProps.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Homepagecomp3;
