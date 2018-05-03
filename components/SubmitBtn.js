import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';

export default class Submit extends Component {

  render(){
    return (
      <TouchableHighlight style={{height:50, width:200, marginTop: 10}} onPress={this.props.onPress}>
        <Image style={styles.button} source={require('../assets/submitButton.png')} />
      </TouchableHighlight>
    )
  }
}
var styles = StyleSheet.create({
  button: {
  
    // remove width and height to override fixed static size
    height: 60,
    width: 200,
     resizeMode: 'contain'

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
