import React from 'react';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';
import Login from './src/screens/login';
import { Root} from './src/config/router';


export default class App extends React.Component {
  render() {
    return (
        <Root />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
