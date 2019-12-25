

import React, {Component} from 'react';
import { StyleSheet,TouchableOpacity, Text, View, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class Home extends Component{
  render() {
    return (
  
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.Login()} >
      <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
      <View >
       <Text style={{ textShadowColor: 'black',
           textShadowOffset: { width: 1, height: 1},
           textShadowRadius: 1,fontSize:60, fontWeight:'bold'}}>AutoBuddy</Text>
       </View>
       <Image source={require('./images/icon.png')} style={{height:30,width:30}}/>
       </View>
         <View style={{ marginTop:150}}>
           <View style={{flexDirection:'row',justifyContent:'space-around', alignItems:'center' }}>
           <Image source={require('./images/bike.png')} style={styles.img}/>
           <Image source={require('./images/automobile.png')} style={styles.img}/>
           <Image source={require('./images/motorbiking.png')} style={styles.img}/>
           </View>
           <View style={{flexDirection:'row',justifyContent:'space-around', marginTop:20, alignItems:'center'}}>
           <Image source={require('./images/service.png')} style={styles.img}/>
           <Image source={require('./images/route.png')} style={styles.img}/>
           <Image source={require('./images/insurance.png')} style={styles.img}/>
           </View>
         </View>
         </TouchableOpacity>
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
