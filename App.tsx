import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import { LandingPage } from './components/landing/LandingPage';
import { MainPage } from './components/main-page/MainPage';
import { LoginPage } from './components/login/LoginPage';
import { SignupPage } from './components/signup/SignupPage'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen
          name="Home"
          component={LandingPage}
          />
        <Stack.Screen
          name="Main"
          component={MainPage}
          />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          />
        <Stack.Screen
          name="Signup"
          component={SignupPage}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
