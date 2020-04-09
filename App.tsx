import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import { LandingPage } from './components/landing/LandingPage';
import { MainPage } from './components/main-page/MainPage';
import { LoginPage } from './components/login/LoginPage';
import { SignupPage } from './components/signup/SignupPage';
import { SplashPage } from './components/splash/SplashPage';
import { ConfirmEmail } from './components/confirm-email/ConfirmEmail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashPage}
          />
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
        <Stack.Screen
          name="Confirm"
          component={ConfirmEmail}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
