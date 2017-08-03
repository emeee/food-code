import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  // _onPressSearch(){
  //     Alert.alert("Presionaste el boton");
  // }

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
      </View>
    );
  }
}

class Product extends Component {
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
