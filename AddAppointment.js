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
import DatePicker from 'react-native-datepicker';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { date: "2016-05-15" }
  }

  render() {
    return (

      <View style={styles.container}>

        <View>
          <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
            <TouchableOpacity>

              <Image
                source={require('./images/menu1.png')} style={{ height: 30, width: 30, marginLeft: 20, marginRight: 20 }}
              ></Image></TouchableOpacity>
            <Text style={styles.autobuddy}>Add Appointment</Text>
          </LinearGradient>
        </View>

        <View>
          <TextInput style={styles.textinput} placeholder="Name"
            underlineColorAndroid={'transparent'} />

          <TextInput style={styles.textinput} placeholder="Vehicle"
            underlineColorAndroid={'transparent'} />

          <TextInput style={styles.multitextinput} placeholder="Service List; e.g., AC Repair"
            underlineColorAndroid={'transparent'} multiline={true} />

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 20, marginLeft: 35, marginBottom: 8}}>Select Date</Text>
          </View>
          <DatePicker
            style={{ marginTop: 15, marginLeft: 30, width: 300}}
            date={this.state.date}
            mode="datetime"
            placeholder="select date"
            format="'MMMM Do YYYY, h:mm:ss a'"
            minDate="2018-10-05"
            maxDate="2024-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{

              dateInput: {

                borderWidth: 1,
                height: 60,
                borderRadius: 50
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}
          />

        </View>

        <View>
          <TouchableOpacity style={styles.button}>
            <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.gradient}>
              <Text style={{ fontSize: 25, color: '#ffffff' }}>Book</Text>
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
  textinput: {
    height: 50,
    fontSize: 20,
    paddingBottom: 10,
    color: 'grey',
    borderBottomColor: 'skyblue',
    borderBottomWidth: 2,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20
  },
  multitextinput: {
    fontSize: 20,
    color: 'grey',
    borderBottomColor: 'skyblue',
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

