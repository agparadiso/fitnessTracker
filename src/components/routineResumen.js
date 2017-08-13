import React, { Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class RoutineResumen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Text> Whats up today? </Text>
            <Text> Pimp my boobs: </Text>
            <Text> - Bench press 3x6 50kg </Text>
            <Text> - Dumbell press 3x6 30kg </Text>
            <Text> - Pullover 3x6 30kg </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});