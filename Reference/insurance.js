import React, {Component} from 'react';
import {StyleSheet,FlatList, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class imsurance extends Component{
  render() {
    return (
        
      <View style={{flex:1}} >
      <LinearGradient 
     colors={['#6e45e2', '#88d3ce']}>

       <View style={{height:'15%',flexDirection:'row',justifyContent:'space-around'}}>

<View style={{marginTop:20}}>
<Image source={require('./back.png')} style={styles.img}/>
</View>

<View>
    <Text style={{color:'#FFFFFF',fontSize:35,marginTop:10 }}>Insurance</Text>
</View>

<View  style={{marginTop:20}}> 
<Image source={require('./insurance.png')} style={{  height:50, width:50}}/>
</View>


</View>
</LinearGradient>
<View style={{justifyContent:'center',marginTop:10 , alignItems:'center'}}>
    <Text style={{fontSize:16,fontWeight:'bold'}}>
        4  Results
    </Text>
</View>

<View style={{marginTop: 10}}>
                <FlatList
                    data={[{
                        title: 'Youssef Tahiri',
                        price: 'Rs 10000',
                        description: '5.5 Km ',
                        contact: 'Contact',
                       

                    },
                        {
                      
                            title: 'carinsurance',
						    price: 'Rs 12000',
                            description: '10 Km ',
                            contact: 'Contact',
                        },
                        {
                      
                            title: 'dk insurance',
						    price: 'Rs 12500',
                            description: '11 Km ',
                            contact: 'Contact',
                        },
                        {
                      
                            title: ' raj insurance',
						    price: 'Rs 12900',
                            description: '1 Km ',
                            contact: 'Contact',
                        }
                    ]}
                    renderItem={({item}) =>
                    <View style={{flexDirection: 'column'}}>


                        <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row',justifyContent:'space-around'}}>

                        <View style={{flexDirection: 'column', marginLeft: 20, height: 90, width: 180}}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginLeft: 3
                                    }}>{item.title}</Text>
                                    <Text style={{color: '#808080', fontSize: 20}}> {item.price}</Text>
                                    <Text style={{color: '#808080', fontSize: 20}}> {item.description}</Text>
                                </View>

                                   <View>
                                    <Text style={{
                                        paddingTop: 10,
                                        marginLeft: 20,
                                        paddingBottom: 10,
                                        paddingRight: 10,
                                        paddingLeft: 10,
                                        color: 'blue',
                                        textAlign: 'center',
                                        backgroundColor: 'powderblue',
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        borderColor: 'powderblue'
                                    }}>{item.contact}</Text>
                                </View>

                                </View>
                                </View> 
                                }
                                />
                            
                                </View>
                            

                                </View>
                            
                            
                            



    
      

      
    );
  }
}

const styles = StyleSheet.create({
  
    img:{
        height:35,
        width:35,}
});
