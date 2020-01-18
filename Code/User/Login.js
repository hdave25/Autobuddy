import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, TextInput, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Mobile Number' };
    }

    render() {
        return (
            <View style={{ height: '100%', backgroundColor: 'white' }}>
                <KeyboardAwareScrollView>
                    <View style={{ height: '100%', backgroundColor: 'white' }}>
                        <View style={{ marginTop: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View >
                                <Text style={{
                                    textShadowColor: 'black',
                                    textShadowOffset: { width: 1, height: 1 },
                                    textShadowRadius: 1, fontSize: 40, fontWeight: 'bold'
                                }}>AutoBuddy</Text>
                            </View>

                            <View>
                                <Image source={require('./images/icon.png')} style={{ height: 30, width: 30 }} />
                            </View>

                        </View>

                        <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', fontSize: 50 }}>
                            <Text style={{ fontSize: 30, color: 'dodgerblue' }}>LOGIN</Text>
                        </View>


                        <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 40 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('./images/avatar.png')} style={{ height: 40, width: 40 }} />
                            </View>

                            <View style={{ marginLeft: 20, width: '66%', flexDirection: 'column' }}>
                                <View>

                                    <TextInput style={styles.textinput} placeholder="Email"
                                        underlineColorAndroid={'transparent'} />
                                </View>


                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', flex: 1, marginLeft: 30, marginTop: 20 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('./images/lock.png')} style={{ height: 40, width: 40, marginTop: 10 }} />
                            </View>


                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginLeft: 20, width: '75%' }}>
                                    <TextInput style={styles.textinput} placeholder="Email"
                                        underlineColorAndroid={'transparent'} />
                                </View>

                                <View>
                                    <Image source={require('./images/view.png')} style={{ height: 35, width: 35, marginTop: 10 }} />
                                </View>
                            </View>



                        </View>
                        <TouchableOpacity onPress={() => Actions.Homescreen()} >
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                                <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={{ elevation: 5, justifyContent: 'center', alignItems: 'center', height: 50, width: 200, borderRadius: 40 }}>
                                    <Text style={{ fontSize: 25, color: '#ffffff' }}>Login</Text>
                                </LinearGradient>
                            </View>
                        </TouchableOpacity>

                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>

                            <TouchableOpacity onPress={() => Actions.MobileNumber()}>
                                <Text style={{ fontSize: 17, color: 'dodgerblue' }}>Forgot Password</Text>
                            </TouchableOpacity>

                            <View>
                                <Text style={{ fontSize: 17 }}>Do not have an account ? </Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 22, color: 'dodgerblue' }}>Sign up as</Text>
                            </View>

                            <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                                <TouchableOpacity onPress={() => Actions.SignUp()}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, elevation: 10, height: 60, width: 100, backgroundColor: 'white' }}>
                                    <Text style={{ color: 'black', fontSize: 20 }}>User</Text>
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Actions.SignupSp()}>

                                <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, elevation: 10, height: 60, width: 100 }}>
                                        <Text style={{ color: 'white', fontSize: 20 }}> Service</Text>
                                        <Text style={{ color: 'white', fontSize: 20 }}> Provider</Text>
                                    </View>
                                </LinearGradient>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
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
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    autobuddy: {
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        fontSize: 40, fontWeight: 'bold'
    },
    textinput: {
        height: 50,
        fontSize: 20,
        paddingBottom: 10,
        color: 'grey',
        marginRight: 10,

        borderBottomWidth: 2,


    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 200,
        borderRadius: 40,
        elevation: 5
    }
});
