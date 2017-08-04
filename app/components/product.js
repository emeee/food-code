import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Product extends Component {

  static navigationOptions = {
    title: 'Product',
  };

  render() {
    return (
      <View>
        <Text>Test foodcode</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('product', () => product);
