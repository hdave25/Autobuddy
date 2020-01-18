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
     
      <View style={styles.container}>
      <ScrollView>
        <View>
        <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
        <View style={{alignSelf:'flex-end'}}>
        <TouchableOpacity><Text style={{ color: 'white', marginRight: 30}}>Edit</Text></TouchableOpacity>
          </View>
          <TouchableOpacity>
          <Image
            source={require('./images/man1.png')} style={{height: 100, width: 100, borderRadius: 100}}
          ></Image>
          </TouchableOpacity>
        
          <Text style={{fontSize: 20, color: 'white', marginTop: 7, paddingLeft: 10}}>Admin</Text>
          
          </LinearGradient>
        </View>

        <View>
          
          <TouchableOpacity style={styles.menu}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10}}>Add Appointment</Text>
          </TouchableOpacity>

        </View>


        <View>
          
          <TouchableOpacity style={styles.menu}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10}}>Appointment Requests</Text>
          </TouchableOpacity>

        </View>

        <View>
          
          <TouchableOpacity style={styles.menu}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10}}>Appointments</Text>
          </TouchableOpacity>

        </View>

        <View>
          
          <TouchableOpacity style={styles.menu}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10}}>Update Service Status</Text>
          </TouchableOpacity>

        </View>

        <View>
          
          <TouchableOpacity style={styles.menu}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10}}>Service History</Text>
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
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height: 180,
  },
  menu: {
    flexDirection: 'row',
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    height: 70,
    paddingTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
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
    
