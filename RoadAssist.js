/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, FlatList, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';


export default class App extends Component {
  render() {
    return (


      <ImageBackground source={require('./images/background.png')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <View>
            <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
              <TouchableOpacity onPress={() => Actions.pop()}>

                <Image
                  source={require('./images/back1.png')} style={{ height: 30, width: 30, marginLeft: 20, marginRight: 20 }}
                ></Image></TouchableOpacity>
              <Text style={styles.autobuddy}>Emergency</Text>
            </LinearGradient>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, color: 'grey', marginTop: 10 }}>Road Assist services at your location</Text>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
            <Image source={require('./images/shield.png')} style={{ width: 100, height: 100 }} />
            <Text style={{ fontSize: 14, color: 'black', marginTop: 10 }}>Road Assist</Text>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, color: 'grey', marginTop: 10, textAlign: 'center' }}>We pick the closest help. Click on icons to place a call for your emergency.</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                <Image source={require('./images/police.png')} style={{ width: 80, height: 80 }} />
                <Text style={{ fontSize: 14, color: 'black', marginTop: 10 }}>Police</Text>
              </View>

              <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
                <Image source={require('./images/ambulance.png')} style={{ width: 80, height: 80 }} />
                <Text style={{ fontSize: 14, color: 'black', marginTop: 10 }}>Ambulance</Text>
              </View>

              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('./images/fire-truck.png')} style={{ width: 80, height: 80 }} />
                <Text style={{ fontSize: 14, color: 'black', marginTop: 10 }}>Fire Service</Text>
              </View>
            </View>
          </View>

        </View>

      </ImageBackground>


    );
  }
}




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

});