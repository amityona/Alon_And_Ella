import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react';


export default class foodTransfer extends Component {

    state = {
      email: '',
      password: '',
    };
  
  
  onLogin() {
    
  }

  render() {
    return ( 
      
      <View style={styles.container}>
      <Text style={styles.titleText}>שינוע מזון</Text>
        <Text style={styles.titleText}>30.10.20</Text>
                  <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button title="נא פרט את בקשתך :"/>
            
              </View>
       <View  style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button title="חזור"/>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="מחק"/>
              </View>
               <View style={styles.buttonContainer}>
                <Button title="בוצע"/>
              </View>
            </View>
              </View>
              </View>

     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'salmon',
  },
  titleText:{
    fontFamily: 'Baskerville',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText:{
    fontFamily: 'Baskerville',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    fontFamily: 'Baskerville',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
});
