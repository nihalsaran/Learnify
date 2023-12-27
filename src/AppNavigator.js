import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Materialpage from './screens/Materialpage';
import Home from './screens/Home';
import Facultylist from './screens/Facultylist';
import SignupScreen from './screens/SignupScreen';
import Welcome from './screens/Welcome';
import Splash from './screens/Splash';
import Login from './screens/Login';

import Profile from './screens/Profile';
import APL from './screens/APL';





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
          name="Profile" 
          component={Profile} 
          options={{headerShown: false}}
          />
          
           <Stack.Screen 
          name="Facultylist" 
          component={Facultylist} 
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Materialpage" 
          component={Materialpage} 
          options={{headerShown: false}}
          /> 
          <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{headerShown: false}}
          />
           <Stack.Screen 
          name="APL" 
          component={APL} 
          options={{headerShown: false}}
          />

             
          
           
          
          
          
          
        
         
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
 
/*




          

          */





  
                