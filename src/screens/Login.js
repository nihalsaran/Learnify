import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';




const Login = () => {
  const navigation = useNavigation();

  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // Send login data to backend
    fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rollNumber, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message === 'Login successful') {
          navigation.navigate('Home'); // Navigate to Home.js
        }
        // Handle other cases or display error message
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error
      });
  };
  
  const Card = ({ children }) => {
    return (
      <View style={styles.Card}>
        {children}
      </View>
    );
  };

  const TextComponent1 = ({ text }) => {
    return (
      <Text style={styles.Text1}>
        {text}
      </Text>
    );
  };
  const TextComponent2 = ({ text }) => {
    return (
      <Text style={styles.Text2}>
        {text}
      </Text>
    );
  };
  const TextComponent3 = ({ text }) => {
    return (
      <Text style={styles.Text3}>
        {text}
      </Text>
    );
  };
  const TextComponent4 = ({ text }) => {
    const navigation = useNavigation();

    const handleNavigation1 = () => {
      // Navigate to the Login screen
      navigation.navigate('Signup');
    };
    return (
      <TouchableOpacity onPress={handleNavigation1}>
      <Text style={styles.Text4}>
        {text}
      </Text>
    </TouchableOpacity>
    );
  };

  const InputField1 = ({ text }) => {
    return (
      <TextInput
        style={styles.Input}
        placeholder="Roll Number"
        value={rollNumber}
        onChangeText={(text) => setRollNumber(text)}
      />
    );
  };

  const InputField2 = ({ text }) => {
    return (
      <TextInput
        style={styles.Input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
    );
  };

  const Button = ({ label }) => {
    return (
      <TouchableOpacity style={styles.Button} onPress={handleLogin} >
        <Text style={styles.ButtonText}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const ImageComponent = () => {
    return (
      <Image
        style={styles.Image}
        source={{ uri: 'https://assets.api.uizard.io/api/cdn/stream/ca5cacf8-41ff-4b18-9fd2-ffe4b1ade450.png' }}
      />
    );
  };

  return (
    <View style={styles.Screen}>
      <Card>
        <ImageComponent />
        <TextComponent1 text={'Learnify'} />
        <TextComponent2 text={'Join today to enhance your learning experience!'} />
        <InputField1 text={'Roll Number'} />
        <InputField2 text={'Password'} />
        <Button label={'Login'}/>
        <TextComponent3 text={'Not a member?'} />
        <TextComponent4 text={'Sign Up'} />
      </Card>
    </View>
  );
};

const fontFamily = Platform.select({
  ios: 'Arial', // Set iOS font
  android: 'Roboto', // Set Android font
  default: 'System', // Set a default font for other platforms
});

const styles = {
  Screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  Card: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxWidth: 400,
  },
  Text1: {
    color: '#030303',
    fontSize: 20,
    fontFamily: fontFamily,
    fontWeight: '600',
    lineHeight: 29,
    textAlign: 'center',
    marginVertical: 8,
  },
  Text2: {
    color: '#030303',
    fontSize: 20,
    fontFamily: fontFamily,
    fontWeight: '600',
    lineHeight: 29,
    textAlign: 'center',
    marginVertical: 8,
  },
  Text3: {
    color: '#030303',
    fontSize: 15,
    fontFamily: fontFamily,
    fontWeight: '600',
    lineHeight: 29,
    textAlign: 'center',
    marginVertical: 8,
    marginTop: 1,
    marginBottom: 1,
  },
  Text4: {
    color: '#030303',
    fontSize: 15,
    fontFamily: fontFamily,
    fontWeight: '600',
    lineHeight: 29,
    textAlign: 'center',
    marginVertical: 8,
    marginTop: 1,
  },
  Input: {
    marginTop: 10,
    width: '100%',
    height: 49,
    borderWidth: 1,
    borderColor: '#d2d2d7',
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.77)',
    color: '#1a1a1c',
    fontSize: 16,
    fontFamily: fontFamily,
    lineHeight: 29,
    textAlign: 'center',
  },
  Button: {
    marginTop: 15,
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderColor: '#121212',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: '#121212',
    fontSize: 16,
    fontFamily: fontFamily,
    fontWeight: '600',
    lineHeight: 29,
  },
  Image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
};

export default Login;
