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
import ImagePicker from "react-native-image-picker";
import { Actions } from 'react-native-router-flux';


export default class App extends Component {
  state = {
    pickedImage: null
  }

  reset = () => {
    this.setState({
      pickedImage: null
    });
  }
  pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: "Pick an Image", maxWidth: 800, maxHeight: 600 }, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        });

      }
    });
  }

  resetHandler = () => {
    this.reset();
  }



  render() {
    return (

      <View style={styles.container}>
        <ScrollView>
        <TouchableOpacity onPress={() => Actions.Homescreen()}><Image
                source={require('./images/back.png')} style={{ height: 30, width: 30, marginLeft: 20, marginTop: 20, marginRight: 20 }}
              ></Image></TouchableOpacity>
          <View style={styles.header}>
            <View>
              <Text style={styles.autobuddy}>Add Vehicle</Text>
            </View>

          </View>

          <View>
            <TextInput style={styles.textinput} placeholder="Vehicle Type"
              underlineColorAndroid={'transparent'} />

            <TextInput style={styles.textinput} placeholder="Vehicle Company"
              underlineColorAndroid={'transparent'} />

            <TextInput style={styles.textinput} placeholder="Model"
              underlineColorAndroid={'transparent'} />
            <View style={styles.column}>
              <View style={styles.row}>

                <View style={{marginTop: 20 }}>
                  <TouchableOpacity onPress={this.pickImageHandler} style={styles.buttonupload}>
                    <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.gradientupload}>
                      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Upload RC</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
                <View >
                  <Image
                    source={this.state.pickedImage} style={{ height: 100, width: 100 }}
                  ></Image>
                </View>


              </View>
            </View>

          </View>

          <View>
            <TouchableOpacity style={styles.button}>
              <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.gradient}>
                <Text style={{ fontSize: 25, color: '#ffffff' }}>Add</Text>
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
    flex: 1,
    backgroundColor: 'white'
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
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  autobuddy: {
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontSize: 40, fontWeight: 'bold'
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
    marginBottom: 50,
    marginTop: 30
  },
  buttonupload: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 200,
    borderRadius: 40
  },
  gradientupload: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    borderRadius: 2
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

