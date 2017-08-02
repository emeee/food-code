import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';

export default class foodcode extends Component {

  constructor(props) {
    super(props);
  }

  _onPressSearch(){
      Alert.alert("Presionaste el boton");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Producto:</Text>
        <TextInput
          style={{width: 250, borderColor: 'gray', borderWidth: 0}}
        />
        <Button
          onPress= {this._onPressSearch}
          title="Buscar"
          color="#841584"
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
});

AppRegistry.registerComponent('foodcode', () => foodcode);
