import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    'name': ''
  }

  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null){
        this.setState({ 'name': value });
      }
    } catch (error) {
      console.log(error);
    }
  }

  setName = async (value) => {
    try {
      await AsyncStorage.setItem('name', value);
      this.setState({ 'name': value });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} onChangeText={this.setName}/>
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
   },
   textInput: {
      margin: 15,
      height: 35,
      borderWidth: 1,
      backgroundColor: '#7685ed'
   }
});
