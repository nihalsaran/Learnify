import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ImageContainer: {
    top: 0,
    left: 0,
    width: 430,
    height: 870,
    borderRadius: 8,
    overflow: 'hidden', // Use overflow to achieve borderRadius in ImageBackground
  },
});

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1487088678257-3a541e6e3922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyOHx8YmFja2dyb3VuZHxlbnwxfHx8fDE2OTQ5Njg2ODd8MA&ixlib=rb-4.0.3&q=80&w=1080',
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
