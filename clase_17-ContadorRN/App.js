import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    }
  }


  render() {

    return (
      <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <Text style={{fontSize:30}}>Contador: {this.state.contador}</Text>
        <Button title="Incrementar" onPress={() => this.setState({contador: this.state.contador + 1}) }/>
        <Button title="Decrementar" onPress={() => this.setState({contador: this.state.contador - 1}) }/>
        <Button title="Reset" onPress={() => this.setState({contador: 0}) }/>
      </View>
    )
  }

}





