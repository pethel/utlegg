import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import sendMail from './src/mail-service';
import DatePicker from './src/DatePicker';

export default class Utlegg extends Component {

  takePicture() {
    const options = {};
    this.camera.capture({metadata: options})
      .then((data) => {
        console.log(data);
        sendMail();
      })
      .catch(err => console.error(err));
  }

  render() {
    console.log(DatePicker);
    return (
      <View style={styles.container}>
        <View style={styles.date}>
          <DatePicker />
        </View>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>CLICK</Text>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

AppRegistry.registerComponent('Utlegg', () => Utlegg);
