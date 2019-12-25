import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import ImagePicker from 'react-native-image-picker';
import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';

let count = 1;
export default class UpdateCategory extends Component {
    constructor(props) {
        super(props);
      //alert(this.props.refKey);
        this.state = {
            categoryName: this.props.nameKey,
            icon: this.props.iconKey,
            imageSource: null,
            imagePath: null,
            refKey:this.props.refKey,

        }
      //alert(this.state.imagePath)
        //console.log(this.state.imagePath)
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 200,
            maxHeight: 200,
            storageOptions: {
                skipBackup: true
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({

                    imageSource: source,
                    imagePath: response.uri

                });
            }
        });
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
        let categoryValue = this.state.categoryName;
        if (categoryValue === '' || categoryValue === null) {
            alert("Please enter Category name");
        }

        else {
            firebase.initializeApp(config);
            let rootRef = firebase.database().ref();
            let ref = rootRef.child("suratclassifieds/categories/"+this.state.refKey)
            //alert(ref)
            let metadata = {
                contentType: 'image/jpeg'
            }
            console.log('ImagePath',this.state.imagePath);
            if(this.state.imageSource ===null){
                await ref.set({
                    icon: this.state.icon,
                    name: this.state.categoryName,
                })
            }
            else{
                await firebase.storage().ref().child("suratclassifieds/Images")
                    .putFile(this.state.imagePath, metadata).then(uploadedFile => {
                        this.setState({icon: uploadedFile.downloadURL})
                        console.log(this.state.icon);
                        console.log(uploadedFile.downloadURL);
                    })
                    .catch(err => {
                        alert(err);
                    });

                await ref.set({
                    icon: this.state.icon,
                    name: this.state.categoryName,
                })
            }

            //console.log('refKey', ref.key);
            alert("Updated Successfully");
            Actions.CategoryList();
        }
    }


    render() {
        return (

            <ImageBackground style={{flex: 1}} source={require('../images/background.png')}>
                <KeyboardAwareScrollView>
                    <View>
                        <View style={styles.HeadingContainer}>
                            <Text style={styles.Heading}>Update Category</Text>
                        </View>

                        <View style={styles.FormContainer}>
                            <View style={styles.ImageContainer}>

                                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>

                                    <View style={styles.Border}>
                                        <Image source={(this.state.imageSource == null ? {uri: this.state.icon }: {uri: this.state.imagePath})}
                                               style={styles.cameraImage}/>




                                    </View>

                                </TouchableOpacity>
                            </View>
                            <View style={styles.TextContainer}>

                                <View style={{justifyContent: 'flex-start'}}>
                                    <Text style={styles.TextHeading}>Enter Category</Text>
                                </View>
                                <View>
                                    <TextInput style={styles.TextInput}
                                               defaultValue={this.state.categoryName}
                                               //placeholder={this.state.categoryName}
                                               placeholderTextColor={'#333333'}
                                               onChangeText={(categoryName) => this.setState({categoryName})}
                                               value={this.props.categoryName}
                                               underlineColorAndroid='transparent'
                                    />
                                </View>
                                <View>

                                </View>

                            </View>

                            <View style={styles.UnderLine}>
                            </View>


                            <View style={{width: '100%', alignSelf: 'center', marginTop: 70}}>
                                <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 1}} style={styles.Button}
                                                colors={['#8fd3f4', '#8fd4f1', '#8ed8eb', '#8ddce5', '#8cdee2', '#8be1dc', '#8ae3d8', '#89e7d1', '#88ebc9', '#86f2be']}>
                                    <TouchableOpacity //onPress={() => Actions.dashboard()}>
                                        onPress={() => {
                                            this.sendData();
                                        }}>
                                        <Text style={styles.ButtonText}>Update</Text>

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
        width: 200,
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