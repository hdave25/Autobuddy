/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box'
import { AirbnbRating } from 'react-native-ratings';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked1:true,
      isChecked2:true,
      isChecked3:true,
      isChecked4:true,
      isChecked5:true,
      isChecked6:true,
      isChecked7:true,
    
    }
  }

  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }
  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.autobuddy}>AutoBuddy</Text>
          </View>

          <View>
            <Image source={require('./images/icon.png')} style={{height:30,width:30}}/>
          </View>
                    
        </View>

        <View style={{marginTop:30,justifyContent:'center', alignItems:'center',fontSize:50}}>
        <Text style={{fontSize:30,color:'steelblue'}}>Sign up</Text>
          <Text style={{fontSize:30,color:'dodgerblue'}}>Service Provider</Text>
        </View>

        <View>
          <TextInput style={styles.textinput} placeholder="Your Name"
          underlineColorAndroid={'transparent'}/>

          <TextInput style={styles.textinput} placeholder="Mobile Number"
          underlineColorAndroid={'transparent'}/>

          <TextInput style={styles.textinput} placeholder="Password"
          secureTextEntry={true} underlineColorAndroid={'transparent'}/>

          <TextInput style={styles.textinput} placeholder="Email"
          underlineColorAndroid={'transparent'}/>
           <TextInput style={styles.textinput} placeholder="Centre Name"
          underlineColorAndroid={'transparent'}/>
           <TextInput style={styles.textinput} placeholder="Address"
          underlineColorAndroid={'transparent'}/>
          </View>

          <View style={{marginTop:20,marginLeft:30}}>
          
            <Text style={{fontSize: 25,color:'steelblue'}}>Services that will be Provided</Text>

          <CheckBox
 style={{flex: 1,marginRight:90, padding: 10}}
     onClick={()=>{
      this.setState({
          isChecked1:!this.state.isChecked1
      })
    }}
    isChecked={this.state.isChecked1}
    leftText={"General Service"}
    leftTextStyle={{fontSize:20,color:'deepskyblue'}}
/>



 <CheckBox
 style={{flex: 1,marginRight:90, padding: 10}}
 onClick={()=>{
      this.setState({
          isChecked2:!this.state.isChecked2
      })
    }}
    isChecked={this.state.isChecked2}
    leftText={"Dent/Scratch removal"}
    leftTextStyle={{fontSize:20,color:'deepskyblue'}}
/>


 <CheckBox
 style={{flex: 1,marginRight:90, padding: 10}}
 onClick={()=>{
      this.setState({
          isChecked3:!this.state.isChecked3
      })
    }}
    isChecked={this.state.isChecked3}
    leftText={"AC service"}
    leftTextStyle={{fontSize:20,color:'deepskyblue'}}
/>


 <CheckBox
 style={{flex: 1,marginRight:90, padding: 10}}
 onClick={()=>{
      this.setState({
          isChecked4:!this.state.isChecked4
      })
    }}
    isChecked={this.state.isChecked4}
    leftText={"Washing"}
    leftTextStyle={{fontSize:20,color:'deepskyblue'}}
/>

 <CheckBox
 style={{flex: 1,marginRight:90, padding: 10}}
 onClick={()=>{
      this.setState({
          isChecked5:!this.state.isChecked5
      })
    }}
    isChecked={this.state.isChecked5}
    leftText={"Polish"}
    leftTextStyle={{fontSize:20,color:'deepskyblue'}}
/>


 <CheckBox
 style={{flex: 1,marginRight:90, padding: 10}}
 onClick={()=>{
      this.setState({
          isChecked6:!this.state.isChecked6
      })
    }}
    isChecked={this.state.isChecked6}
    leftText={"Repairing"}
    leftTextStyle={{fontSize:20,color:'deepskyblue'}}
/>


 <CheckBox
 style={{flex: 1,marginRight:90, padding: 10}}
 onClick={()=>{
      this.setState({
          isChecked7:!this.state.isChecked7
      })
    }}
    isChecked={this.state.isChecked7}
    leftText={"Body Painting"}
    leftTextStyle={{fontSize:20,color:'deepskyblue'}}
/>


          
        </View>

        <View>
        <TouchableOpacity style={styles.button}>
        <LinearGradient colors={['dodgerblue', 'deepskyblue','skyblue']} style={styles.gradient}>
              <Text style={{fontSize:25,fontWeight:'bold',color:'#ffffff'}}>Sign Up</Text>
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
    flex:1,
    backgroundColor:'white'
  },
  header: {
    marginTop:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  autobuddy: {
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1}, 
    textShadowRadius: 1,
    fontSize:40, fontWeight:'bold'
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
    marginTop:20
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,
    marginBottom: 50
  },
  gradient: {
    justifyContent:'center',
    alignItems:'center',
    height:60,
    width:200,
    borderRadius:40,
    elevation:5
  }
});
