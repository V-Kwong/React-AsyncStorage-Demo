import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    'saved': '',
    'value': ''
  }

  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null){
        this.setState({ 'saved': value });
      }
    } catch (error) {
      console.log(error);
    }
  }

  setName = async () => {
    try {
      const newName = this.state.value;
      await AsyncStorage.setItem('name', newName);
      this.setState({ 'saved': newName });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} 
          onChangeText={(value) => this.setState({'value': value})}
          onSubmitEditing={this.setName}/>
        <Text>{this.state.saved}</Text>
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
