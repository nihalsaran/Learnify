import React from 'react';
import { View } from 'react-native';

const styles = {
  screen: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
};

const Home = (props) => {
  return (
    <View style={styles.screen}>
      {props.children}
    </View>
  );
};

export default Home;
