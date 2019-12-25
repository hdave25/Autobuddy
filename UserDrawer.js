/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from "react-native-image-picker";
import { Actions } from 'react-native-router-flux';


export default class Drawer extends Component {
  state = {
    pickedImage: require('./images/man1.png')
  }

  reset = () => {
    this.setState({
      pickedImage: null
    });
  }

  /**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */

  pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: "Pick an Image", maxWidth: 800, maxHeight: 600 }, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        });

      }
    });
  }

  resetHandler = () => {
    this.reset();
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.header}>
              <View style={{ alignSelf: 'flex-end' }}>
                <TouchableOpacity><Text style={{ fontSize: 20, color: 'white', marginRight: 30 }}>Edit</Text></TouchableOpacity>
              </View>
              <TouchableOpacity onPress={this.pickImageHandler}>
                <Image
                  source={this.state.pickedImage} style={{ height: 100, width: 100, borderRadius: 100 }}
                ></Image>
              </TouchableOpacity>

              <Text style={{ fontSize: 20, color: 'white', marginTop: 7, paddingLeft: 10 }}>UserName</Text>

            </LinearGradient>
          </View>

          <View>

            <TouchableOpacity style={styles.menu} onPress={() => Actions.BookAppointment()}>
              <Image
                source={require('./images/book.png')} style={{ height: 30, width: 30 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Book Appointment</Text>
            </TouchableOpacity>

          </View>


          <View>

            <TouchableOpacity style={styles.menu} onPress={() => Actions.Service()}>
              <Image
                source={require('./images/service-menu.png')} style={{ height: 30, width: 30 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Service</Text>
            </TouchableOpacity>

          </View>

          <View>

            <TouchableOpacity style={styles.menu} onPress={() => Actions.track()}>
              <Image
                source={require('./images/tracking-menu.png')} style={{ height: 30, width: 30 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Track Your Service</Text>
            </TouchableOpacity>

          </View>

          <View>

            <TouchableOpacity style={styles.menu} onPress={() => Actions.Insurance()}>
              <Image
                source={require('./images/insurance-menu.png')} style={{ height: 30, width: 30 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Insurance</Text>
            </TouchableOpacity>

          </View>

          <View>

            <TouchableOpacity style={styles.menu} onPress={() => Actions.FuelStation()}>
              <Image
                source={require('./images/fuel-station-menu.png')} style={{ height: 30, width: 30 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Fuel Station</Text>
            </TouchableOpacity>

          </View>

          <View>

            <TouchableOpacity style={styles.menu} onPress={() => Actions.RoadAssist()}>
              <Image
                source={require('./images/road-assist-menu1.png')} style={{ height: 35, width: 35 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Road Assist</Text>
            </TouchableOpacity>

          </View>

          <View>

            <TouchableOpacity style={styles.menu} onPress={() => Actions.Notifications()}>
              <Image
                source={require('./images/notifications-menu.png')} style={{ height: 30, width: 30 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Notifications</Text>
            </TouchableOpacity>

          </View>

          <View>

            <TouchableOpacity style={styles.menu} onPress={() => Actions.ServiceHistory()}>
              <Image
                source={require('./images/history-menu.png')} style={{ height: 30, width: 30 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Service History</Text>
            </TouchableOpacity>

          </View>

          <View>

            <TouchableOpacity style={styles.menu} onPress={() => Actions.AppointmentsUser()}>
              <Image
                source={require('./images/book.png')} style={{ height: 30, width: 30 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Appointments</Text>
            </TouchableOpacity>

          </View>

          <View>

            <TouchableOpacity style={styles.menu} onPress={() => Actions.ratings()}>
              <Image
                source={require('./images/favorite.png')} style={{ height: 30, width: 30 }}
              ></Image>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 10 }}>Rate</Text>
            </TouchableOpacity>

          </View>

          <View>
            <TouchableOpacity style={styles.button} onPress={() => Actions.Login()}>
              <LinearGradient colors={['dodgerblue', 'deepskyblue', 'skyblue']} style={styles.gradient}>
                <Text style={{ fontSize: 25, color: '#ffffff' }}>Log out</Text>
              </LinearGradient>
            </TouchableOpacity>

          </View>



        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 180,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 70,
    paddingLeft: 20,
    paddingTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 30
},
gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 200,
    borderRadius: 40
},
});