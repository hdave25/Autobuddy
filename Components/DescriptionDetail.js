import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from "react-native-router-flux";
import firebase from 'react-native-firebase';

let estateData = [];
let name =[];
let date = [];
let newTitle = [];
let newDespDetail=[];
//let descStr;
export default class DescriptionDetail extends Component {
    constructor(props) {
        super(props);
        this.data = [];
        this.state = {
            categoryName:'',
            refKey: this.props.refKey,
            listKey: this.props.listKey,
            refreshData: false,
            dateVal:'',
            title:'',
            despDetail:'',

        }
        //alert("Hii");
    }

    componentWillMount = () => {
        this.getPrevDetails();

    }

    async getPrevDetails() {
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
        await ref.once("value").then(function (snapshot) {

            name.push(snapshot.val());
            console.log(name);

        });

        let ref1 = rootRef.child("suratclassifieds/categories/" + this.state.refKey + "/list/" + this.state.listKey + "/date");
        await ref1.once("value").then(function (snapshot) {
            date.push(snapshot.val());
            console.log(date);

        });
        let ref2 = rootRef.child("suratclassifieds/categories/" + this.state.refKey + "/list/" + this.state.listKey + "/title");
        await ref2.once("value").then(function (snapshot) {
            newTitle.push(snapshot.val());
            console.log(newTitle);

        });
        let ref3 = rootRef.child("suratclassifieds/categories/" + this.state.refKey + "/list/" + this.state.listKey + "/descriptionDetail");
        await ref3.once("value").then(function (snapshot) {
            newDespDetail.push(snapshot.val());
            console.log(newDespDetail);

        });

        let dateVal = date.pop();
        let titleVal = newTitle.pop();
        let nameVal = name.pop();
        let newDespDetailVal = newDespDetail.pop();
        this.setState({categoryName: nameVal});
        this.setState({dateVal: dateVal});
        this.setState({title: titleVal});
        this.setState({despDetail: newDespDetailVal});
    }


    render() {
        return (
            <View style={{backgroundColor: 'white', height: '100%'}}>
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
                            }}>{this.state.categoryName}</Text>
                        </View>

                    </View>
                </LinearGradient>
                <View style={styles.container}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{this.state.dateVal}</Text>
                    <Text style={styles.title1}>{this.state.title}</Text>
                    <Text style={styles.header}> Description </Text>
                    <Text style={styles.desc}>
                        {this.state.despDetail}
                    </Text>

                    <Text style={{
                        fontSize: 22,

                        textAlign: 'center',
                        fontWeight: 'bold',
                        marginTop: 100,
                    }}> Share Via </Text>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        marginTop: 50
                    }}>
                        <Image source={require('../images/whatsapp.png')} style={{width: 60, height: 60}}/>
                        <Image source={require('../images/insta.png')} style={{width: 60, height: 60}}/>
                        <Image source={require('../images/facebook.png')} style={{width: 60, height: 60}}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {

        marginTop: 20,
        marginLeft: 20,
        marginRight: 15
    },

    title1: {
        marginTop: 22,
        fontWeight: 'bold',
        fontSize: 20
    },

    title2: {
        fontWeight: 'bold',
        fontSize: 20
    },

    header: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#808080'
    },

    desc: {
        marginTop: 20,
        fontSize: 18,

    }
});
