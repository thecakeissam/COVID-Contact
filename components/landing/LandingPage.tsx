import React from 'react';
import { TouchableOpacity, Image, Text, SafeAreaView, View } from 'react-native';

import styles from './LandingStyles'

export class LandingPage extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.view}>
        <Text style={styles.title}>COVID-Contact</Text>
        <Image source={require('../../assets/branding/Logo.png')} style={styles.logo}/>
        <TouchableOpacity
          style={styles.signUp, styles.button}
          onPress={() => this.props.navigation.navigate('Signup')}
          >
          <Text style={styles.signUpText}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <View style={styles.spacer}></View>
        <TouchableOpacity
          style={styles.signIn, styles.button}
          onPress={() => this.props.navigation.navigate('Login')}
          >
          <Text style={styles.signInText}>
            Sign In
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

}
