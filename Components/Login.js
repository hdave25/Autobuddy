import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = { text: 'Mobile Number' };
      }
    
    render() {
      return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{marginTop:50,flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                <View >
                    <Text style={{ textShadowColor: 'black',
                        textShadowOffset: { width: 1, height: 1},
                        textShadowRadius: 1,fontSize:40, fontWeight:'bold'}}>AutoBuddy</Text>
                </View>

                <View>
                        <Image source={require('./images/icon.png')} style={{height:30,width:30}}/>
                </View>
                    
            </View>

            <View  style={{marginTop:50,justifyContent:'center', alignItems:'center',fontSize:50}}>
                <Text  style={{fontSize:30,color:'blue'}}>LOGIN</Text>
            </View>

            <View style={{flexDirection:'row', marginLeft:30,marginTop:40}}>
                <View   style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./images/avatar.png')} style={{height:40,width:40}}/>
                </View>
                
                <View style={{marginLeft:20,width:'100%',flexDirection:'column'}}>
                    <View>
                
                      <TextInput style={{fontSize:20,color:'grey'}}
                         onChangeText={(text) => this.setState({text})}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'blue'}
                        defaultValue={'Mobile NO.'}
                         />
                     </View>
                     <View style={{height:1, width:'70%', backgroundColor:'black'}}/>

                </View>
            </View>

            <View style={{flexDirection:'row', marginLeft:30,marginTop:20}}>
                <View   style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={require('./images/lock.png')} style={{height:40,width:40}}/>
                </View>
                
                <View style={{marginLeft:20,width:'100%',flexDirection:'column'}}>
                  <View  style={{flexDirection:'row',width:'70%',justifyContent:'space-between', alignItems:'center'}}>
                    <View>
                        <TextInput style={{fontSize:20,color:'grey'}}
                        onChangeText={(text) => this.setState({text})}
                         underlineColorAndroid={'transparent'}
                        placeholderTextColor='green'
                        defaultValue={'Password'} />
                     </View>

                     <View>
                     <Image source={require('./images/hide.png')} style={{height:30,width:30}}/>
                     </View>
                  </View>
                  <View style={{height:1, width:'70%', backgroundColor:'black'}}/>
                </View>
            </View>
            
            <View style={{justifyContent:'center', alignItems:'center',marginTop:50}}>
            <LinearGradient colors={['skyblue', 'blue']} style={{justifyContent:'center', alignItems:'center',height:50,width:200,borderRadius:40}}>
              <Text style={{fontSize:25,color:'#ffffff'}}>Login</Text>
             </LinearGradient>
             </View>
            
             <View style={{justifyContent:'center', alignItems:'center',marginTop:30}}>
             
             <Text style={{fontSize:17,color:'blue'}}>Forgot Password</Text>
             <View  style={{flexDirection:'row'}}>
             <View>
             <Text style={{fontSize:17}}>Do not have an account ? </Text>
             </View>
             <View>
                 <Text style={{fontSize:17,color:'blue'}}>Sign up</Text>
             </View>
             </View>

             </View>
        </View>

      );
    }
}