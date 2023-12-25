import React from 'react';
import { View, Image, Text as RNText, Touchable, TouchableOpacity } from 'react-native';

const styles = {
  card: {
    top: 100,
    left: 60,
    width: 311,
    height: 120,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    flexDirection: 'row', // To align image and text side by side
    alignItems: 'center', // To center vertically
    paddingHorizontal: 15, // Add padding for spacing
  },
  imageContainer: {
    width: 116,
    height: 80,
    borderRadius: 12,
    marginRight: 15, // Spacing between image and text
  },
  text: {
    color: '#030303',
    fontSize: 14,
    fontFamily: 'Poppins',
    lineHeight: 16,
  },
};

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/a933dd23-dc3e-4080-be9d-5de0703ebe31.png',
  text: 'Subject 1',
};

const Subject2 = (props) => {
  const { image, text } = props;
  const imageUrl = image || defaultProps.image;
  const displayText = text || defaultProps.text;

  return (
    <TouchableOpacity>
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          style={{
            flex: 1,
            borderRadius: 12,
          }}
          source={{ uri: imageUrl }}
          resizeMode="cover"
        />
      </View>
      <RNText style={styles.text}>
        {displayText}
      </RNText>
    </View>
    </TouchableOpacity>
  );
};

export default Subject2;
