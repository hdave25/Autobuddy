import React, {Component} from 'react';
import {Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from "react-native-router-flux";
import firebase from 'react-native-firebase';

let cancel = require('../images/cancel.png');
let update = require('../images/update.png');
let rootData = [];
let superUser;
export default class ManageAdmin extends Component {
    constructor(props) {
        super(props);
        this.data = [];

        this.state = {
            name: '',
            userId: '',
            password: '',
            refreshData: false,
            key: this.props.userKey,
        }
        //alert(this.state.key);
    }

    componentWillMount = () => {
        //this.setState({refreshData: !this.state.refreshData})
        this.getUsers();
    }

    componentWillReceiveProps() {
        //alert("Check");
        this.getUsers();
    }

    async checkAddPermission() {
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
        let ref = rootRef.child("suratclassifieds/AdminUsers/" + this.state.key + "/SuperUser");
        await ref.once("value").then(function (snapshot) {
            superUser = snapshot.val();
        });
        //alert(superUser);
        if(superUser === true){
            Actions.AddUser();
        }

        else {
            alert("You do not have permission to add user");
        }

    }
    async checkDeletePermission(userKey) {
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
        let ref = rootRef.child("suratclassifieds/AdminUsers/" + this.state.key + "/SuperUser");
        await ref.once("value").then(function (snapshot) {
            superUser = snapshot.val();
        });
        //alert(superUser);
        if(superUser === true){
            this.showDialog(userKey);
        }

        else {
            alert("You do not have permission to delete user");
        }

    }
    async checkUpdatePermission(userKey) {
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
        let ref = rootRef.child("suratclassifieds/AdminUsers/" + this.state.key + "/SuperUser");
        await ref.once("value").then(function (snapshot) {
            superUser = snapshot.val();
        });
        //alert(superUser);
        if(superUser === true){
            Actions.UpdateUserProfile({userKey: userKey});
        }

        else {
            alert("You do not have permission to update user");
        }

    }
    async getUsers() {
        rootData = [];
        this.data = [];
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
        let rootDatalen = rootData.length;
        //console.log('Length',rootDatalen);
        for (i = 0; i < rootDatalen; i++) {
            this.data.push(rootData[i]);
        }
        //console.log(this.data);
        this.setState({refreshData: !this.state.refreshData});

    }

    showDialog(userKey) {
        Alert.alert(
            ' ',
            'Are you sure you want to delete?',
            [
                {text: 'Yes', onPress: () => this.deleteUser(userKey, "Yes")},
                // {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'No', onPress: () => this.deleteUser(userKey, "No")},
            ],
            {cancelable: false}
        )
    }

    async deleteUser(userKey, val) {

        let keyValue = userKey;

        if (val === "Yes") {
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
            let ref = rootRef.child("suratclassifieds/AdminUsers/" + keyValue);
            //alert(ref);
            ref.remove();

            this.getUsers();
            this.setState({refreshData: !this.state.refreshData});
            alert("User Removed");
        }


    }

    render() {
        return (

            <View>

                <LinearGradient start={{x: 1, y: 1}} end={{x: 1, y: 0}}
                                colors={['#8fd3f4', '#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be']}>
                    <View style={{flexDirection: 'row', height: 90, width: 500}}>

                        <View style={{height: 80, width: 130}}>
                            <TouchableOpacity onPress={() => Actions.pop()}>
                                <Image source={require('../images/back.png')}
                                       style={{width: 17, marginLeft: 40, marginTop: 40, height: 20}}/>
                            </TouchableOpacity>
                        </View>


                        <View style={{height: 80, width: 300}}>
                            <Text style={{
                                color: '#ffffff',
                                fontFamily: 'Arial',
                                marginTop: 32,
                                fontSize: 28
                            }}>Manage Users</Text>
                        </View>
                    </View>
                </LinearGradient>
                <View style={styles.listContainer}>
                    <FlatList

                        data={this.data}
                        extraData={this.state.refreshData}
                        keyExtractor={(item, index) => item.userKey}
                        renderItem={({item}) =>


                            <View style={styles.content}>


                                <View style={styles.content1}>
                                    <TouchableOpacity
                                        style={{
                                            width: '100%',
                                            justifyContent: 'space-between'
                                        }}>

                                        <Text style={[styles.textView, {color: '#1e72be'}]}>{item.username}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.content2}>
                                    <TouchableOpacity
                                        //onPress={() => this.showDialog(item.userKey)}>
                                        onPress={() => this.checkDeletePermission(item.userKey)}>
                                        <Image source={cancel}
                                               style={styles.iconView1}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.content3}>
                                    <TouchableOpacity
                                        //onPress={() => Actions.UpdateUserProfile({userKey: item.userKey})}>
                                        onPress={() => this.checkUpdatePermission(item.userKey)}>
                                        <Image source={update}
                                               style={styles.iconView2}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }

                    />
                </View>

                <View style={styles.buttonContainer}>
                    <LinearGradient start={{x: 1, y: 1}} end={{x: 1, y: 0}}
                                    colors={['#8fd3f4', '#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be']}>
                        <TouchableOpacity style={styles.button}
                            //onPress={() => Actions.AddUser()}>

                                          onPress={() => this.checkAddPermission()}>
                            <Text style={styles.buttonTxt}> Add User </Text>
                        </TouchableOpacity>
                    </LinearGradient>
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
        fontFamily: 'CircularStd-Medium',
        //fontFamily: 'Arial',
        color: '#0d98dc'
    },

    listContainer: {
        width: '100%',
        height: '88%',
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        //backgroundColor:'#1e72be',
        //justifyContent:'space-around',


    },
    content: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderColor: '#C0C0C0',
        paddingTop: 10,
        paddingBottom: 10,
    },
    content1: {
        flex: 1,
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        marginTop: '2%',
        marginLeft: '2%',
    },
    imageView: {
        height: 56,
        width: 56,
        backgroundColor: '#1e72be',
        borderRadius: 56 / 2,
        resizeMode: 'cover',
    },
    textView: {
        fontSize: 18,
        width: '60%',
        fontFamily: 'Arial',
        paddingTop: 15,
        justifyContent: 'center',
    },
    iconView1: {
        height: 18,
        width: 18,
    },
    iconView2: {
        height: 23,
        width: 25,
    },
    content2: {
        marginTop: 25,
        marginRight: 27,

    },

    content3: {
        marginTop: 23,
        marginRight: 10,
    },
    buttonContainer: {
        height: '8%',
        width: '100%',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#ffffff',
    },
    button: {
        height: '100%',
        width: '80%',
        borderRadius: 50,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        //backgroundColor: '#cde6fe',
    },

    buttonTxt: {
        fontFamily: 'Arial',
        fontSize: 22,
        color: '#ffffff',
        alignContent: 'center',
    },

});