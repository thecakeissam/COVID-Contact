import React from 'react';
import { StyleSheet, Image, View, ActivityIndicator } from 'react-native';
import firebase from '../../src/firebase';
import { StackActions } from '@react-navigation/stack';

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50%',
    maxWidth: '75%'
  }
});

export class SplashPage extends React.Component {

  componentDidMount() {
    var unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      this.props.navigation.navigate(user ? 'Main' : 'Home')
    })
  }

  render() {
    return (
      <View>
        <Image source={require('../../assets/branding/Logo.png')} style={styles.logo}/>
        <ActivityIndicator size="large" color="#44b3e0"/>
      </View>
    )
  }
}
