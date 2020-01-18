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
          <Text style={styles.autobuddy}>Fuel Stations</Text>
          </LinearGradient>
        </View>
        
        <ScrollView>
        <View>
                      <Text style={{fontSize: 15, color: 'grey', marginLeft: 15, marginTop: 5}}>3 Results...</Text>
                    </View>
          <View style={{marginTop: 10}}>
            <FlatList
                    data={[{
                        title: 'Shell Petrol Pump',
                        description: 'Lorem Ipsum is simply dummy text of...',
                        distance: '3 KM',
                        contact: 'Direction',
                       },
                        {
                          title: 'Indian Oil Petrol Pump',
                          description: 'Lorem Ipsum is simply dummy text of...',
                          distance: '4 KM',
                          contact: 'Direction',    
                        },
                        {
                          title: 'HP Petrol Pump',
						              description: 'Lorem Ipsum is simply dummy text of...',
                          distance: '5 KM',
                          contact: 'Direction',
                        },
                    ]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) =>
                    

                    
                    <View style={{flexDirection: 'column'}}>


                    <View style={{ marginTop: 5, flexDirection: 'row',justifyContent:'space-around'}}>

                    <View style={{flexDirection: 'column', marginLeft: 5, width: '60%'}}>
                      <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', marginLeft: 5}}>{item.title}</Text>
                      <Text style={{color: 'grey', fontSize: 15, marginLeft: 5}}>{item.description}</Text>
                      <Text style={{color: 'grey', fontSize: 15, marginLeft: 5, marginBottom: 5}}>{item.distance}</Text>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.button}>
        <LinearGradient colors={['skyblue', 'blue']} style={styles.gradient}>
              <Text style={{fontSize:20,color:'white'}}>Direction</Text>
             </LinearGradient>
        </TouchableOpacity>

        </View>

        </View>
        <View style={{height:1, backgroundColor: 'black'}}></View>
        </View> 
        }
        />



        
        </View>
            
          
        </ScrollView>
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
    
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
  },
  gradient: {
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    width: 90,
    height: 40
  }


  
  
});