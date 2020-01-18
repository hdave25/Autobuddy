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


export default class App extends Component {

  state = {
    pickedImage: require('./images/man1.png')
  }

  reset = () => {
    this.setState({
      pickedImage: null
    });
  }

  /**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */

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

      <ImageBackground source={require('./images/background.png')} style={{ width: '100%', height: '100%' }}>

        <View>


          <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
            <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <TouchableOpacity>
                  <Image
                    source={require('./images/back1.png')} style={{ height: 30, width: 30, marginLeft: 20, marginRight: 20 }}
                  ></Image></TouchableOpacity></View>
              <View >
                <TouchableOpacity><Text style={{ color: 'white', marginRight: 30 }}>Edit</Text></TouchableOpacity>
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={this.pickImageHandler}>
                <Image
                  source={this.state.pickedImage} style={{ height: 100, width: 100, borderRadius: 100 }}
                ></Image>
              </TouchableOpacity>
            </View>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', marginTop: 7, paddingLeft: 10 }}>UserName</Text>

          </LinearGradient>
        </View>

        <ScrollView>
          <View style={styles.column}>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.text}>Mobile Number : 9999999999</Text>
              <View style={{ flexDirection: 'row'}}>
                <View><Text style={styles.text}>Address : </Text></View>
                <View>
                  <Text style={{ fontSize: 15 ,marginTop: 15}}>Lorem Ipsum is simply dummy</Text>
                  <Text style={{ fontSize: 15 }}>Lorem Ipsum is simply dummy</Text>
                  <Text style={{ fontSize: 15 }}>Lorem Ipsum is simply dummy</Text>
                </View>
              </View>
              <Text style={styles.text}>Email : abc@gmail.com</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'column',

    height: 200,
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
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

