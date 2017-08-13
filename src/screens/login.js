import React, { Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Profile from './profile';

export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
        />
        <Button
          title="Login"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => navigate('Profile')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
		marginTop: 20,
		alignSelf: 'center',
		width: 150,
	},
  input: {
		marginBottom: 20,
    width: 100,
	},
});
