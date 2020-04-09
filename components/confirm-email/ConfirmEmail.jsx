import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import firebase from '../../src/firebase';
import styles from './ConfirmStyles'


export class ConfirmEmail extends React.Component {
  handleSignup = () => {
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //   .then(() => this.props.navigation.navigate('Main'))
    //   .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    return (
      <SafeAreaView style={styles.view}>
        <Text>We sent you an email, come back when you're read it.</Text>
        <TouchableOpacity>
          <Text>I'm done!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
