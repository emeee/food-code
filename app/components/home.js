import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Product from './product'

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Inicio',
  };

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Producto:</Text>
        <TextInput
          style={{width: 250, borderColor: 'gray', borderWidth: 0}}
        />
        <Button
          //onPress= {this._onPressSearch}
          onPress={() => navigate('Product')}
          title="Buscar"
          color="#841584"
        />
        <Text></Text>
        <Text style={{fontWeight: 'bold'}}>Ó</Text>
        <Text></Text>
        <Button
          onPress={() => navigate('Product')}
          title="Escanea el codigo"
          color="#3b5998"
        />
      </View>
    );
  }
}


const foodcode = StackNavigator({
  Home: { screen: Home },
  Product: { screen: Product },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('foodcode', () => foodcode);
