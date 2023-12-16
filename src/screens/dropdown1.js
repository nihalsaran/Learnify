import React, { useState, useEffect } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  

  const data1 = [
    { label: 'Faculty of Engineering', value: '1' },
    { label: 'Faculty of Science', value: '2' },
    { label: 'Faclty of Social Science', value: '3' },
    { label: 'Faculty of commerce', value: '4' },
    { label: 'Technical college', value: '5' },
    { label: 'Faculty of Arts', value: '6' },
  ];

  const data2 = {
    '1': [ // Faculty of Engineering
      { label: 'Sem-1', value: '11' },
      { label: 'Sem-3', value: '12' },
      { label: 'Sem-4', value: '13' },
      { label: 'Sem-5', value: '14' },
      { label: 'Sem-6', value: '15' },
      { label: 'Sem-7', value: '16' },
      { label: 'Sem-8', value: '17' },
    ],
    '2': [ // Faculty of Science
      { label: 'Sem-1', value: '21' },
      { label: 'Sem-2', value: '22' },
      { label: 'Sem-3', value: '23' },
      { label: 'Sem-4', value: '24' },
      { label: 'Sem-5', value: '25' },
      { label: 'Sem-6', value: '26' },
    ],
    '3': [ // Faculty of Social Science
      { label: 'Sem-1', value: '31' },
      { label: 'Sem-2', value: '32' },
      { label: 'Sem-3', value: '33' },
      { label: 'Sem-4', value: '34' },
      { label: 'Sem-5', value: '35' },
      { label: 'Sem-6', value: '36' },
    ],
    '4': [ // Faculty of commerce
      { label: 'Sem-1', value: '41' },
      { label: 'Sem-2', value: '42' },
      { label: 'Sem-3', value: '43' },
      { label: 'Sem-4', value: '44' },
      { label: 'Sem-5', value: '45' },
      { label: 'Sem-6', value: '46' },
    ],
    '5': [ // Technical college
      { label: 'Sem-1', value: '51' },
      { label: 'Sem-2', value: '52' },
      { label: 'Sem-3', value: '53' },
      { label: 'Sem-4', value: '54' },
      { label: 'Sem-5', value: '55' },
      { label: 'Sem-6', value: '56' },
    ],
    '6': [ // Faculty of Arts
      { label: 'Sem-1', value: '61' },
      { label: 'Sem-2', value: '62' },
      { label: 'Sem-3', value: '63' },
      { label: 'Sem-4', value: '64' },
      { label: 'Sem-5', value: '65' },
      { label: 'Sem-6', value: '66' },
    ],
    // Add other faculties with their corresponding semesters
  };

  const data3 = {
    '1': {
      '1': [
        { label: 'Course 1A', value: '1a' },
        { label: 'Course 1B', value: '1b' },
        // Add corresponding courses for Sem-1 of Faculty of Engineering
      ],
      '2': [
        // Courses for Sem-2 of Faculty of Engineering
      ],
      // Add other semester-course mappings for Faculty of Engineering
    },
    '2': {
      '3': [
        // Courses for Sem-3 of Faculty of Science
      ],
      '4': [
        // Courses for Sem-4 of Faculty of Science
      ],
      // Add other semester-course mappings for Faculty of Science
    },
    // Add other faculties with their corresponding semester-course mappings
  };

  


 

const DropdownComponent = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [filteredSemesters, setFilteredSemesters] = useState([]);
  

  useEffect(() => {
    // Update filteredSemesters based on selected faculty
    if (selectedFaculty && selectedFaculty.value in data2) {
      setFilteredSemesters(data2[selectedFaculty.value]);
    } else {
      setFilteredSemesters([]);
    }
  }, [selectedFaculty]);

  useEffect(() => {
    console.log('Selected Faculty:', selectedFaculty);
  }, [selectedFaculty]);

  useEffect(() => {
    console.log('Filtered Semesters:', filteredSemesters);
  }, [filteredSemesters]);

  




    const [value, setValue] = useState(null);

    return (
      <View>
       <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data1}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Faculty"
        searchPlaceholder="Search..."
        value={selectedFaculty}
        onChange={item => setSelectedFaculty(item)}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
      />

<Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={filteredSemesters} // Use filtered data2
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Semester"
        searchPlaceholder="Search..."
        disabled={!selectedFaculty}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="home" size={20} />
        )}
      />


    </View>
           
        
    );
};

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      width: 300,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });