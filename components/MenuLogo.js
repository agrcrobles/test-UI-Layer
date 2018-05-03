import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

export default class WelcomeHeader extends React.Component {
  render() {
    return (
     
        
      <Image source={require('../assets/hercLogoBreak.png')} style={styles.container} />
     
         );
  }
}

var styles = StyleSheet.create({
  container: {
  
    // remove width and height to override fixed static size
    resizeMode: 'contain',
    width: 200,
    height: 120,
    backgroundColor: "#021227",

    padding: 0,
    
  },
 
  
})
;