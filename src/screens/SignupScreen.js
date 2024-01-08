import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

import { useNavigation } from '@react-navigation/native';

import ModalDropdown from 'react-native-modal-dropdown';
import facultiesData from '/Users/nihalsarandasduggirala/Desktop/LearnDEI/Learnify/src/screens/faculties.json';






const SignupScreen = () => {
  const defaultProps = {
    image:
      'https://assets.api.uizard.io/api/cdn/stream/ca5cacf8-41ff-4b18-9fd2-ffe4b1ade450.png',
  };



  const navigation = useNavigation();

  const handleLoginClick = () => {
    // Navigate to the login page
    navigation.navigate('Login'); // Replace 'Login' with your login screen's name
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('Select a faculty');
  const [selectedSubfaculty, setSelectedSubfaculty] = useState('Select a subfaculty');
  const [selectedSemester, setSelectedSemester] = useState('Select a semester');
  const [selectedSubbranch, setSelectedSubbranch] = useState('Select a Subbranch');

  const { faculties } = facultiesData;

  const handleFacultySelect = (index, value) => {
    setSelectedFaculty(value);
    setSelectedSubfaculty('Select a subfaculty'); // Reset subfaculty on faculty change
    setSelectedSemester('Select a semester'); // Reset semester on faculty change
    setSelectedSubbranch('Select a Subbranch'); // Reset course on faculty change
  };
  const handleSubfacultySelect = (index, value) => {
    setSelectedSubfaculty(value);
    setSelectedSemester('Select a semester'); // Reset semester on subfaculty change
    setSelectedSubbranch('Select a Subbranch'); // Reset course on subfaculty change
    
  };
  const handleSemesterSelect = (index, value) => {
    setSelectedSemester(value);
    setSelectedSubbranch('Select a Subbranch'); // Reset course on semester change
  };

  const handleSubbranchSelect = (index, value) => {
    setSelectedSubbranch(value);
  };

  const selectedFacultyData = faculties[selectedFaculty] || {};
  const subfaculties = selectedFacultyData.subfaculties || [];
  const semesters = selectedFacultyData.semesters || [];
  const subbranch = selectedFacultyData.subbranch || {};


  const handleSignup = () => {
    // Send signup data to backend
    fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        rollNumber,
        phoneNumber,
        name,
        selectedFaculty,
        selectedSubfaculty,
        selectedSemester,
        selectedSubbranch,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Handle success or display error message
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error
      });
  };



  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Roll Number"
        value={rollNumber}
        onChangeText={setRollNumber}
        keyboardType="number-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

<ModalDropdown
        options={Object.keys(faculties)}
        defaultValue={selectedFaculty}
        onSelect={handleFacultySelect}
        style={styles.facultyDropdown}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdownDropdown}
        dropdownTextStyle={styles.dropdownDropdownText}
        defaultIndex={0}
      />

{selectedFaculty !== 'Select a faculty' && (
        <ModalDropdown
        options={selectedFacultyData.subfaculties || []}
          defaultValue={selectedSubfaculty}
          onSelect={handleSubfacultySelect}
          style={styles.subfacultyDropdown}
          textStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownDropdown}
          dropdownTextStyle={styles.dropdownDropdownText}
          defaultIndex={0}
        />
      )}

      {selectedSubfaculty !== 'Select a subfaculty' && (
        <ModalDropdown
        options={semesters[selectedSubfaculty] || []}
          defaultValue={selectedSemester}
          onSelect={handleSemesterSelect}
          style={styles.semesterDropdown}
          textStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownDropdown}
          dropdownTextStyle={styles.dropdownDropdownText}
          defaultIndex={0}
        />
      )}

      {selectedSemester !== 'Select a semester' && (
        <ModalDropdown
        options={subbranch[selectedSemester] || []}
          defaultValue={selectedSubbranch}
          onSelect={handleSubbranchSelect}
          style={styles.courseDropdown}
          textStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownDropdown}
          dropdownTextStyle={styles.dropdownDropdownText}
          defaultIndex={0}
        />
      )}

      <Text>Selected Faculty: {selectedFaculty}</Text> 
      <Text>Selected Subfaculty: {selectedSubfaculty}</Text>
      <Text>Selected Semester: {selectedSemester}</Text>
      <Text>Selected Subbranch: {selectedSubbranch}</Text>



      <Button title="Sign Up" onPress={handleSignup} />
      <Text style={styles.linkText}>Already have an account?</Text>
      <TouchableOpacity style={styles.link} onPress={handleLoginClick}>

        <Text>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    top: -50,
  },
  title: {
    top: 160,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    top: 160,
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: '#333',
  },

  facultyDropdown: {
    // Faculty dropdown styles
    width: 370,
    marginTop: 200,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
  },

  subfacultyDropdown: {
    // Faculty dropdown styles
    width: 370,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
  },

  semesterDropdown: {
    // Semester dropdown styles
    width: 370,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'green',
    padding: 10,
  },

  courseDropdown: {
    // Course dropdown styles
    width: 370,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
  },
  dropdownText: {
    fontSize: 18,
    
  },
  dropdownDropdown: {
    width: 370,
    maxHeight: 150,
    borderColor: 'gray',
    borderWidth: 1,
  },
  dropdownDropdownText: {
    fontSize: 18,
    color: 'black',
  },
});

export default SignupScreen;