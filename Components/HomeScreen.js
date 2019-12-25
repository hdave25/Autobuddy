import React, {Component} from 'react';
import {AsyncStorage, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from "react-native-router-flux";
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase';

let drawerIcon = require('../images/menu.png');
let username;
let rootData = [];
let categoryData = [];

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageSource: null,
            userName: '',
            email: '',
            userKey: '',
            userCount: 0,
            categoryCount: 0,
        }
        //alert(this.state.userKey);

    }

    componentWillMount = () => {
        this.getName();
        this.getUserCount();
        this.getCategoryCount();

    }
    // componentWillReceiveProps() {
    //     this.getUserCount();
    //     //this.getName();
    // }

    async getName() {
        //alert(this.state.userKey);
        let newData = [];
        //await AsyncStorage.setItem("SuratClassifiedAdmin", JSON.stringify(newData));
        let users = await AsyncStorage.getItem("SuratClassifiedAdmin");
        if (users !== null && users !== undefined) {
            newData = JSON.parse(users);
            let len = newData.length;

            this.setState({userKey: newData[len - 1]})

        }
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
        let ref = rootRef.child("suratclassifieds/AdminUsers/" + this.state.userKey + "/username");
        //alert(ref);
        await ref.once("value").then(function (snapshot) {
            username = snapshot.val();

        });

        this.setState({userName: username})

    }

    async getUserCount() {
        rootData = [];
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
                rootData.push(childSnapshot.val());
            });
        });
        let len = rootData.length;
        this.setState({userCount: len});
        //alert(userCount);
    }

    async getCategoryCount() {
        categoryData = [];

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
        let ref = rootRef.child("suratclassifieds/categories");
        await ref.once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                categoryData.push(childSnapshot.val());
            });
        });
        let len = categoryData.length;
        console.log(categoryData);
        this.setState({categoryCount: len});
        //alert(userCount);
    }

    render() {
        return (
            <ImageBackground style={{flex: 1}} source={require('../images/background.png')}>
                <View style={{flex: 1}}>
                    <LinearGradient start={{x: 1, y: 1}} end={{x: 1, y: 0}}
                                    colors={['#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be', '#8fd3f4']}>
                        <View style={{flexDirection: 'row'}}>

                            <View style={{height: 100, width: 90}}>
                                <TouchableOpacity onPress={() => Actions.drawerOpen({userKey: this.state.userKey})}>
                                    <Image source={drawerIcon}
                                           style={{width: 33, marginLeft: 20, marginTop: 40, height: 23}}/>
                                </TouchableOpacity>
                            </View>

                            <View style={{height: 100, width: 300}}>
                                <Text style={{
                                    color: '#ffffff',
                                    position: 'absolute',
                                    fontFamily: 'CircularStd-Medium',
                                    marginTop: 32,
                                    fontSize: 32
                                }}>Surat Classifieds</Text>
                            </View>

                        </View>

                    </LinearGradient>
                    <View style={styles.HeadingContainer}>
                        <Text style={styles.Heading}>Welcome {this.state.userName}</Text>
                    </View>
                    <View style={{
                        marginTop: 40,
                        flexDirection: 'column',
                        flex: 1,
                        width: '100%',
                        alignItems: 'center',
                        //alignContent: 'space-around'
                    }}>
                        <View style={styles.txtContainer}>
                            <LinearGradient start={{x: 1, y: 1}} end={{x: 1, y: 0}} style={styles.contain}
                                            colors={['#8fd3f4', '#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be']}>
                                <Text style={styles.txt}> {this.state.userCount} Users </Text>
                            </LinearGradient>
                        </View>

                        <View style={styles.txtContainer}>
                            <LinearGradient start={{x: 1, y: 1}} end={{x: 1, y: 0}} style={styles.contain}
                                            colors={['#8fd3f4', '#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be']}>
                                <Text style={styles.txt}> {this.state.categoryCount} Categories </Text>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
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
    Heading: {
        fontSize: 25,
        fontFamily: 'CircularStd-Medium',
        //fontFamily: 'Arial',
        color: '#0d98dc'
    },
    txtContainer: {
        marginTop: 30,


    },
    contain: {
        width: '100%',
        alignItems: 'center',
    },
    txt: {

        //height:'30%',

        alignContent: 'space-around',
        fontSize: 30,
        fontFamily: 'CircularStd-Medium',
        //fontFamily: 'Arial',
        color: '#ffffff',
    }


});