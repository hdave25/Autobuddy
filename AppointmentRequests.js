/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, FlatList, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class App extends Component {
  render() {
    return(
     
      <ImageBackground source={require('./images/background.png')} style={{width: '100%', height: '100%'}}>
    
      <View>
      <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
      <TouchableOpacity>
      
        <Image
          source={require ('./images/menu1.png')} style={{height: 30, width: 30, marginLeft: 20, marginRight: 20}}
        ></Image></TouchableOpacity>
        <Text style={styles.autobuddy}>Appointment Requests</Text>
        </LinearGradient>
      </View>
      
      <ScrollView>
      <View>
          <View style={styles.note}>
            <View style={styles.column}>
              <View style={styles.row}>
                <View style={{width: '50%'}}>
                  <Text style={[styles.notehead,{color: 'green'}]}>Service Request</Text>
                  <Text style={styles.notedate}>20-07-2018 | 12:06 PM</Text>
                  <Text style={styles.notedate}>Request ID : 214548</Text>
                </View>
                <View style={{width: '25%'}}>
                  <TouchableOpacity style={styles.button}>
                    <LinearGradient colors={['darkgreen', 'green']} style={styles.gradient}>
                      <Text style={{fontSize:15 ,color:'#ffffff'}}>Accept</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                <View style={{width: '25%'}}>
                  <TouchableOpacity style={styles.button}>
                    <LinearGradient colors={['darkred', 'red']} style={styles.gradient}>
                      <Text style={{fontSize:15 ,color:'#ffffff'}}>Decline</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{height:1, backgroundColor: 'black'}}></View>
            <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
          </View>

          <View style={styles.note}>
            <View style={styles.column}>
              <View style={styles.row}>
                <View style={{width: '50%'}}>
                  <Text style={[styles.notehead,{color: 'green'}]}>AC Repair</Text>
                  <Text style={styles.notedate}>20-07-2018 | 11:22 AM</Text>
                  <Text style={styles.notedate}>Request ID : 214549</Text>
                </View>
                <View style={{width: '25%'}}>
                  <TouchableOpacity style={styles.button}>
                    <LinearGradient colors={['darkgreen', 'green']} style={styles.gradient}>
                      <Text style={{fontSize:15 ,color:'#ffffff'}}>Accept</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                <View style={{width: '25%'}}>
                  <TouchableOpacity style={styles.button}>
                    <LinearGradient colors={['darkred', 'red']} style={styles.gradient}>
                      <Text style={{fontSize:15 ,color:'#ffffff'}}>Decline</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{height:1, backgroundColor: 'black'}}></View>
            <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
          </View>

          <View style={styles.note}>
            <View style={styles.column}>
              <View style={styles.row}>
                <View style={{width: '50%'}}>
                  <Text style={[styles.notehead,{color: 'green'}]}>Service Request</Text>
                  <Text style={styles.notedate}>20-07-2018 | 11:19 AM</Text>
                  <Text style={styles.notedate}>Request ID : 214550</Text>
                </View>
                <View style={{width: '25%'}}>
                  <TouchableOpacity style={styles.button}>
                    <LinearGradient colors={['darkgreen', 'green']} style={styles.gradient}>
                      <Text style={{fontSize:15 ,color:'#ffffff'}}>Accept</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                <View style={{width: '25%'}}>
                  <TouchableOpacity style={styles.button}>
                    <LinearGradient colors={['darkred', 'red']} style={styles.gradient}>
                      <Text style={{fontSize:15 ,color:'#ffffff'}}>Decline</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{height:1, backgroundColor: 'black'}}></View>
            <Text style={styles.textnote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
          </View>
          
        </View>
        </ScrollView>
      </ImageBackground>
      
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
    fontSize:25,
    fontWeight:'bold'

  }, 
  column: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flex:1,
    flexDirection: 'row',
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
    
  },
  button: {
    justifyContent:'center',
    alignItems:'center'
  },
  gradient: {
    justifyContent:'center',
    alignItems:'center',
    height:40,
    width:70,
    borderRadius:10
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
    
