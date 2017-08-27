import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Camera from 'react-native-camera';
import sendMail from './src/mail-service';
import DatePicker from './src/DatePicker';
import formatToNorwegian from './src/date-service';

export default class Utlegg extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.state = {
      date: new Date(),
      sum: ''
    };
  }

  takePicture() {
    const options = {};
    this.camera.capture({metadata: options})
      .then((data) => {
        const date = formatToNorwegian(this.state.date);
        const { path } = data;
        sendMail({ date, path, amount: `${this.state.sum} kr` });
      })
      .catch(err => console.error(err));
  }

  dateChange(date) {
    this.setState({ date: new Date(date) });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.date}>
          <DatePicker onChange={this.dateChange} date={this.state.date} />
        </View>
        <View style={styles.sum}>
          <Text>Summa</Text>
          <TextInput style={styles.sumField}
                     value={this.state.sum}
                     onChangeText={(sum) => this.setState({ sum })}
                     editable = {true}
                     maxLength = {10} />
        </View>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          captureTarget={Camera.constants.CaptureTarget.disk}
          captureQuality={Camera.constants.CaptureQuality.medium}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>SEND</Text>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sum: {
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  sumField: {
    flex: 1
  },
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
