import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Background from '../components/Materialpage/Background';
import Footer from '../components/Homepage/Footer';
import Subject1 from '../components/Materialpage/Subject1';
import Subject2 from '../components/Materialpage/Subject2';
import Subject3 from '../components/Materialpage/Subject3';
import Subject4 from '../components/Materialpage/Subject4';

const data = [
  { id: '1', component: <Subject1 /> },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  //  position: 'relative', // Set the position to relative for zIndex to work
  },
  content: {
    flex: 1,
    // Other styles for your content if needed
  },
  flatlistContainer: {
    position: 'absolute', // Set the position to relative for zIndex to work
    zIndex: 0, // Set a higher zIndex to bring it to the front
    top: 10,
    left: 0,
    width: '100%',
    height: '100%', // Position it as per your requirement
    // Other styles for the FlatList container
  },
  flatlistItem: {
    paddingTop: 10,
   
  },
  
});

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.content}>{props.children}</View>
      

      <View style={styles.flatlistContainer}>
      <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.flatlistItem}>{item.component}</View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }} // Optional, adds bottom padding to the FlatList content
        />
        <Footer />
      </View>
      
    </View>
  );
};

export default Home;
