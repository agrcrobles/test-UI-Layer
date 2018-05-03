import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';

export default class NextBtn extends Component {
// _onPress(){
//   Alert.alert("YOUtouchedit");
// }
  render(){
    return (
      <TouchableHighlight style={{height:80, width:200}} onPress={this.props.onPress}>
        <Image style={styles.button} source={require('../assets/nextLabel.png')} />
      </TouchableHighlight>
    )
  }
}
var styles = StyleSheet.create({
  button: {
  
    // remove width and height to override fixed static size
    height: 60,
    width: 200,
     resizeMode: 'cover'

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
