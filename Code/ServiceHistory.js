/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';


export default class App extends Component {
  render() {
    return(
     
        
        <ImageBackground source={require('./images/background.png')} style={{width: '100%', height: '100%'}}>
    
        <View>
        <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
        <TouchableOpacity onPress={() => Actions.pop()}>
        
          <Image
            source={require ('./images/back1.png')} style={{height: 30, width: 30, marginLeft: 20, marginRight: 20}}
          ></Image></TouchableOpacity>
          <Text style={styles.autobuddy}>Service History</Text>
          </LinearGradient>
        </View>
        
        <ScrollView>
        <View style={styles.column}>
            <TouchableOpacity><View style={styles.note}>
			        <Text style={[styles.notehead,{color: 'green'}]}>Hyundai i20</Text>
              <Text style={[styles.notehead2,{color: 'crimson'}]}>VehicleID : #214521</Text>
              <Text style={styles.notedate}>20-07-2018</Text>
              <View style={{height:1, backgroundColor: 'black'}}></View>
			        <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
		        </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.note}>
			        <Text style={[styles.notehead,{color: 'purple'}]}>Suzuki Baleno</Text>
              <Text style={[styles.notehead2,{color: 'chocolate'}]}>VehicleID : #214521</Text>
              <Text style={styles.notedate}>18-07-2018</Text>
              <View style={{height:1, backgroundColor: 'black'}}></View>
			        <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
		        </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.note}>
			        <Text style={[styles.notehead,{color: 'blue'}]}>Suzuki Alto</Text>
              <Text style={[styles.notehead2,{color: 'chocolate'}]}>VehicleID : #214521</Text>
              <Text style={styles.notedate}>12-07-2018</Text>
              <View style={{height:1, backgroundColor: 'black'}}></View>
			        <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
		        </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.note}>
			        <Text style={[styles.notehead,{color: 'skyblue'}]}>Suzuki Gixer</Text>
              <Text style={[styles.notehead2,{color: 'chocolate'}]}>VehicleID : #214521</Text>
              <Text style={styles.notedate}>11-07-2018</Text>
              <View style={{height:1, backgroundColor: 'black'}}></View>
			        <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
		        </View></TouchableOpacity>

            <TouchableOpacity><View style={styles.note}>
			        <Text style={[styles.notehead,{color: 'red'}]}>Honda Hornet</Text>
              <Text style={[styles.notehead2,{color: 'chocolate'}]}>VehicleID : #214521</Text>
              <Text style={styles.notedate}>05-07-2018</Text>
              <View style={{height:1, backgroundColor: 'black'}}></View>
			        <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
		        </View></TouchableOpacity>

            
          </View>
          </ScrollView>
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
    flex:1,
  },
  header: {
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      height: 60,
      backgroundColor: 'blue'
  },
  autobuddy: {
    color: 'white',
    fontSize:30,
    fontWeight:'bold'

  }, 
  column: {
    flex:1,
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
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15
  },
  notehead2: {
    fontSize: 12,
    marginLeft: 15
  },
  notedate: {
    color: 'grey',
    fontSize: 12,
    marginLeft: 15,
    marginBottom: 5

  },
  textnote: {
    marginTop: 5,
    marginLeft: 15,
    marginBottom: 10
    
  }

  
  
});