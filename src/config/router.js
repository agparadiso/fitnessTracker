import React from 'react';
import { StackNavigator } from 'react-navigation';

import Profile from './../screens/profile'
import Login from './../screens/login'

export const Root = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
    }
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});