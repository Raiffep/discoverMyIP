
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from './imagens/icon2.png'

export default class App extends Component {
  constructor(props){
    super(props)
    //this.findMyIp = this.findMyIp.bind(this)
    this.state = {
      data: ''
    }
  }
  findMyIp = async () => {
    this.setState({
      data: 'discover IP...'
    })
    const ip = await fetch('http://httpbin.org/ip')
    const data = await ip.json()

    var first = "";
    var i =0;
    var letra;
    while (letra != ",") {
        letra = data.origin.charAt(i);
        first = data.origin.substr(0,i); //o comando .substr(x,x) pega as letras no intervalo definido entre os
        //parênteses.  
        i++;
    }
    this.setState({
      data: first
    })    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.ip}>{this.state.data}</Text>
          <TouchableOpacity style={styles.button} onPress={this.findMyIp}>
            <Text style={styles.buttonText}>Discover my IP!</Text>
          </TouchableOpacity>      
        </View>
        <View style={styles.footer}>
          <Text style={styles.made}>by Raiffe Pontes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#0B3861',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ip: {
    fontWeight: 'bold',
    color: '#efefef',
    paddingTop: 20,
    paddingBottom: 20
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 6
  },
  made: {
    //fontWeight: 'bold',
    color: '#efefef',
    textAlign: 'center',
    fontSize: 12
  },
  button: {
    height: 30,
    width: 120,
    alignItems: 'center',
    //marginTop: 10,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#efefef'
  },
  buttonText: {
    color: '#0B3861',
    fontWeight: 'bold',
    fontSize: 16
  },
  logo: {
    width: 180,
    height: 180
  }
});
