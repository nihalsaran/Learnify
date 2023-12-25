import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

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
});

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw3fHxzdHVkZW50JTIwYmFja2dyb3VuZCUyMHxlbnwxfHx8fDE2OTUwMTg3NzV8MA&ixlib=rb-4.0.3&q=80&w=1080',
}

const Background = (props) => {
  return (
    <ImageBackground
      style={{
        ...styles.ImageContainer,
      }}
      source={{ uri: props.image ?? defaultProps.image }}
    />
  );
};

export default Background;
