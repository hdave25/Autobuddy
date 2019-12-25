

import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';



export default class Home extends Component{
  render() {
    return (
    
      <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
      <View >
       <Text style={{ textShadowColor: 'black',
           textShadowOffset: { width: 1, height: 1},
           textShadowRadius: 1,fontSize:60, fontWeight:'bold'}}>Autobuddy</Text>
       </View>
       <Image source={require('./icon.png')} style={{height:30,width:30}}/>
       </View>
         <View style={{ marginTop:150}}>
           <View style={{flexDirection:'row',justifyContent:'space-around', alignItems:'center' }}>
           <Image source={require('./bike.png')} style={styles.img}/>
           <Image source={require('./automobile.png')} style={styles.img}/>
           <Image source={require('./motorbiking.png')} style={styles.img}/>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-around', marginTop:20, alignItems:'center'}}>
           <Image source={require('./service.png')} style={styles.img}/>
           <Image source={require('./route.png')} style={styles.img}/>
           <Image source={require('./insurance.png')} style={styles.img}/>
           </View>
         </View>
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent:'center',
   backgroundColor:'white'
  
   
  },
  linearGradient: {
    flex: 1
  },
  img:{
    height:80,
    width:80,
   
  }
 
 
});
