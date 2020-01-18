import { Rating, AirbnbRating } from 'react-native-ratings';
import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown';
import { StyleSheet, Text, View, Image, DeviceWidth, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';



export default class imsurance extends Component {


    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
                        <TouchableOpacity onPress={() => Actions.Homescreen()}>

                            <Image
                                source={require('./images/back1.png')} style={{ height: 30, width: 30, marginLeft: 20, marginRight: 20 }}
                            ></Image></TouchableOpacity>
                        <Text style={styles.autobuddy}>Ratings</Text>
                    </LinearGradient>
                </View>
                <Text style={{ fontSize: 30, color: 'grey', fontWeight: 'bold', marginTop: 30, textAlign: 'center' }}>Rate Our App</Text>
                <AirbnbRating />

                <View>
                    <TouchableOpacity style={styles.button}>
                        <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.gradient}>
                            <Text style={{ fontSize: 25, color: '#ffffff' }}>Submit</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({


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