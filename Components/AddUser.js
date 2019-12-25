import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {CheckBox} from 'react-native-elements';
import md5 from "react-native-md5";
import {Actions} from "react-native-router-flux";
import firebase from 'react-native-firebase';

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.data = [];
        this.state = {
            name: '',
            userId: '',
            password: '',
            superUser: false,
            hidePassword: true,
        }

    }

    isFormEmpty() {
        let name = this.state.name;
        let id = this.state.userId;
        let pwd = this.state.password;
        if (name === '' || name === null) {
            alert("Please enter Username");
            return true;
        }
        else if (id === '' || id === null) {
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

    _toggle() {
        this.setState({superUser: !this.state.superUser})
    }

    async sendData() {

        if (!this.isFormEmpty()) {
            let encryptPwd = md5.str_md5("Surat" + this.state.password);
            //this.setState({password:encryptPwd});
            //console.log("EncryptedPwd:", encryptPwd);
            let config = {
                apiKey: "AIzaSyDkzaqklaF_RBWYcz6Qw41Fiz1d4Ti0jsw",
                authDomain: "suratclassified-caf98.firebaseapp.com",
                databaseURL: "https://suratclassified-caf98.firebaseio.com",
                projectId: "suratclassified-caf98",
                storageBucket: "gs://suratclassified-caf98.appspot.com/",
                messagingSenderId: "123877902182"
            };

            firebase.initializeApp(config);
            let rootRef = firebase.database().ref();
            let ref = rootRef.child("suratclassifieds/AdminUsers");
            await  ref.push({
                username: this.state.name,
                userId: this.state.userId,
                password: encryptPwd,
                SuperUser: this.state.superUser
            })

            alert("Added Successfully");
            Actions.pop({refresh: {refresh:Math.random()}});
            //Actions.CategoryList();

        }
    }


    render() {
        return (

            <ImageBackground style={{flex: 1}} source={require('../images/background.png')}>
                <KeyboardAwareScrollView>
                    <View>
                        <View style={styles.HeadingContainer}>
                            <Text style={styles.Heading}>Edit User</Text>
                        </View>

                        <View style={styles.FormContainer}>
                            <View style={styles.TextContainer}>

                                <View style={{justifyContent: 'flex-start'}}>
                                    <Text style={styles.TextHeading}>Username</Text>
                                </View>
                                <View>
                                    <TextInput style={styles.TextInput}
                                               placeholderTextColor={'#333333'}
                                               onChangeText={(name) => this.setState({name})}
                                               value={this.state.name}
                                               underlineColorAndroid='transparent'
                                    />
                                </View>


                            </View>

                            <View style={styles.UnderLine}>
                            </View>
                            <View style={styles.TextContainer}>

                                <View style={{justifyContent: 'flex-start'}}>
                                    <Text style={styles.TextHeading}>User Id</Text>
                                </View>
                                <View>
                                    <TextInput style={styles.TextInput}
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

                            <View style={styles.CheckboxContainer}>

                                <View>
                                    <CheckBox
                                        checkedColor='#333333'
                                        checked={this.state.superUser}
                                        onPress={() => this._toggle()}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.CheckBoxHeading}>Super User</Text>
                                </View>


                            </View>


                            <View style={{width: '100%', alignSelf: 'center', marginTop: 60}}>
                                <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={styles.Button}
                                                colors={['#8fd3f4', '#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be']}>
                                    <TouchableOpacity
                                        onPress={() => this.sendData()}>

                                        <Text style={styles.ButtonText}>Add</Text>

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

const styles = StyleSheet.create({
    HeadingContainer: {
        marginTop: 40,
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
        marginTop: 30,
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
    CheckboxContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 5,
        //justifyContent: 'flex-start',
        alignItems: 'flex-start',
        //alignItems: 'center',

        //alignSelf: 'center',
        width: '100%'
    },
    SquareBox: {

        borderWidth: 1,
        borderColor: '#333333',


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
    CheckBoxHeading: {
        marginLeft: 10,
        fontSize: 20,
        fontFamily: 'CircularStd-Medium',
        //fontFamily: 'Arial',
        //textAlign: 'center',
        marginTop: 12,
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
        marginTop: 4,
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