import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import facultiesData from '/Users/nihalsarandasduggirala/Desktop/LearnDEI/Learnify/src/screens/faculties.json';


const App = () => {
  const [selectedFaculty, setSelectedFaculty] = useState('Select a faculty');
  const [selectedSemester, setSelectedSemester] = useState('Select a semester');
  const [selectedCourse, setSelectedCourse] = useState('Select a course');


  const { faculties } = facultiesData;

  const handleFacultySelect = (index, value) => {
    setSelectedFaculty(value);
    setSelectedSemester('Select a semester'); // Reset semester on faculty change
    setSelectedCourse('Select a course'); // Reset course on faculty change
  };

  const handleSemesterSelect = (index, value) => {
    setSelectedSemester(value);
    setSelectedCourse('Select a course'); // Reset course on semester change
  };

  const handleCourseSelect = (index, value) => {
    setSelectedCourse(value);
  };

  const selectedFacultyData = faculties[selectedFaculty] || {};
  const semesters = selectedFacultyData.semesters || [];
  const courses = selectedFacultyData.courses || {};

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
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
        options={selectedFacultyData.semesters || []}
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
        options={courses[selectedSemester] || []}
          defaultValue={selectedCourse}
          onSelect={handleCourseSelect}
          style={styles.courseDropdown}
          textStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownDropdown}
          dropdownTextStyle={styles.dropdownDropdownText}
          defaultIndex={0}
        />
      )}

      <Text>Selected Faculty: {selectedFaculty}</Text>
      <Text>Selected Semester: {selectedSemester}</Text>
      <Text>Selected Course: {selectedCourse}</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facultyDropdown: {
    // Faculty dropdown styles
    width: 370,
    marginTop: 150,
    borderWidth: 1,
    borderColor: 'blue',
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
  },
});

export default App;
