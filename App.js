import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './Screens/LoginPage';
import SignupPage from './Screens/SignupPage'
import VerifyMail from './Screens/VerifyMail';
import ResetPass from './Screens/ResetPass';
import ChangePass from './Screens/ChangePass';
import Home from './Screens/Home';

const Stack = createNativeStackNavigator();

const App = () =>
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignupPage'>

      <Stack.Screen name="Sign Up" component={SignupPage} 
          options={{
            headerTitleStyle:
            {
              fontSize: 25,
              color: 'red',
            },
            headerTitleAlign: 'center'
          }}
       />

       <Stack.Screen name="Email Verification" component={VerifyMail} 
        options={{
            headerTitleStyle:
            {
              fontSize: 25,
              color: 'red',
            },
            headerTitleAlign: 'center'
          }}
       />

      <Stack.Screen name="Log In" component={LoginPage} 
        options={{
            headerTitleStyle:
            {
              fontSize: 25,
              color: 'red',
            },
            headerTitleAlign: 'center'
          }}
       />

      <Stack.Screen name="Forget Password" component={ResetPass} 
        options={{
            headerTitleStyle:
            {
              fontSize: 25,
              color: 'red',
            },
            headerTitleAlign: 'center'
          }}
       />

    <Stack.Screen name="Change Password" component={ChangePass} 
        options={{
            headerTitleStyle:
            {
              fontSize: 25,
              color: 'red',
            },
            headerTitleAlign: 'center'
          }}
       />

    <Stack.Screen name="Home Page" component={Home} 
        options={{
            headerTitleStyle:
            {
              fontSize: 25,
              color: 'blue',
            },
            headerTitleAlign: 'center'
          }}
       />

      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;