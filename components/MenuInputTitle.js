import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

export default function MenuTitle(props) {
  return (
    <Image source={props.image} style={{width:300, height: 50, marginBottom:5}} />
  )
}

// const styles = StyleSheet.create({
//   menuLabel : {
//     margin: .05,
//     resizeMode: 'contain',
//     width: 220,
//     height: 200,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 8,
    
//   }
// })