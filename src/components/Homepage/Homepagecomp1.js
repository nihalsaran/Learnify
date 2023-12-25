import React from 'react';
import { View, Image, StyleSheet, Text as RNText, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    left: 60,
    top: 50,
  },
  button: {
    position: 'absolute', // Ensure the button is positioned absolutely
    top: 125, // Adjust top position as needed based on your layout
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
  image: 'https://images.unsplash.com/photo-1558168674-2505c71112eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxGYWN1bHR5fGVufDF8fHx8MTcwMzQwNzY0M3ww&ixlib=rb-4.0.3&q=80&w=1080',
  text: '   SUBJECT\n MATERIALS',
  label: 'View',
};

const Homepagecomp1 = ({ image, text, label }) => {
  const navigation = useNavigation();
  const handleButtonClick = () => {
    navigation.navigate('Materialpage'); // Replace 'MaterialPage' with your actual screen name
  };
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
      <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
        <Text style={{ color: '#ffffff', fontSize: 14, fontFamily: 'Poppins', lineHeight: 16 }}>
          {label || defaultProps.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Homepagecomp1;
