/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class OTP extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>

          <Text style={styles.headertext}>Verifying your Phone Number!</Text>


        </View>

        <View style={{ marginTop: 50 }}>
          <Text style={styles.blacktext}>We have sent an OTP on your number +91 9999999999</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

          <View>
            <TextInput style={styles.textinput} placeholder="" underlineColorAndroid={'transparent'} />
          </View>

          <View>
            <TextInput style={styles.textinput} placeholder="" underlineColorAndroid={'transparent'} />
          </View>

          <View>
            <TextInput style={styles.textinput} placeholder="" underlineColorAndroid={'transparent'} />
          </View>

          <View>
            <TextInput style={styles.textinput} placeholder="" underlineColorAndroid={'transparent'} />
          </View>


        </View>

        <View style={{ marginTop: 50 }}>
          <Text style={styles.blacktext}>Resend OTP?</Text>

        </View>

        <View>
          <TouchableOpacity style={styles.button}>
            <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.gradient}>
              <Text style={{ fontSize: 25, color: '#ffffff' }}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headertext: {
    textShadowColor: 'skyblue',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textinput: {
    height: 50,
    width: 50,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'blue',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    borderRadius: 5
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 200,
    borderRadius: 40,
    elevation: 10
  },
  blacktext: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'grey',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
});
