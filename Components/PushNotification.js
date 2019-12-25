import React, {Component} from 'react';
import {View} from 'react-native';

export default class PushNotification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageSource: null,
            userName: '',
            email: ''
        }

    }

    render() {
        return (
            <View>
            </View>
        );
    }
}