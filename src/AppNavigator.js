import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';
import SignupScreen from './screens/SignupScreen';
import Profile from './screens/Profile';
import Materialpage from './screens/Materialpage';




const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
               
                <Stack.Screen 
          name="Splash" 
          component={Splash} 
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Materialpage" 
          component={Materialpage} 
          options={{headerShown: false}}
          />
          
          
        
         
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
