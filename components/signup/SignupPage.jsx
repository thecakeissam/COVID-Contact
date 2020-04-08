import React from 'react'
import { Text, TextInput, SafeAreaView, Button, View, TouchableOpacity } from 'react-native'

import styles from '../login/LoginStyles'


export class SignupPage extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    // TODO: Firebase stuff...
    console.log('handleLogin')
  }
  render() {
    return (
      <SafeAreaView style={styles.view}>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.backText}>
              {'<'} Back
            </Text>
          </TouchableOpacity>
        <View style={styles.gap}></View>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          autoCapitalize="none"
          style={styles.input}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity
          style={styles.signIn, styles.button}
          onPress={this.handleLogin}>
          <Text style={styles.signInText}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
