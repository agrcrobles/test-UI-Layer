import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import NavButtons from "./NavButtons";
import MenuLogo from "./MenuLogo";

export default function MenuHeader(props) {
  
    return (
      <View style={styles.header}>
      
      <NavButtons />
      <MenuLogo />
      
      </View>
       
        );
  
}

var styles = StyleSheet.create({
  header: {
  
    // remove width and height to override fixed static size
    height: 140,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",   
    backgroundColor: "#021227"

  }
  // ,
  // hdrbtns: {
  //   flex: 1,
  //   flexDirection: "row",
  //   width: "95%",
  //   height: 50,
  //   justifyContent: "space-between"
    
  // },
  // menuLogo: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: 170,
  //   width: "50%",
  //   // #021227
  //   backgroundColor: '#e04759',
  //   // margin: .5
       
  // }
 
  
})
;

