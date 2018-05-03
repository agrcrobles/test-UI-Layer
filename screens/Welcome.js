import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import welcome from "../assets/welcome.png";
import Button from 'react-native-button';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: ""
    }
  }
 

  _onPinPress(){
    const { navigate } = this.props.navigation;
  //   console.log(this.state.pin);
  //  if(!this.state.pin === 7362){ 
  //    Alert.alert("Wrong Pin!");
  //  }
     navigate('MenuOptions');
 
  }
  render(){
    Alert.alert('Welcome to the HERC Demo!');
    
   
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>

          <View style={styles.menu}>
        
            {/* <TextInput onChangeText={(pin) => this.setState({pin})} placeholder="PIN" underlineColorAndroid='transparent' style={styles.input}/>
         */}
            {/* <TouchableHighlight style={styles.welcomeBtn} onPress={() => this._onPinPress()}>
              <Image
                  style={styles.button}
                  source={welcome}
                />
            </TouchableHighlight>
          </View> */}
        
            <Button onPress={() => navigate('MenuOptions')} style={{color: 'white', fontSize: 40, height: 50, width: 205, marginTop: 100}}>ENTER</Button>
        </View>
      </View>
           
    ) 
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    // width: "100%",
    backgroundColor: '#021227',
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
  menu: {
    height: 300,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#021227'
    // paddingTop: 50
    // margin: .5,
  
    },
    button: {
      width: 250, 
      height: 50
    },
    input: {
      width: 150, 
      height: 40,
      textAlign: "center",
      backgroundColor: "#132c4a", 
      // margin: .5,
      fontSize: 20.2,
      fontWeight: "600",
      borderColor: "#142535",
      color: "white",
      borderWidth: 1,
      marginTop: 100
    },
    welcomeBtn: {
    //  marginTop: 10
    }
  });
