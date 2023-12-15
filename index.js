/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { firebase } from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDOE_y-sHVlFI1VqRIZ0ehXoxD7JbWkuSg",
    authDomain: "learnify-1.firebaseapp.com",
    projectId: "learnify-1",
    storageBucket: "learnify-1.appspot.com",
    messagingSenderId: "807864036384",
    appId: "1:807864036384:web:2c049da59110bbfb4b2045",
    measurementId: "G-HPHBDLMR6T"

};
firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);
