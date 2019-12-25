import React from 'react';
import {Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';
let name = [];
let estateData = [];
let cancel = require('../images/cancel.png');
let update = require('../images/update.png');
export default class itemList extends React.Component {

    constructor(props) {
        super(props);
        this.data = [];
        this.state = {
            categoryName: '',
            refreshData: false,
            refKey: this.props.refKey,
        }
        //alert(this.state.refKey)
    }

    componentWillMount = () => {
        this.getName();
        this.getListDetails();
    }

    async getName() {
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
        let ref = rootRef.child("suratclassifieds/categories/" + this.state.refKey + "/name");
        console.log(ref);
        await ref.once("value").then(function (snapshot) {

            name.push(snapshot.val());
            console.log(name);

        });
        let nameVal = name.pop();
        //alert(nameVal);
        this.setState({categoryName: nameVal});
        //alert(this.state.categoryName);
    }

    async getListDetails() {
        this.data = [];
        estateData=[];
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
        let ref = rootRef.child("suratclassifieds/categories/" + this.state.refKey + "/list");
        //alert(ref);
        await ref.once("value").then(function (snapshot) {

            snapshot.forEach(function (childSnapshot) {
                let data = childSnapshot.val();
                data['listKey']= childSnapshot.key;
                estateData.push(data);
            });

        });

        let estateDatalen = estateData.length;
        console.log("Length===" + estateDatalen);
        for (i = 0; i < estateDatalen; i++) {

            console.log("\n" + estateData[i].title);
            this.data.push(estateData[i]);

        }
        this.setState({refreshData: !this.state.refreshData})
    }
    showDialog(refKey,listKey){
        //alert("Hii");
        Alert.alert(
            ' ',
            'Are you sure you want to delete?',
            [
                {text: 'Yes', onPress: () => this.deleteItem(refKey,listKey,"Yes")},
                // {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'No', onPress: () => this.deleteItem(refKey,listKey,"No")},
            ],
            { cancelable: false }
        )
    }
    async deleteItem(refKey,listKey,val) {

        let refKeyValue = refKey;
        let listKeyValue = listKey;
        //alert(listKeyValue);
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
            let ref = rootRef.child("suratclassifieds/categories/"+refKeyValue+"/list/"+listKeyValue);
            ref.remove();
            this.getListDetails();
            this.setState({refreshData: !this.state.refreshData});
            alert("List Deleted!!");
        }

    }


        render() {
        return (
            <View>
                <LinearGradient start={{x: 1, y: 1}} end={{x: 1, y: 0}}
                                colors={['#8fd3f4', '#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be']}>
                    <View style={{flexDirection: 'row', height: 90, width: 500}}>

                        <View style={{height: 80, width: 130}}>
                            <TouchableOpacity onPress={() => Actions.CategoryList()}>
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
                            }}>{this.state.categoryName}</Text>
                        </View>
                    </View>
                </LinearGradient>
                <View style={{height: '58%', width: '100%', alignItems: 'center'}}>
                    <FlatList
                        keyExtractor={(item, index) => item.title}
                        data={this.data}
                        contentContainerStyle={{
                            width: '100%',


                        }}
                        extraData={this.state.refreshData}
                        renderItem={({item}) =>
                            <TouchableOpacity
                                onPress={() => Actions.DecriptionDetail({refKey:this.state.refKey,listKey:item.listKey})}>
                                <View>
                                    <Text style={{marginTop: 10}}>{item.date}</Text>


                                    <View style={{
                                        backgroundColor: 'white',
                                        marginTop: 5,
                                        height: 170,
                                        borderRadius: 7,
                                        width: 365,
                                        shadowColor: '#b4b4b4',
                                        shadowOffset: {width: 5, height: 5},
                                        shadowOpacity: 0.8
                                    }}>
                                        <Text style={styles.item}>{item.title}</Text>
                                        <Text style={styles.a}>{item.header}</Text>
                                        <Text style={styles.b}>{item.description}</Text>
                                        <View style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            marginBottom: 10,
                                            marginRight: 12,
                                            justifyContent: 'flex-end',
                                            alignItems: 'flex-end'
                                        }}>

                                            <View style={styles.content2}>
                                                <TouchableOpacity
                                                onPress={() => this.showDialog(this.state.refKey,item.listKey)}>
                                                    <Image source={cancel}
                                                           style={styles.iconView1}/>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.content3}>
                                                <TouchableOpacity
                                                onPress={() => Actions.UpdateList({refKey:this.state.refKey,listKey:item.listKey})}>
                                                    <Image source={update}
                                                           style={styles.iconView2}/>
                                                </TouchableOpacity>
                                            </View>

                                        </View>

                                    </View>
                                </View>
                            </TouchableOpacity>

                        }
                    />
                </View>
                <View style={{width: '70%', alignSelf: 'center', height: '50%', marginBottom: '7%', marginTop: '5%'}}>
                    <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={styles.Button}
                                    colors={['#8fd3f4', '#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be']}>
                        <TouchableOpacity
                            onPress={() => Actions.AddCategoryDetail({refKey: this.state.refKey})}>

                            <Text style={styles.ButtonText}>Add List</Text>

                        </TouchableOpacity>
                    </LinearGradient>

                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({

    item: {
        marginTop: 20,
        paddingLeft: 20,
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },

    a: {
        marginTop: 10,
        marginLeft: 20,
        fontFamily: 'Arial',
        fontSize: 18,
        color: '#808080'
    },

    b: {
        fontSize: 18,
        fontFamily: 'Arial',
        marginTop: 5,
        marginLeft: 20
    },
    ButtonText: {
        fontSize: 24,
        //fontFamily: 'CircularStd-Medium',
        fontFamily: 'Arial',
        color: '#ffffff'
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
});
