import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';



export default class Insurance extends Component {
    render() {
        return (

            <View style={{ flex: 1 }} >
                <View>
          <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
          <View style={{width: '20%'}}><TouchableOpacity onPress={() => Actions.Homescreen()}>

              <Image
                source={require('./images/back1.png')} style={{ height: 30, width: 30, marginLeft: 20, marginRight: 20 }}
              ></Image></TouchableOpacity></View>
            <View style={{width: '60%'}}><Text style={styles.autobuddy}>Insurance</Text></View>

            <View style={{ width: '20%'}}>
              <Image source={require('./images/insurance.png')} style={{ height: 45, width: 45 }} />
            </View>
          </LinearGradient>
        </View>

                <View style={{ justifyContent: 'center', marginTop: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        4  Results
    </Text>
                </View>

                <View style={{ marginTop: 10 }}>
                    <FlatList
                        data={[{
                            title: 'Youssef Tahiri',
                            price: 'Rs 10000',
                            description: '5.5 Km ',
                            contact: 'Contact',


                        },
                        {

                            title: 'Car Insurance',
                            price: 'Rs 12000',
                            description: '10 Km ',
                            contact: 'Contact',
                        },
                        {

                            title: 'DK Insurance',
                            price: 'Rs 12500',
                            description: '11 Km ',
                            contact: 'Contact',
                        },
                        {

                            title: ' raj insurance',
                            price: 'Rs 12900',
                            description: '1 Km ',
                            contact: 'Contact',
                        }
                        ]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <View style={{ flexDirection: 'column' }}>


                                <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row', justifyContent: 'space-around' }}>

                                    <View style={{ flexDirection: 'column', marginLeft: 20, height: 90, width: 180 }}>
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            marginLeft: 3
                                        }}>{item.title}</Text>
                                        <Text style={{ color: '#808080', fontSize: 20 }}> {item.price}</Text>
                                        <Text style={{ color: '#808080', fontSize: 20 }}> {item.description}</Text>
                                    </View>

                                    <View>
                                        <Text style={{
                                            paddingTop: 10,
                                            marginLeft: 20,
                                            paddingBottom: 10,
                                            paddingRight: 10,
                                            paddingLeft: 10,
                                            color: 'blue',
                                            textAlign: 'center',
                                            backgroundColor: 'powderblue',
                                            borderRadius: 20,
                                            borderWidth: 1,
                                            borderColor: 'powderblue'
                                        }}>{item.contact}</Text>
                                    </View>

                                </View>
                            </View>
                        }
                    />

                </View>


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
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: 60,
      backgroundColor: 'blue'
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
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
  
  });
