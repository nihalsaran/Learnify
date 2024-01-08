import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [loggedInSemester, setLoggedInSemester] = useState('');
  const Stack = createStackNavigator();

  

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

  // Function to fetch and filter subjects based on the logged-in student's semester
  const fetchSubjects = async () => {
    const loggedInUserId = getCurrentUserId();
  
    if (loggedInUserId) {
      try {
        // Fetch logged-in student's data from Firestore under 'users' collection
        const userDoc = await firestore().collection('users').doc(loggedInUserId).get();
        const userData = userDoc.exists ? userDoc.data() : null;
  
        if (userData && userData.selectedSemester && userData.subjects) {
          const semester = userData.selectedSemester;
          setLoggedInSemester(semester); // Set the logged-in semester state
  
          const filteredSubjects = userData.subjects.filter(subject => subject.selectedSemester === semester);
          console.log(filteredSubjects); // Log the fetched subjects data
          setSubjects(filteredSubjects);
        } else {
          console.error('Semester data or subjects not found for the logged-in user.');
        }
      } catch (error) {
        console.error('Error fetching subjects: ', error);
      }
    }
  };
  
  // Fetch subjects data when the component mounts
  useEffect(() => {
    fetchSubjects();
  }, []); // Run once on component mount

  const navigation = useNavigation();

  const handlePress = (item) => {
    // Navigate to APL.js with the subject data when a card is pressed
    navigation.navigate('APL', { subjectData: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.TouchableOpacity} onPress={() => handlePress(item)}>
      <View style={styles.card}>
        <Text style={styles.subjectName}>{item.subjectName || 'No Subject Name'}</Text>
        <Text style={styles.subjectCode}>Subject Code: {item.subjectCode || 'No Subject Code'}</Text>
      </View>
    </TouchableOpacity>
  );



  return (
    <FlatList
      data={subjects}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
      ListEmptyComponent={<Text>Loading...</Text>}
    />
  );
};
const styles = StyleSheet.create({
 
  TouchableOpacity: {
    flex: 1, // Expand TouchableOpacity to fill its parent (FlatList item)
  },
  card: {
    top: 0,
    marginTop: 0,
    marginBottom: 0,
    padding: 40, // Adjust padding as needed for the card content
    backgroundColor: '#ffffff', // Example background color
    margin: 8, // Example margin
    borderRadius: 8,
    width: 370,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'blue',
    marginTop: 20,
    marginStart: 20,
    marginEnd: 20,
    marginVertical: 20,
    
  },
  subjectName: {
    fontWeight: 'bold',
    marginTop: -5,
    marginBottom: 5,

    fontFamily: 'Sans-serif',
    fontSize: 20,
    textAlign: 'right',
  },
  subjectCode: {
    textAlign: 'right',
    marginBottom: 5,
    fontFamily: 'Sans-serif',
    marginTop: 15,
    fontSize: 15,
  },
});


export default Subjects;
