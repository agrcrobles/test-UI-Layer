import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import backArrow from '../assets/icon_backarrow.png';
import logout from '../assets/icon_logout.png';

export default function NavButtons(props)   {
    
      return (
        <View style={styles.headerBtns}>
        
        <Image style={styles.iconsArrow} source={backArrow} />
        <Image style={styles.iconsLogout} source={logout} />
        </View>
         
          );
    
  }
  
  var styles = StyleSheet.create({
    headerBtns: {
    
     flex: 1,
     flexDirection: 'row',
      height: 150,
      width: "100%",
      justifyContent: "space-between",
    //   alignItems: "center",   
      backgroundColor: "#021227",
      paddingLeft: 5,
      paddingRight: 5,
      paddingBottom: 0 
  
    },
    iconsArrow: {
        width: 25,
        height: 25

    },
    iconsLogout: {
        width: 57,
        height: 22
    }
  })