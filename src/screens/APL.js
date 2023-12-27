import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';
import Background from '../components/Subjectpage/Background';
import Footer from '../components/Facultypage/Footer';
const APL = () => {
  const route = useRoute();
  const subjectData = route.params?.subjectData || {};

  // Accessing specific data fields
  const { ctPapers, notes, endSemPapers, questionBank, subjectName } = subjectData;

  const openLink = async (link) => {
    try {
      const supported = await Linking.canOpenURL(link);
  
      if (supported) {
        await Linking.openURL(link);
      } else {
        console.error('Cannot open the provided link');
      }
    } catch (error) {
      console.error('Error opening link:', error);
    }
  };

  const renderButton = (title, onPress) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <>
         <Background />
    <View style={styles.container}>
       
      <Text style={styles.heading}>Subject Details</Text>
      
      <Text style={styles.heading1}>{subjectName} </Text>


      <View style={styles.linkContainer}>
        <Text style={styles.label}>CT Papers: </Text>
        {renderButton('Open', () => openLink(ctPapers))}
      </View>

      <View style={styles.linkContainer}>
        <Text style={styles.label}>Notes:</Text>
        {renderButton('Open', () => openLink(notes))}
      </View>

      <View style={styles.linkContainer}>
        <Text style={styles.label}>End Sem Papers:</Text>
        {renderButton('Open', () => openLink(endSemPapers))}
      </View>

      <View style={styles.linkContainer}>
        <Text style={styles.label}>Question Bank:</Text>
        {renderButton('Open', () => openLink(questionBank))}
      </View>
        
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
    
    bottom: 250,

  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heading1: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default APL;
