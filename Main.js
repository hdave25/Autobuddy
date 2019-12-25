
import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Drawer,Router, Scene} from "react-native-router-flux";
import {drawerWidth} from './Scale';
import AddAppointment from './AddAppointment';
import AdminDrawer from './AdminDrawer';
import AppointmentRequests from './AppointmentRequests';
import AppointmentsSP from './AppointmentsSP';
import AppointmentsUser from './AppointmentsUser';
import ChangePassword from './ChangePassword';
import UserDrawer from './UserDrawer';
import FuelStation from './FuelStation';
import MobileNumber from './MobileNumber';
import Notifications from './Notifications';
import OTP from './OTP';
import Insurance from './Insurance';
import RoadAssist from './RoadAssist';
import Service from './Service';
import ServiceHistory from './ServiceHistory';
import AddVehicle from './AddVehicle';
import HondaActiva from './HondaActiva';
import HondaCity from './HondaCity';
import SuzukiGixxer from './SuzukiGixxer';
import SignUp from './SignUp';
import ratings from './ratings';
import Home from './Home';
import Homescreen from './Homescreen';
import Login from './Login';
import track from './track';
import BookAppointment from './BookAppointment';
import SignupSp from './SignupSp';
import DrawerSP from './DrawerSP';



export default class App extends Component {
  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="Home" hideNavBar={true} component={Home}initial/>
                <Drawer
                    hideNavBar
                    key="UserDrawer"
                    contentComponent={UserDrawer}
                    drawerWidth={drawerWidth}>
                    {
                        /*
                        Wrapper Scene needed to fix a bug where the tabs would
                        reload as a modal ontop of itself
                        */
                    }
                    <Scene key="Homescreen" hideNavBar={true} component={Homescreen} />
                </Drawer>
                <Scene key="AddAppointment" hideNavBar={true} component={AddAppointment}/>
                <Scene key="AdminDrawer" hideNavBar={true} component={AdminDrawer}/>
                <Scene key="AppointmentRequests" hideNavBar={true} component={AppointmentRequests}/>
                <Scene key="AppointmentsSP" hideNavBar={true} component={AppointmentsSP}/>
                <Scene key="AppointmentsUser" hideNavBar={true} component={AppointmentsUser}/>
                <Scene key="ChangePassword" hideNavBar={true} component={ChangePassword}/>
                <Scene key="AddVehicle" hideNavBar={true} component={AddVehicle}/>
                <Scene key="HondaCity" hideNavBar={true} component={HondaCity}/>
                <Scene key="HondaActiva" hideNavBar={true} component={HondaActiva}/>
                <Scene key="SuzukiGixxer" hideNavBar={true} component={SuzukiGixxer}/>
                <Scene key="Insurance" hideNavBar={true} component={Insurance}/>
                <Scene key="SignupSp" hideNavBar={true} component={SignupSp} />
                <Scene key="FuelStation" hideNavBar={true} component={FuelStation} />
                <Scene key="MobileNumber" hideNavBar={true} component={MobileNumber}  />
                <Scene key="Notifications" hideNavBar={true} component={Notifications}  />
                <Scene key="OTP" hideNavBar={true} component={OTP}  />
                <Scene key="RoadAssist" hideNavBar={true} component={RoadAssist}  />
                <Scene key="Service" hideNavBar={true} component={Service} />
                <Scene key="ServiceHistory" hideNavBar={true} component={ServiceHistory} />
                <Scene key="SignUp" hideNavBar={true} component={SignUp} />
                <Scene key="ratings" hideNavBar={true} component={ratings} />
                <Scene key="Login" hideNavBar={true} component={Login} />
                <Scene key="track" hideNavBar={true} component={track} />
                <Scene key="DrawerSP" hideNavBar={true} component={DrawerSP} />
                <Scene key="BookAppointment" hideNavBar={true} component={BookAppointment} />
            </Scene>
        </Router>
    );
  }
}
