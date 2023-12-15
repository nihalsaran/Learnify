import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
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

 

const DropdownComponent = () => {
    const [value, setValue] = useState(null);

    return (
         
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
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                )}
            />
           
        
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