import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown';
import { StyleSheet, Text, View, Image, DeviceWidth, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';


export default class BookAppointment extends Component {
  constructor(props) {
    super(props)
    this.state = { date: "2016-05-15" }
  }

  render() {
    let data = [{
      value: 'Honda City',
    }, {
      value: 'Honda Activa',
    }, {
      value: 'Suzuki Gixxer',
    }];

    let data1 = [{
      value: 'Raj Auto Garage',
    }, {
      value: 'Umang Service Centre',
    }, {
      value: 'Shubh Auto Garage',
    }];
    return (
      <View style={{ flex: 1 }}>
        <View>
          <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
            <TouchableOpacity onPress={() => Actions.Homescreen()}>

              <Image
                source={require('./images/back1.png')} style={{ height: 30, width: 30, marginLeft: 20, marginRight: 20 }}
              ></Image></TouchableOpacity>
            <Text style={styles.autobuddy}>Book Appointment</Text>
          </LinearGradient>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25, marginLeft: 25 }}>Select your Vehicle</Text>
          <Dropdown

            data={data}
            containerStyle={{
              marginTop: 10, marginLeft: 20, justifyContent: 'center', paddingLeft: 60, paddingBottom: 15, borderWidth: 1,
              borderColor: 'lightgrey', height: 60, borderRadius: 50, width: 250
            }}
            itemTextStyle={{ fontSize: 25, textAlign: 'center' }}
            fontSize={25}
            inputContainerStyle={{ borderBottomColor: 'transparent' }}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25, marginLeft: 25 }}>Select Service Centre</Text>
          <Dropdown

            data={data1}
            containerStyle={{
              marginTop: 10, marginLeft: 20, justifyContent: 'center', paddingLeft: 60, paddingBottom: 15, borderWidth: 1,
              borderColor: 'lightgrey', height: 60, borderRadius: 50, width: 350
            }}
            itemTextStyle={{ fontSize: 25, textAlign: 'center' }}
            fontSize={25}
            inputContainerStyle={{ borderBottomColor: 'transparent' }}
          />
        </View>



        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25, marginLeft: 25 }}>Select Date</Text>
        </View>
        <DatePicker
          style={{ marginTop: 15, marginLeft: 20, width: 300 }}
          date={this.state.date}
          mode="datetime"
          placeholder="select date"
          format="MMMM Do YYYY, h:mm:ss A"
          minDate="2018-10-05"
          maxDate="2024-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{

            dateInput: {

              borderWidth: 1,
              height: 60,
              borderRadius: 50
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => { this.setState({ date: date }) }}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
          <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: 200, borderRadius: 40 }}>
            <Text style={{ fontSize: 25, color: '#ffffff' }}>Book Now</Text>
          </LinearGradient>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({

  img: {
    height: 35,
    width: 35,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'blue'
  },
  autobuddy: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'

  },
});
