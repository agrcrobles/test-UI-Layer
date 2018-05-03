import React, { Component } from "react";
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import backArrow from '../assets/icon_backarrow.png';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/styles';

class BackButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props, 'inbackbutton')
    const { navigate } = this.props.navigation;
    // let mB = 60 || this.props.marginBottom;
    return (
      <TouchableHighlight
        style={{ alignSelf: 'flex-start', padding: 5 }}
        onPress={() => this.props.navigation.goBack()}
      >
        <Image
          source={backArrow}
          style={{ height: 20, width: 20, alignSelf: 'flex-start' }}
        />
      </TouchableHighlight>
    )

  }
}
export default BackButton;
//   // _onPress = () => {
//   //   console.log('backArrowComponent onpress', this.props);
//   //   navigate.goBack();
//   // }
//   render(){
//     // const { navigate } = this.props.navigation;
//     return(
//       <Image

//       source={backArrow}
//       style={{height: 50, width: 50}}

//       />

//     )
//   } 
// }
