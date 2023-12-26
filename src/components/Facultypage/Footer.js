import React from 'react';
import { View, Image as RNImage, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const styles = {
  footer: {
    width: '100%',
    height: 63,
    backgroundColor: '#FF5E33',
    borderTopWidth: 1,
    top: 870,
    borderTopColor: '#f0f0f0',
    position: 'absolute',
  },
  icon1: {
    position: 'absolute',
    bottom: -45,
    left: 120,
  },
  icon2: {
    position: 'absolute',
    bottom: -45,
    right: 120,
  },
};

const Footer = (props) => {

    const navigation = useNavigation();

  const goToHomePage = () => {
    navigation.navigate('Home'); // Replace 'Home' with the name of your home screen
  };

  const goToProfilePage = () => {
    navigation.navigate('Profile'); // Replace 'Home' with the name of your home screen
  };



  return <View 
  style={styles.footer}>{props.children}

<TouchableOpacity onPress={goToHomePage}>
      <FontAwesomeIcon
        style={styles.icon1}
        name={'home'}
        size={30}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={goToProfilePage}>
      <MaterialCommunityIcons style={styles.icon2}
      name={'account'}
      size={30}
      />
      </TouchableOpacity>


  </View>;

};

export default Footer;
