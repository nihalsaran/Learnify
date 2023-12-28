import { View, Text , StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Background from '../components/Profilepage/Background';
import Footer from '../components/Facultypage/Footer';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  

  // here ends number of subjects fetching 

  // here it starts fettching the user data

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth().currentUser;

        if (user) {
          const userRef = firestore().collection('users').doc(user.uid);
          const doc = await userRef.get();

          if (doc.exists) {
            const userData = doc.data();
            setUserData(userData);
          } else {
            console.log('No such document!');
          }
        } else {
          console.log('No user logged in');
        }
      } catch (error) {
        console.error('Error fetching document: ', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
    <Background />
    <View style={styles.container}>
      {userData ? (
        <View style={styles.profileInfo}>
          <Text style={styles.infoText1}>Name: {userData.name}</Text>
          <Text style={styles.infoText2}>Email: {userData.email}</Text>
          <Text style={styles.infoText3}>Roll Number: {userData.rollNumber}</Text>
          <Text style={styles.infoText4}>Selected Faculty: {userData.selectedFaculty}</Text>
          <Text style={styles.infoText5}>Selected Semester: {userData.selectedSemester}</Text>
          <Text style={styles.infoText6}>
            Total Subjects: {userData.subjects && userData.subjects.length > 0 ? userData.subjects[0].totalSubjects : 'Not available'}
          </Text>
        </View>
      ) : (
        <Text style={styles.loadingText}>Loading...</Text>
      )}
    </View>
    <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 200,
  },
  profileInfo: {
    
    padding: 20,
    borderRadius: 8,
    height: '50%',
    width: '100%',
  },
  infoText1: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  infoText2: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
  },
  infoText3: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 14,
  },
  infoText4: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  infoText5: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  infoText6: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfilePage;