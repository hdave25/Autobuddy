import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, AsyncStorage} from 'react-native';
import {Actions} from "react-native-router-flux";
import ImagePicker from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase';

let adminImg = require('../images/adminIcon.png');
let categoryImg = require('../images/category.png');
let insert = require('../images/pushNotification.png');
let hobbies = require('../images/hobbies.jpg');
export default class DrawerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageSource: null,
            userName: '',
            email: '',
            userKey:'',
        }
        //alert(this.state.userKey);
    }
    componentWillMount = () => {
        //this.getKey();
        this.getName();

    }

    async getName() {
        //alert(this.state.userKey);
        let newData=[];
        //await AsyncStorage.setItem("SuratClassifiedAdmin", JSON.stringify(newData));
        let users=await AsyncStorage.getItem("SuratClassifiedAdmin");
        if(users !== null && users !==undefined){
            newData = JSON.parse(users);
            let len =newData.length;

            this.setState({userKey:newData[len-1]})

        }
        //alert(this.state.userKey);
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
    render() {
        return (
            <View style={{height: '100%', backgroundColor: 'transparent'}}>
                <LinearGradient start={{x: 1, y: 1}} end={{x: 1, y: 0}}
                                colors={['#8fd3f4', '#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be']}>
                    <View style={{height:'28%',marginTop:'14%',alignItems:'center'}}>

                        <Image  source= {require('../images/profile1.png')} style={{width:116,borderRadius:58, height:116}} />
                        <Text style={{marginTop:5, color:'#ffffff',fontFamily:'CircularStd-Medium', fontSize:22}} >{this.state.userName}</Text>

                    </View>
                </LinearGradient>
                <View style={{marginTop:25}}>
                    <View style={{flexDirection:'row',marginTop:30,marginLeft:30}}>
                        <View>
                            <Image  source= {adminImg} style={{height:30, width:30}}/>
                        </View>
                        <TouchableOpacity onPress={() => Actions.ManageAdmin({userKey:this.state.userKey})}>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontFamily:'CircularStd-Book',fontSize:20}}>Manage Admin</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row',marginTop:30,marginLeft:30}}>
                        <View>
                            <Image  source= {categoryImg} style={{height:30, width:30}}/>
                        </View>
                        <TouchableOpacity onPress={() => Actions.CategoryList()}>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontFamily:'CircularStd-Book',fontSize:20}}>Manage Categories</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row',marginTop:30,marginLeft:30}}>
                        <View>
                            <Image  source= {insert} style={{height:30, width:30}}/>
                        </View>
                        <TouchableOpacity onPress={() => Actions.PushNotification()}>
                            <View style={{marginLeft:20}}>
                                <Text style={{fontFamily:'CircularStd-Book',fontSize:20}}>Push Notification</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row',marginTop:30,marginLeft:30}}>
                        <View>
                            <Image  source= {hobbies} style={{height:30, width:30}}/>
                        </View>
                        <TouchableOpacity onPress={() => Actions.AddUserInterest()}>

                            <View style={{marginLeft:20}}>
                                <Text style={{fontFamily:'CircularStd-Book',fontSize:20}}>User Interests</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                    onPress={() =>Actions.UserLogin()}>

                    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} colors={['#8fd3f4', '#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be']} style={{ height: 50,
                        width: 220,
                        borderRadius: 37,
                        alignItems: 'center',
                        justifyContent: 'center',
                        shadowOffset: {width: 2, height: 2,},
                        shadowColor: '#88ebc9',
                        shadowOpacity: 0.4,}}>

                        <Text style={{color:'#ffffff', fontFamily:'CircularStd-Medium',fontSize:28}}>Log out</Text>

                    </LinearGradient>
                    </TouchableOpacity>
                </View>



            </View>


        );
    }
}

const styles = StyleSheet.create({
    HeadingContainer: {
        marginTop: 100,
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center'
    },
    Heading: {
        fontSize: 25,
        //fontFamily: 'CircularStd-Medium',
        fontFamily: 'Arial',
        color: '#0d98dc'
    },
    ListContainer: {
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
    },
});