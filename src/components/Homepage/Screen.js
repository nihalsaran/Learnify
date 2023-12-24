import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

const Screen = (props) => {
  return (
    <View style={styles.Screen}>
      {props.children}
    </View>
  );
};

export default Screen;
