import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Product extends Component {

  static navigationOptions = {
    title: 'Product',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
              Don Satur
          </Text>
          <Image
            source={require('../images/product-1.jpg')}
          />
        </View>
        <View style={styles.labels}>
          <Image
            source={require('../images/label-1.png')}
          />
          <Image
            source={require('../images/label-2.png')}
          />
          <Image
            source={require('../images/label-3.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  labels: {
    flexDirection: 'row',
  }
});

AppRegistry.registerComponent('product', () => product);
