import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import RoutineResumen from './../components/routineResumen';

export default class Profile extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: 'http://s3.amazonaws.com/hiphopdx-production/2015/06/Ice-Cube_06-08-2015.jpg'}}
          />
          <Text> Ice Cube </Text>
          <Text> 6 month Goal </Text>
          <ProgressBar progress={0.3} width={200} color={'#ECF0F1'}/>
          <Text> This month Goal </Text>
          <ProgressBar progress={0.8} width={200} color={'#ECF0F1'}/>
          <RoutineResumen/>
          <Button
              title="Kick it"
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
  image: {
    width: 50, 
    height: 50,
  },
});
