import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const defaultImage = 'https://images.unsplash.com/photo-1542435503-956c469947f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw3fHxzdHVkZW50JTIwYmFja2dyb3VuZCUyMHxlbnwxfHx8fDE2OTUwMTg3NzV8MA&ixlib=rb-4.0.3&q=80&w=1080';

const Background = ({ image = defaultImage }) => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={{ uri: image }}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden', // Using overflow to achieve borderRadius in ImageBackground
  },
});

export default Background;
