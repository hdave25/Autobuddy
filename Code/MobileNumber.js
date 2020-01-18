/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class App extends Component {
  render() {
    return (


      <ImageBackground source={require('./images/background.png')} style={{ width: '100%', height: '100%' }}>


      

        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

          <Text style={styles.text}>Enter Your Mobile Number</Text>

          <TextInput style={styles.textinput} placeholder="Mobile Number"
            underlineColorAndroid={'transparent'} />

          <View>
            <TouchableOpacity style={styles.button}>
              <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.gradient}>
                <Text style={{ fontSize: 25, color: '#ffffff' }}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

        </View>
       
      </ImageBackground>
      









      /* <View style={{ flex:1, flexDirection: 'column', justifyContent: 'space-between', marginTop:20}}>
 
       
         <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
   	
           <View style={{ width: 150, height:150, backgroundColor: 'white', elevation: 10, justifyContent:'center', alignItems:'center'}}>
             <Image  source= {require('./images/book.png')} style={{width:75, height:75}} />
             <Text style={{fontWeight: 'bold'}}> Real Estate </Text>
           </View>
   	
           <View style={{ width: 150, height:150, backgroundColor: 'white', elevation:10, justifyContent:'center', alignItems:'center'}} >
             <Image  source= {require('./images/book.png')} style={{width:75, height:75}} />
             <Text style={{fontWeight: 'bold'}}> Jobs </Text>
           </View>
   	
         </View>
   	
         <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-around', marginTop:40}}>
      
           <View style={{ width: 150, height:150, backgroundColor: 'white', elevation:10, justifyContent:'center', alignItems:'center'}} >
               <Image  source= {require('./images/book.png')} style={{width:75, height:75}} />
             <Text style={{fontWeight: 'bold'}}> Automobiles </Text>
           </View>
   	
           <View style={{ width: 150, height:150, backgroundColor: 'white', elevation:10, justifyContent:'center', alignItems:'center'}} >
               <Image  source= {require('./images/book.png')} style={{width:75, height:75}} />
             <Text style={{fontWeight: 'bold'}}> Electronics </Text>
           </View>
   	
         </View>
    
         <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
   	
           <View style={{ width: 150, height:150, backgroundColor: 'white', elevation: 10, justifyContent:'center', alignItems:'center'}} >
             <Image  source= {require('./images/book.png')} style={{width:75, height:75}} />
             <Text style={{fontWeight: 'bold'}}> Travels </Text>
           </View>
       	
           <View style={{ width: 150, height:150, backgroundColor: 'white', elevation:10, justifyContent:'center', alignItems:'center'}} >
             <Image  source= {require('./images/book.png')} style={{width:75, height:75}} />
             <Text style={{fontWeight: 'bold'}}> Education & Learning </Text>
           </View>
       	
         </View>
   	
     </View>
     
 */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'blue'
  },
  autobuddy: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'

  },
  text: {
    fontSize: 25,
    color: 'black',
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
    marginTop: 20
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
    borderRadius: 40
  }

});