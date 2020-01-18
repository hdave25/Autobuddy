import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';



export default class log extends Component {
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']}>
                    <View style={{ height: '12%', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                            <TouchableOpacity onPress={() => Actions.drawerOpen()} >
                                <View style={{ marginTop: 20 }}>
                                    <Image source={require('./images/menu1.png')} style={styles.img} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: '#FFFFFF', fontSize: 30, marginTop: 15}}>Shubh Auto Garage</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => Actions.Userdrawer()} >
                                <View style={{ marginTop: 20 }}>
                                    <Image source={require('./images/magnifier.png')} style={styles.img} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>

                

                    <View style={styles.row}>
                        <TouchableOpacity><View style={{ width: 175, height: 175, backgroundColor: 'white', elevation: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('./images/account.png')} style={{ width: 60, height: 60 }} />
                            <Text style={{ fontSize:15,fontWeight: 'bold', marginTop: 5 }}>View Profile</Text>
                        </View></TouchableOpacity>

                        <TouchableOpacity><View style={{ width: 175, height: 175, backgroundColor: 'white', elevation: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('./images/friend-request.png')} style={{ width: 60, height: 60 }} />
                            <Text style={{fontSize:15, fontWeight: 'bold', marginTop: 5 }}>View Requests</Text>
                        </View></TouchableOpacity>

                    </View>

                    <View style={styles.row}>
                         <TouchableOpacity><View style={{ width: 175, height: 175, backgroundColor: 'white', elevation: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('./images/date.png')} style={{ width: 60, height: 60 }} />
                            <Text style={{fontSize:15, fontWeight: 'bold', marginTop: 5 }}>View Appointments </Text>
                        </View></TouchableOpacity>

                        <TouchableOpacity><View style={{ width: 175, height: 175, backgroundColor: 'white', elevation: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('./images/completed.png')} style={{ width: 60, height: 60 }} />
                            <Text style={{fontSize:15, fontWeight: 'bold', marginTop: 5 }}>Completed</Text>
                            <Text style={{fontSize:15, fontWeight: 'bold'}}> Appointments </Text>
                        </View></TouchableOpacity>

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
    row: {
        
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 15
    },
    img: {
        height: 35,
        width: 35
    }

});




