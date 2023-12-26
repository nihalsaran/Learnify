import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Background from '../components/Homepage/Background';
import Footer from '../components/Homepage/Footer';
import Homepagecomp1 from '../components/Homepage/Homepagecomp1';
import Homepagecomp2 from '../components/Homepage/Homepagecomp2';
import Homepagecomp3 from '../components/Homepage/Homepagecomp3';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


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
  const [dataUploaded, setDataUploaded] = useState(false);

  // Function to retrieve the current user's ID
  const getCurrentUserId = () => {
    const currentUser = auth().currentUser;

    if (currentUser) {
      const userId = currentUser.uid;
      return userId;
    } else {
      // User is not logged in
      return null;
    }
  };

  // Function to check if subjects data is already uploaded for the current user
  const checkIfDataUploaded = async (studentId) => {
    try {
      const studentDoc = await firestore().collection('users').doc(studentId).get();
      const studentData = studentDoc.data();
      return !!studentData.subjects; // Check if subjects data already exists
    } catch (error) {
      console.error('Error checking subjects data: ', error);
      return false;
    }
  };

  // Function to upload subjects data to Firestore for the logged-in student
  const uploadSubjectsToStudent = async (studentId, subjectsData) => {
    try {
      if (!studentId || dataUploaded) {
        console.error('No logged-in user found or data already uploaded.');
        return;
      }

      // Get a reference to the document of the logged-in student
      const studentRef = firestore().collection('users').doc(studentId);

      // Update the subjects data within the student's document
      await studentRef.update({ subjects: subjectsData });
      setDataUploaded(true); // Set flag to indicate data upload

      console.log('Subjects data uploaded to the student document!');
    } catch (error) {
      console.error('Error uploading subjects data: ', error);
    }
  };

  // Function to fetch subjects data and update Firestore when the component mounts
  useEffect(() => {
    const loggedInUserId = getCurrentUserId(); // Retrieve the current logged-in user's ID

    if (loggedInUserId) {
      checkIfDataUploaded(loggedInUserId).then((isUploaded) => {
        if (!isUploaded) {
          // Assuming you have the subjects' data available
          const subjectsData = require('./subjects.json'); // Replace with your subjects data
          uploadSubjectsToStudent(loggedInUserId, subjectsData);
        } else {
          setDataUploaded(true); // Set flag to true if data is already uploaded
        }
      });
    }
  }, []); // Run once on component mount
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
