import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  view: {
    backgroundColor: 'white',
    height: '100%'
  },
  logo: {
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    maxWidth: '75%'
  },
  title: {
    marginTop: '35%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#44b3e0',
    fontWeight: 'bold',
    fontSize: 50
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
  signUp: {
    width: '45%',
    backgroundColor: '#44b3e0',
    color: '#44b3e0'
  },
  signUpText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#fff',
    backgroundColor: '#44b3e0',
    padding: '3%',
  },
  signIn: {
    marginTop: '5%'
  },
  signInText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#44b3e0'
  },
  spacer: {
    height: '2%'
  }
});
