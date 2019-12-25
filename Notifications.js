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
import { Actions } from 'react-native-router-flux';


export default class App extends Component {
  render() {
    return (


      <ImageBackground source={require('./images/background.png')} style={{ width: '100%', height: '100%' }}>

        <View>
          <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
            <TouchableOpacity onPress={() => Actions.pop()}>

              <Image
                source={require('./images/back1.png')} style={{ height: 30, width: 30, marginLeft: 20, marginRight: 20 }}
              ></Image></TouchableOpacity>
            <Text style={styles.autobuddy}>Notifications</Text>
          </LinearGradient>
        </View>

        <ScrollView>
          <View style={styles.column}>
            <TouchableOpacity><View style={styles.note}>
              <Text style={[styles.notehead, { color: 'green' }]}>Service Remainder</Text>
              <Text style={styles.notedate}>20-07-2018 | 6:19 AM</Text>
              <View style={{ height: 1, backgroundColor: 'black' }}></View>
              <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.note}>
              <Text style={[styles.notehead, { color: 'purple' }]}>Offers</Text>
              <Text style={styles.notedate}>18-07-2018 | 11:27 PM</Text>
              <View style={{ height: 1, backgroundColor: 'black' }}></View>
              <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.note}>
              <Text style={[styles.notehead, { color: 'blue' }]}>Service Completion</Text>
              <Text style={styles.notedate}>12-07-2018 | 5:12 PM</Text>
              <View style={{ height: 1, backgroundColor: 'black' }}></View>
              <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.note}>
              <Text style={[styles.notehead, { color: 'skyblue' }]}>Appointment Booked</Text>
              <Text style={styles.notedate}>11-07-2018 | 10:20 PM</Text>
              <View style={{ height: 1, backgroundColor: 'black' }}></View>
              <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.note}>
              <Text style={[styles.notehead, { color: 'red' }]}>Offers</Text>
              <Text style={styles.notedate}>05-07-2018 | 8:42 PM</Text>
              <View style={{ height: 1, backgroundColor: 'black' }}></View>
              <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
            </View></TouchableOpacity>


          </View>
        </ScrollView>
      </ImageBackground>
      
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
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  note: {
    width: '100%',
    backgroundColor: 'white',
    elevation: 10,
    marginTop: 10
  },
  notehead: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15
  },
  notedate: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 5

  },
  textnote: {
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 10

  }

});

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