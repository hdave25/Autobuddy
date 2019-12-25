import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';

let name = [];
let date = (new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()).toString();
export default class AddCategoryDetail extends Component {
    constructor(props) {
        super(props);
        this.data = [];
        this.state = {
            refKey: this.props.refKey,
            categoryName: '',
            dateVal: date,
            title: '',
            desp: '',
            despDetail: '',
        }

    }

    componentWillMount = () => {
        this.getName();
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

    async sendData() {

        let config = {
            apiKey: "AIzaSyDkzaqklaF_RBWYcz6Qw41Fiz1d4Ti0jsw",
            authDomain: "suratclassified-caf98.firebaseapp.com",
            databaseURL: "https://suratclassified-caf98.firebaseio.com",
            projectId: "suratclassified-caf98",
            storageBucket: "gs://suratclassified-caf98.appspot.com/",
            messagingSenderId: "123877902182"
        };
        let dateValue = this.state.dateVal;
        let titleValue = this.state.title;
        let despValue = this.state.desp;
        let despDetailValue = this.state.despDetail;
        if (dateValue === '' || dateValue === null) {
            alert("Please enter date");
        }
        else if (titleValue === '' || titleValue === null) {
            alert("Please enter title field");
        }
        else if (despValue === '' || despValue === null) {
            alert("Please enter description field");
        }
        else if (despDetailValue === '' || despDetailValue === null) {
            alert("Please enter description detail field");
        }
        else {
            //alert("Hii");
            firebase.initializeApp(config);
            let rootRef = firebase.database().ref();
            let ref = rootRef.child("suratclassifieds/categories/"+this.state.refKey+"/list");
            await  ref.push({
                date: dateValue,
                title: titleValue,
                description: despValue,
                descriptionDetail:despDetailValue,
                likes:0,
                views:0,
            })

            alert("Added Successfully");
            Actions.itemList({refKey:this.state.refKey});
        }

    }


    render() {
        return (

            <ImageBackground style={{flex: 1}} source={require('../images/background.png')}>
                <KeyboardAwareScrollView>
                    <View>
                        <View style={styles.HeadingContainer}>
                            <Text style={styles.Heading}>Add {this.state.categoryName} Detail</Text>
                        </View>

                        <View style={styles.FormContainer}>

                            <View style={styles.TextContainer}>

                                <View style={{justifyContent: 'flex-start'}}>
                                    <Text style={styles.TextHeading}>Enter Date</Text>
                                </View>
                                <View>
                                    <TextInput style={styles.TextInput}
                                               //placeholder={'e.g.,'} this.state.dateVal
                                               placeholderTextColor={'#333333'}
                                               onChangeText={(dateVal) => this.setState({dateVal})}
                                               value={this.state.dateVal}
                                               underlineColorAndroid='transparent'
                                    />
                                </View>

                            </View>

                            <View style={styles.UnderLine}>
                            </View>


                            <View style={styles.TextContainer}>

                                <View style={{justifyContent: 'flex-start'}}>
                                    <Text style={styles.TextHeading}>Enter Title</Text>
                                </View>
                                <View>
                                    <TextInput style={styles.TextInput}
                                        //placeholder={'e.g.,Real Estate'}
                                               placeholderTextColor={'#333333'}
                                               onChangeText={(title) => this.setState({title})}
                                               value={this.state.title}
                                               underlineColorAndroid='transparent'
                                    />
                                </View>

                            </View>

                            <View style={styles.UnderLine}>
                            </View>


                            <View style={styles.TextContainer}>

                                <View style={{justifyContent: 'flex-start'}}>
                                    <Text style={styles.TextHeading}>Enter Description</Text>
                                </View>
                                <View>
                                    <TextInput style={styles.TextInput}
                                        //placeholder={'e.g.,Real Estate'}
                                               placeholderTextColor={'#333333'}
                                               onChangeText={(desp) => this.setState({desp})}
                                               value={this.state.desp}
                                               underlineColorAndroid='transparent'
                                    />
                                </View>

                            </View>

                            <View style={styles.UnderLine}>
                            </View>
                            <View style={styles.TextContainer}>

                                <View style={{justifyContent: 'flex-start'}}>
                                    <Text style={styles.TextHeading}>Enter Description Detail</Text>
                                </View>
                                <View>
                                    <TextInput style={styles.TextInput}
                                        //placeholder={'e.g.,Real Estate'}
                                               placeholderTextColor={'#333333'}
                                               onChangeText={(despDetail) => this.setState({despDetail})}
                                               value={this.state.despDetail}
                                               underlineColorAndroid='transparent'
                                    />
                                </View>

                            </View>

                            <View style={styles.UnderLine}>
                            </View>

                            <View style={{width: '100%', alignSelf: 'center', marginTop: 30}}>
                                <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={styles.Button}
                                                colors={['#8fd3f4', '#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be']}>
                                    <TouchableOpacity //onPress={() => Actions.dashboard()}>
                                        onPress={() => {
                                            this.sendData();
                                        }}>
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
        marginTop: 50,
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
        //fontFamily: 'CircularStd-Medium',
        fontFamily: 'Arial',
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
        //fontFamily: 'CircularStd-Medium',
        fontFamily: 'Arial',
        //textAlign: 'center',

        color: '#333333',
        width: 300,
    },
    TextInput: {
        marginTop: 20,
        fontSize: 15,
        //fontFamily: 'CircularStd-Medium',
        fontFamily: 'Arial',
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
        //fontFamily: 'CircularStd-Medium',
        fontFamily: 'Arial',
        color: '#ffffff'
    }
});