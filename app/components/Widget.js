import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

// const kitten = require('./kitten.jpg');
const logo = require('./logo.png');

export default class ReactNativeCliTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          I R A WIDGET COMPONENT
        </Text>
        <Text style={styles.instructions}>
          THAR BE IMAGES BELOW MATEY HOT DAMN
        </Text>
        <Image
          style={{width: 50, height: 50}}
          source={logo}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 200,
    height: 140,
  }
});
