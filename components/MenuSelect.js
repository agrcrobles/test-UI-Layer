import React, {Component} from "react";
import {Image, TouchableHighlight } from 'react-native';

export default class MenuSelect extends component {
  constructor(props) {
    super(props);
  }
  // _onPressButton(){
  //   onPress={this._onPressButton}
  

  render(){
 
    return ( 
      <View>
          <TouchableHighlight>
            <Image
              style={styles.button}
              source={this.props.image}
            />
          </TouchableHighlight>
          
          <TouchableHighlight>
          <Image
              style={styles.button}
              source={this.props.image}
            />
        </TouchableHighlight>
    </View>
  )
}
}
var styles = StyleSheet.create({
  button: {
  width: 250, 
  height: 50
  }
});