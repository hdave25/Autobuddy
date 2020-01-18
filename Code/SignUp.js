/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class SignUp extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.autobuddy}>AutoBuddy</Text>
          </View>

          <View>
            <Image source={require('./images/icon.png')} style={{height:30,width:30}}/>
          </View>
                    
        </View>

        <View style={{marginTop:50,justifyContent:'center', alignItems:'center',fontSize:50}}>
          <Text style={{fontSize:30,color:'blue'}}>SIGNUP</Text>
        </View>

        <View>
          <TextInput style={styles.textinput} placeholder="Your Name"
          underlineColorAndroid={'transparent'}/>

          <TextInput style={styles.textinput} placeholder="Mobile Number"
          underlineColorAndroid={'transparent'}/>

          <TextInput style={styles.textinput} placeholder="Password"
          secureTextEntry={true} underlineColorAndroid={'transparent'}/>

          <TextInput style={styles.textinput} placeholder="Address"
          underlineColorAndroid={'transparent'}/>

          <TextInput style={styles.textinput} placeholder="Email"
          underlineColorAndroid={'transparent'}/>
          
        </View>

        <View>
        <TouchableOpacity style={styles.button}>
        <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.gradient}>
              <Text style={{fontSize:25,color:'#ffffff'}}>Sign Up</Text>
             </LinearGradient>
        </TouchableOpacity>

        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white'
  },
  header: {
    marginTop:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  autobuddy: {
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1}, 
    textShadowRadius: 1,
    fontSize:40, fontWeight:'bold'
  },
  textinput: {
    height: 50,
    fontSize: 20,
    paddingBottom: 10,
    color: 'grey',
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    marginLeft: 30,
    marginRight: 30,
    marginTop:20
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,
    marginBottom: 50
  },
  gradient: {
    justifyContent:'center',
    alignItems:'center',
    height:60,
    width:200,
    borderRadius:40
  }
});
