import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';


export default class track extends Component {
  render() {
    return (

      <View style={{ flex: 1 }} >
        <View>
          <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
          <View style={{width: '20%'}}><TouchableOpacity onPress={() => Actions.Homescreen()}>

              <Image
                source={require('./images/back1.png')} style={{ height: 30, width: 30, marginLeft: 20, marginRight: 20 }}
              ></Image></TouchableOpacity></View>
            <View style={{width: '60%'}}><Text style={styles.autobuddy}>Vehicle Info</Text></View>

            <View style={{ width: '20%'}}>
              <Image source={require('./images/route.png')} style={{ height: 45, width: 45 }} />
            </View>
          </LinearGradient>
        </View>


      

      <View style={{ height: 1, backgroundcolor: 'black' }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 30 }}>
        <Text style={{ fontSize: 25 }}> ServiceId : </Text>
        <Text style={{ color: '#2141CF', fontSize: 25 }}>#6543219</Text>
        <Image source={require('./images/automobile.png')} style={{ height: 50, width: 50 }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 50 }}>

        <View>
          <Image source={require('./images/service.png')} style={{ height: 80, width: 80 }} />
          <Image source={require('./images/dot.png')} style={{ height: 50, width: 50, marginTop: 30 }} />
          <Text style={{ fontSize: 25, marginTop: 20 }}>Started</Text>
        </View>

        <View>
          <Image source={require('./images/car-wash.png')} style={{ height: 80, width: 80 }} />
          <Image source={require('./images/active.png')} style={{ height: 50, width: 50, marginTop: 30 }} />
          <Text style={{ fontSize: 25, color: '#2141CF', marginTop: 20 }}>Washing</Text>
        </View>

        <View>
          <Image source={require('./images/servicing.png')} style={{ height: 80, width: 80 }} />
          <Image source={require('./images/dot.png')} style={{ height: 50, width: 50, marginTop: 30 }} />
          <Text style={{ fontSize: 25, marginTop: 20 }}>Servicing</Text>
        </View>

        <View>
          <Image source={require('./images/car.png')} style={{ height: 80, width: 80 }} />
          <Image source={require('./images/dot.png')} style={{ height: 50, width: 50, marginTop: 30 }} />
          <Text style={{ fontSize: 25, marginTop: 20 }}>Ready</Text>
        </View>

      </View>

      </View >

      
    );
  }
}

const styles = StyleSheet.create({

  img: {
    height: 35,
    width: 35,
  },
  header: {
   flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    height: 60
},
autobuddy: {
  color: 'white',
  fontSize: 30,
  fontWeight: 'bold'

},
});
