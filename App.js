/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import axios from "axios" ;


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  state = {
    data : "prvo ovo"
  }


 fetchData = () => {
  axios.get('')
  .then(function (response) {
    this.setState({
      data : response.data 
    })
  })
  .catch(function (error) {
    
  }); 

 }


 

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.instructions}>Test brzi : {this.state.data}</Text>
        <Button
          title="AddData"
          
          onPress={this.fetchData}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 100,
  },
});
