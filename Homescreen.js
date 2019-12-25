import React, {Component} from 'react';
import {StyleSheet, Text,TouchableOpacity, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';



export default class log extends Component{
  render() {
    return (
        
      <View style={{flex:1, backgroundColor: 'white'}}>
       <LinearGradient colors={['dodgerblue', 'deepskyblue','skyblue']}>
      <View style={{height:'12%',flexDirection:'row',justifyContent:'space-around'}}>
      <View>
      <TouchableOpacity onPress={() => Actions.drawerOpen()} >
      <View style={{marginTop:20}}>
      <Image source={require('./images/menu1.png')} style={styles.img}/>
      </View>
      </TouchableOpacity>
      </View>
      <View>
          <Text style={{color:'#FFFFFF',fontSize:35,marginTop:10 }}>Umang Koshti</Text>
     </View>
     <View>
     <TouchableOpacity onPress={() => Actions.Userdrawer()} >
     <View  style={{marginTop:20}}> 
     <Image source={require('./images/magnifier.png')} style={styles.img}/>
     </View>
     </TouchableOpacity>
     </View>
      </View>
      </LinearGradient>

      <View style={{height:1, backgroundcolor:'black'}}/>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:30}}>
      <TouchableOpacity onPress={() => Actions.AddVehicle()} >
        <View  style={{justifyContent:'center',alignItems:'center'}}>
         <Image source={require('./images/add.png')} style={{  height:100, width:100}}/>
         <Text  style={{marginTop:10,color:'#000000',textAlign:'center',fontSize:27 }}>Add Vehicle</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.HondaCity()} >
        <View  style={{justifyContent:'center',alignItems:'center'}}>
         <Image source={require('./images/automobile.png')} style={{  height:110, width:110}}/>
         <Text  style={{color:'#000000',fontSize:27 }}>Honda City</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View  style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',marginTop:30}}>
      <TouchableOpacity onPress={() => Actions.HondaActiva()} >
        <View  style={{justifyContent:'center',alignItems:'center'}}>
         <Image source={require('./images/motorbiking.png')} style={{  height:110, width:110}}/>
         <Text  style={{color:'#000000',fontSize:27 }}>Honda Activa</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.SuzukiGixxer()} >
        <View  style={{justifyContent:'center',alignItems:'center'}}>
         <Image source={require('./images/bike.png')} style={{  height:110, width:110}}/>
         <Text  style={{color:'#000000',fontSize:27 }}>Suzuki Gixxer</Text>
        </View>
        </TouchableOpacity>
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
