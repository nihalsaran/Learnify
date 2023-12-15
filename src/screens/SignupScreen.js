import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';
import { useNavigation } from '@react-navigation/native';





const SignupScreen = () => {
    const navigation = useNavigation();

  const handleLoginClick = () => {
    // Navigate to the login page
    navigation.navigate('Login'); // Replace 'Login' with your login screen's name
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rollNumber, setRollNumber] = useState('');
const [name, setName] = useState('');

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
        Alert.alert('Please fill all the fields!');
      return;
    }
  
    if (password !== confirmPassword) {
        Alert.alert('Password do not match!');
      return;
    }
  
    try {
      const auth = firebase.auth();
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
  
      // Add user data to Firestore (optional)
      await firestore().collection('users').doc(userCredential.user.uid).set({
        email,rollNumber,
        name,password,Dropdown1,Dropdown2,Dropdown3,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
  
      Alert.alert('Success', 'Signed up successfully!');
      // Navigate to another screen
    } catch (error) {
        Alert.alert('Error', 'Signup error. Please try again later.');
    }



    
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
  placeholder="Full Name"
  value={name}
  onChangeText={setName}
/>
      <Dropdown1 />
      <Dropdown2 />
      <Dropdown3 />

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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
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
});

export default SignupScreen;