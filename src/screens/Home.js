import React from 'react';
import { View, StyleSheet } from 'react-native';
import Background from '../components/Homepage/Background';
import Footer from '../components/Homepage/Footer';
import Homepagecomp1 from '../components/Homepage/Homepagecomp1';
import Homepagecomp2 from '../components/Homepage/Homepagecomp2';
import Homepagecomp3 from '../components/Homepage/Homepagecomp3';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'relative', // Set the position to relative for zIndex to work
  },
  content: {
    flex: 1,
    // Other styles for your content if needed
  },
  homepagecomp1: {
    position: 'absolute',
    zIndex: 2, // Set a higher zIndex to bring it to the front
    // Other styles for Homepagecomp1
  },
  homepagecomp2: {
    position: 'absolute',
    zIndex: 2,
    top: 260,
  },
  homepagecomp3: {
    position: 'absolute',
    zIndex: 2,
    top: 520,
  },
});

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Background />
      
      <View style={styles.content}>
        {props.children}
      </View>
      
      <Footer />
      <View  style={styles.homepagecomp1}>
        <Homepagecomp1  />
       
      </View>
      <View style={styles.homepagecomp2}>
        <Homepagecomp2 /> 
        </View>
        <View style={styles.homepagecomp3}>
        <Homepagecomp3 /> 
        </View>
    </View>
  );
};

export default Home;
