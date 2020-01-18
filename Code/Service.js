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
import { Actions } from 'react-native-router-flux';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
            <TouchableOpacity onPress={() => Actions.pop()}>

              <Image
                source={require('./images/back1.png')} style={{ height: 30, width: 30, marginLeft: 20, marginRight: 20 }}
              ></Image></TouchableOpacity>
            <Text style={styles.autobuddy}>Service</Text>
          </LinearGradient>
        </View>

        <View style={styles.column}>

          <View style={styles.row}>
            <TouchableOpacity><View style={{ width: 150, height: 150, backgroundColor: 'white', elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./images/book.png')} style={{ width: 50, height: 50 }} />
              <Text style={{ fontWeight: 'bold', marginTop: 5 }}> General Service </Text>
            </View></TouchableOpacity>

            <TouchableOpacity><View style={{ width: 150, height: 150, backgroundColor: 'white', elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./images/book.png')} style={{ width: 50, height: 50 }} />
              <Text style={{ fontWeight: 'bold', marginTop: 5 }}> Dent/Scratch Removal </Text>
            </View></TouchableOpacity>

          </View>

          <View style={styles.row}>
            <TouchableOpacity><View style={{ width: 150, height: 150, backgroundColor: 'white', elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./images/book.png')} style={{ width: 50, height: 50 }} />
              <Text style={{ fontWeight: 'bold', marginTop: 5 }}> AC Service </Text>
            </View></TouchableOpacity>

            <TouchableOpacity><View style={{ width: 150, height: 150, backgroundColor: 'white', elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./images/book.png')} style={{ width: 50, height: 50 }} />
              <Text style={{ fontWeight: 'bold', marginTop: 5 }}> Car Polish </Text>
            </View></TouchableOpacity>

          </View>

          <View style={styles.row}>
            <TouchableOpacity><View style={{ width: 150, height: 150, backgroundColor: 'white', elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./images/book.png')} style={{ width: 50, height: 50 }} />
              <Text style={{ fontWeight: 'bold', marginTop: 5 }}> Repair Job </Text>
            </View></TouchableOpacity>

            <TouchableOpacity><View style={{ width: 150, height: 150, backgroundColor: 'white', elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./images/book.png')} style={{ width: 50, height: 50 }} />
              <Text style={{ fontWeight: 'bold', marginTop: 5 }}> Body Painting </Text>
            </View></TouchableOpacity>
          </View>

        </View>

      </View>



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
    backgroundColor: 'white'
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
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }

});



