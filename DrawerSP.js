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

      <View style={styles.container}>
        <ScrollView>
          <View>
            <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
              <View style={{ alignSelf: 'flex-end' }}>
                <TouchableOpacity><Text style={{ color: 'white', marginRight: 30 }}>Edit</Text></TouchableOpacity>
              </View>
              <TouchableOpacity onPress={this.pickImageHandler}>
                <Image
                  source={this.state.pickedImage} style={{ height: 100, width: 100, borderRadius: 100 }}
                ></Image>
              </TouchableOpacity>

              <Text style={{ fontSize: 20, color: 'white', marginTop: 7, paddingLeft: 10 }}>ServiceProviderName</Text>

            </LinearGradient>
          </View>

          <View>

            <TouchableOpacity style={styles.menu}>
              <Image
                source={require('./images/setting.png')} style={{ height: 30, width: 30 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Settings</Text>
            </TouchableOpacity>

          </View>


          <View>

            <TouchableOpacity style={styles.menu}>
              <Image
                source={require('./images/favorite.png')} style={{ height: 30, width: 30 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Rate</Text>
            </TouchableOpacity>

          </View>

          <View>

            <TouchableOpacity style={styles.menu}>
              <Image
                source={require('./images/notifications-menu.png')} style={{ height: 30, width: 30 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Notifications</Text>
            </TouchableOpacity>

          </View>

          <View>
            <TouchableOpacity style={styles.button}>
              <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.gradient}>
                <Text style={{ fontSize: 25, color: '#ffffff' }}>Log out</Text>
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
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 70,
    paddingLeft: 20,
    paddingTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 30
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 200,
    borderRadius: 40
  },
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

