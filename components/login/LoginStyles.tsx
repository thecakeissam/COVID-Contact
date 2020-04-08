import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  view: {
    backgroundColor: 'white',
    height: '100%',
    textAlign: 'center',
  },
  input: {
    fontSize: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '69%',
    borderBottomWidth: 1,
    borderColor: '#c4c4c4',
    marginBottom: '5%',
    color: '#44b3e0',
  },
  gap: {
    marginTop: '70%',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
  signInText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 25,
    color: '#44b3e0',
  },
  backText: {
    color: '#44b3e0',
    marginLeft: '5%',
    marginTop: (Platform.OS === 'ios') ? '2%' : '10%',
  },
});
