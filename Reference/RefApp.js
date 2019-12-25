import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class App extends Component{
  render() {
    return (
        
    <View style={{flex:1}}>
      <LinearGradient
      colors={['#5276F7', '#5276F7']}>

      <View style={{height:'12%',flexDirection:'row',justifyContent:'space-around'}}>
        
        <View>
          <Text style={{color:'#FFFFFF',fontSize:35,marginTop:10 }}>Umang Koshti</Text>
        </View>

        

      </View>
      </LinearGradient>

      <View style={{height:1, backgroundcolor:'black'}}/>
    

    </View>

      
    );
  }
}

const styles = StyleSheet.create({
  
    img:{
        height:35,
        width:35,}
});
