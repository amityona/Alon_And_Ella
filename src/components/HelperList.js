import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';

export default class HelperList extends Component {

    state = {
      email: '',
      password: '',
    };
  
  
  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Credentials', `email: ${email} + password: ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.titleText}>לתת עזרה</Text>
        <Text style={styles.titleText}>איך תרצו לעזור ?</Text>
                  <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button title="ריהוט"/>
             
              <View style={styles.buttonContainer}>
                <Button title="מקום עבודה"/>
              </View>
               </View>
               <View style={styles.buttonContainer}>
                <Button title="אוכל"/>
              
              <View style={styles.buttonContainer}>
                <Button title="הסעה"/>
              </View>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="מוצרי חשמל"/>
                 <View style={styles.buttonContainer}>
                <Button title="כסף"/>
                 
              <View style={styles.buttonContainer}>
                <Button title="צפו בכל הבקשות הפתחות"/>
                 <View style={styles.buttonContainer}>
                <Button title="הבקשות הפתוחות שלי"/>
              </View>
              </View>
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
