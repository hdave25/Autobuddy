import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class track extends Component{
  render() {
    return (
        
  <View style={{flex:1}} >
    <LinearGradient 
     colors={['#6e45e2', '#88d3ce']}>
      
      <View style={{height:'15%',flexDirection:'row',justifyContent:'space-around'}}>
        
        <View style={{marginTop:20}}>
          <Image source={require('./back.png')} style={styles.img}/>
        </View>

        <View>
          <Text style={{color:'#FFFFFF',fontSize:35,marginTop:10 }}>Service Tracking</Text>
        </View>

        <View  style={{marginTop:20}}> 
          <Image source={require('./route.png')} style={{  height:50, width:50}}/>
        </View>


      </View>
    </LinearGradient>
    
    <View style={{height:1, backgroundcolor:'black'}}/>
    
    <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:30}}>
      <Text style={{fontSize:25}}> ServiceId : </Text>
      <Text style={{color:'#2141CF',fontSize:25}}>#6543219</Text>
      <Image source={require('./automobile.png')} style={{  height:50, width:50}}/>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:50}}>

      <View>
        <Image source={require('./service.png')} style={{  height:80, width:80}}/>
        <Image source={require('./dot.png')} style={{  height:50, width:50, marginTop:30}}/>
        <Text  style={{fontSize:25, marginTop:20}}>Started</Text>
      </View>

      <View>
        <Image source={require('./car-wash.png')} style={{  height:80, width:80}}/>
        <Image source={require('./active.png')} style={{  height:50, width:50, marginTop:30}}/>
        <Text  style={{fontSize:25,color:'#2141CF', marginTop:20}}>Washing</Text>
      </View>

      <View>
        <Image source={require('./servicing.png')} style={{  height:80, width:80}}/>
        <Image source={require('./dot.png')} style={{  height:50, width:50, marginTop:30}}/>
        <Text  style={{fontSize:25, marginTop:20}}>Servicing</Text>
      </View>

      <View>
        <Image source={require('./car.png')} style={{   height:80, width:80}}/>
        <Image source={require('./dot.png')} style={{  height:50, width:50, marginTop:30}}/>
        <Text  style={{fontSize:25, marginTop:20}}>Ready</Text>
      </View>

    </View>

  </View>

      
    );
  }
}

const styles = StyleSheet.create({
  
    img:{
        height:35,
        width:35,}
});
