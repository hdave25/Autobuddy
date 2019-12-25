import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View,AsyncStorage} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import firebase from 'react-native-firebase';
import md5 from "react-native-md5";
import {Actions} from "react-native-router-flux";

let rootData = [];
let flag;
export default class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.data = [];
        this.state = {
            userId: '',
            password: '',
            hidePassword: true,
            onFocus: true,
        }

    }

    componentWillMount = () => {
        //this.isValid();
    }

    isFormEmpty() {

        let id = this.state.userId;
        let pwd = this.state.password;
        if (id === '' || id === null) {
            alert("Please enter user id");
            return true;
        }
        else if (pwd === '' || pwd === null) {
            alert("Please enter password");
            return true;
        }
        else {
            return false;
        }
    }

    async isValid() {
        rootData = [];
        this.data = [];
        let newData=[];
        if (!this.isFormEmpty()) {
            let config = {
                apiKey: "AIzaSyDkzaqklaF_RBWYcz6Qw41Fiz1d4Ti0jsw",
                authDomain: "suratclassified-caf98.firebaseapp.com",
                databaseURL: "https://suratclassified-caf98.firebaseio.com",
                projectId: "suratclassified-caf98",
                storageBucket: "suratclassified-caf98.appspot.com",
                messagingSenderId: "123877902182"
            };
            let firebaseApp = firebase.initializeApp(config);
            let rootRef = firebase.database().ref();
            let ref = rootRef.child("suratclassifieds/AdminUsers");
            await ref.once("value").then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    let data = childSnapshot.val();
                    data['userKey'] = childSnapshot.key;
                    rootData.push(data);
                });
            });
            let id = this.state.userId;
            let pwd = this.state.password;
            let encryptPwd = md5.str_md5("Surat" + this.state.password);
            //console.log('EncryptPwd: ', encryptPwd);
            let rootDatalen = rootData.length;
            flag = 0;

            for (i = 0; i < rootDatalen; i++) {
                //this.data.push(rootData[i]);
                //console.log('RootDatakey', rootData[i].userKey);
                if (rootData[i].userId === id) {
                    flag = 1;
                    let userPwd = rootData[i].password;
                    //console.log('userPwd: ', userPwd);
                    if (encryptPwd !== userPwd) {
                        alert("Incorrect Password Retry Again");
                        this.setState({password: ''})
                    }
                    else {
                        //alert("Login successful");
                        let users=await AsyncStorage.getItem("SuratClassifiedAdmin");
                        if(users !== null && users!==undefined){
                            newData = JSON.parse(users);
                        }
                        newData.push(rootData[i].userKey);
                        console.log(newData);
                        await AsyncStorage.setItem("SuratClassifiedAdmin", JSON.stringify(newData));

                        Actions.drawer({type: 'reset'});
                        //Actions.drawer({userKey:rootData[i].userKey});
                        //Actions.HomeScreen({userKey:rootData[i].userKey});

                    }
                }

            }
            if (flag === 0) {
                alert("Invalid User");
                this.setState({userId: '', password: ''})
            }
        }
    }

    render() {
        return (

            <ImageBackground style={{flex: 1}} source={require('../images/background.png')}>
                <KeyboardAwareScrollView>
                    <View>
                        <View style={styles.HeadingContainer}>
                            <Text style={styles.Heading}>Surat Classified</Text>
                        </View>

                        <View style={styles.FormContainer}>
                            <View style={styles.TextContainer}>

                                <View style={{justifyContent: 'flex-start'}}>
                                    <Text style={styles.TextHeading}>User Id</Text>
                                </View>
                                <View>
                                    <TextInput style={styles.TextInput}
                                        //placeholder={'e.g.,Real Estate'}
                                               placeholderTextColor={'#333333'}
                                               onChangeText={(userId) => this.setState({userId})}
                                               value={this.state.userId}
                                               underlineColorAndroid='transparent'

                                    />
                                </View>


                            </View>

                            <View style={styles.UnderLine}>
                            </View>

                            <View style={styles.TextContainer}>

                                <View style={{justifyContent: 'flex-start'}}>
                                    <Text style={styles.TextHeading}>Password</Text>
                                </View>
                                <View>
                                    <TextInput style={styles.TextInput}
                                        //placeholder={'Password'}
                                               placeholderTextColor={'#333333'}
                                               onChangeText={(password) => this.setState({password})}
                                               value={this.state.password}
                                               underlineColorAndroid='transparent'
                                               secureTextEntry={this.state.hidePassword}

                                    />
                                </View>


                            </View>

                            <View style={styles.UnderLine}>
                            </View>


                            <View style={{width: '100%', alignSelf: 'center', marginTop: 70}}>
                                <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={styles.Button}
                                                colors={['#8fd3f4', '#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be']}>
                                    <TouchableOpacity onPress={() => this.isValid()}>

                                        <Text style={styles.ButtonText}>Login</Text>

                                    </TouchableOpacity>
                                </LinearGradient>

                            </View>

                        </View>

                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>

        );
    }
}

const
    styles = StyleSheet.create({
        HeadingContainer: {
            marginTop: 100,
            width: '100%',
            alignItems: 'center',
            alignSelf: 'center'
        },
        ImageContainer: {
            paddingTop: 15,

            paddingBottom: 5,

            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        Border: {
            height: 141,
            width: 141,
            borderRadius: 100,
            borderColor: '#000000',
            borderWidth: 1,
            //backgroundColor: 'rgba( 208, 77, 156, 0.25 )',
            //backgroundColor:'white',

            alignItems: 'center',
            justifyContent: 'center'
        },
        cameraImage: {
            height: 135,
            width: 135,

            borderRadius: 135 / 2,

        },
        Heading: {
            fontSize: 25,
            fontFamily: 'CircularStd-Medium',
            //fontFamily: 'Arial',
            color: '#0d98dc'
        },
        UnderLine: {

            height: 1,
            width: '100%',
            backgroundColor: 'rgba(51, 51, 51, 0.2)'
        },

        FormContainer: {
            marginTop: 50,
            width: '80%',
            alignSelf: 'center',
        },

        TextContainer: {
            flexDirection: 'column',
            paddingHorizontal: 10,
            justifyContent: 'flex-start',
            //alignItems: 'center',
            //justifyContent: 'space-between',
            //alignSelf: 'center',
            width: '100%'
        },
        TextHeading: {
            marginTop: 20,
            fontSize: 20,
            fontFamily: 'CircularStd-Medium',
            //fontFamily: 'Arial',
            //textAlign: 'center',

            color: '#333333',
            width: 200,
        },
        TextInput: {
            marginTop: 20,
            fontSize: 15,
            fontFamily: 'CircularStd-Medium',
            //fontFamily: 'Arial',
            //textAlign: 'center',
            color: '#333333',
            width: 200,

        },

        UnderLine: {
            marginTop: 5,
            height: 1,
            backgroundColor: '#8fd3f4',
            width: '100%',
            marginBottom: 30
        },

        Button: {
            height: 50,
            width: '100%',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            shadowOffset: {width: 5, height: 5,},
            shadowColor: '#8cdee2',
            shadowOpacity: 0.5,
        },

        ButtonText: {
            fontSize: 24,
            fontFamily: 'CircularStd-Medium',
            //fontFamily: 'Arial',
            color: '#ffffff'
        }
    });