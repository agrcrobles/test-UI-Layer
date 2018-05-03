import React, { Component } from "react";
import { View, TextInput, StyleSheet, Image, Button, Alert, ScrollView } from 'react-native';
import Submit from "./SubmitBtn";
export default class Inputs extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      
      serial: "",
      manufacturer: "",
      purity: "",
      weight: "",
      AGID: "",
      RFID: ""  
    }
  };
  

   

 render(){
  return (
   
       <View contentContainerStyle={styles.menu}> 
        <TextInput
            style={styles.input}
            onChangeText={(serial) => this.setState({serial})}
            placeholder="Serial Number"
          />
          <TextInput
            style={styles.input}
            onChangeText={(purity) => this.setState({purity})}
            placeholder="Purity"
          />
          <TextInput
            style={styles.input}
            onChangeText={(manufacturer) => this.setState({manufacturer})}
            placeholder="Manufacturer"
          />
          <TextInput
            style={styles.input}
            onChangeText={(weight) => this.setState({weight})}
            placeholder="Weight"
          />
          <TextInput
            style={styles.input}
            onChangeText={(AGID) => this.setState({AGID})}
            placeholder="AGID"
          />
          <TextInput
            style={styles.input}
            onChangeText={(RFID) => this.setState({RFID})}
            placeholder="RFID"
          />

         
       </View>       
  
         
  
);}  

}
// #142535 another background color
const styles = StyleSheet.create({
  menu: {
   
    height: 600,
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'yellow',
   
  
    },
    input: {
      width: 200, 
      height: 50,
      textAlign: "center",
      backgroundColor: "#132c4a", 
      margin: .5,
      fontSize: 20.2,
      fontWeight: "600",
      borderColor: "#142535",
      color: "white",
      borderWidth: 1
    }
    }
  );

 