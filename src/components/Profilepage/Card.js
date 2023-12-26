import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    top: 300,
    left: 75,
    width: 280,
    height: 187,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    boxSizing: 'border-box', // This property doesn't exist in React Native
  },
});

const Card = (props) => {
  return <View style={styles.card}>{props.children}</View>;
};

export default Card;
