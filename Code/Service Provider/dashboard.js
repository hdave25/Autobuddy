import React from 'react';
import { StyleSheet, Text,Image, View } from 'react-native';

export default class dashboard extends React.Component {
  render() {
    return (
      <View style={{ flex:1, flexDirection: 'column', justifyContent: 'space-between', marginTop:20}}>
	   
	    <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
		
			<View style={{ width: 150, height:150, backgroundColor: 'white', elevation: 10, justifyContent:'center', alignItems:'center'}}>
			<Image  source= {require('./images/ho.png')} style={{width:75, height:75}} />
			<Text style={{fontWeight: 'bold'}}> Real Estate </Text>
		</View>
		
			<View style={{ width: 150, height:150, backgroundColor: 'white', elevation:10, justifyContent:'center', alignItems:'center'}} >
			<Image  source= {require('./images/ti.png')} style={{width:75, height:75}} />
			<Text style={{fontWeight: 'bold'}}> Jobs </Text>
		    </View>
		
		</View>
		
	   <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-around', marginTop:40}}>
	   
			<View style={{ width: 150, height:150, backgroundColor: 'white', elevation:10, justifyContent:'center', alignItems:'center'}} >
	   		<Image  source= {require('./images/car.png')} style={{width:75, height:75}} />
			<Text style={{fontWeight: 'bold'}}> Automobiles </Text>
			</View>
		
			<View style={{ width: 150, height:150, backgroundColor: 'white', elevation:10, justifyContent:'center', alignItems:'center'}} >
	   		<Image  source= {require('./images/ab.png')} style={{width:75, height:75}} />
			<Text style={{fontWeight: 'bold'}}> Electronics </Text>
			</View>
		
	   </View>
	 
	    <View style={{ flex:1, flexDirection: 'row', justifyContent: 'space-around'}}>
		
				<View style={{ width: 150, height:150, backgroundColor: 'white', elevation: 10, justifyContent:'center', alignItems:'center'}} >
				<Image  source= {require('./images/bc.png')} style={{width:75, height:75}} />
				<Text style={{fontWeight: 'bold'}}> Travels </Text>
				</View>
				
				<View style={{ width: 150, height:150, backgroundColor: 'white', elevation:10, justifyContent:'center', alignItems:'center'}} >
				<Image  source= {require('./images/cap.png')} style={{width:75, height:75}} />
				<Text style={{fontWeight: 'bold'}}> Education & Learning </Text>
				</View>
				
		</View>
		</View>
	
	 
	  
    );
  }
}

