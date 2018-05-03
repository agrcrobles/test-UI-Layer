import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import logo from "../assets/hercLogoBreak.png";
import label from "../assets/digiViewerLabel.png";
import persWal from "../assets/personalWalletLabel.png";
import stakeTxt from "../assets/stakeText.png";
import Submit from "../components/SubmitBtn";
import hLogo from "../assets/hercLogoPillar.png";
import BackButton from "../components/BackButton";
// import feeLabel from "../assets/hercFeeLabel.png";
import viewBtn from "../assets/veiwBtn.png";
// import TouchableHeader from "../components/TouchableHeader";

// - make the "personal wallet" filled with 10,000 Hercs
// - make the menu drop down to another "My Hercs" wallet
//  - remove the hydra input field completely 
// -  change Stake to Fee
// -  put a "1" in the HERC field
// - View should open a native browser in app for the site http://anthembunker.com/(edited)

export default class DigiViewer extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {

      headerTitle:
        <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableHighlight onPress={() => navigation.navigate('MenuOptions')}>
            <Image style={{
              height: 80,
              width: 80,
              // alignSelf: 'center',
              borderRadius: 120,
              resizeMode: 'contain'
            }}
              source={{ uri: params.logo }} />
          </TouchableHighlight>
          <Text style={styles.assetHeaderLabel}>{params.name}</Text>
        </View>,

      headerStyle: {
        height: Platform.OS === 'android' ? 100 + STATUS_BAR_HEIGHT : 100,
        backgroundColor: '#021227',

      },
      headerTitleStyle: {
        marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
        textAlign: 'center',
        alignSelf: 'center',
        // textAlignVertical: 'center',
        backgroundColor: '#021227',

      },
      headerLeft: < BackButton navigation={navigation} />,
      headerRight: <View></View>
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    // const { params } = navigation.state;
    return (

      <View style={styles.container}>

        <Image source={persWal} style={styles.walletLabel} />

        <View style={styles.walletBalance}>
          <Image source={hLogo} style={styles.icon} />
          <Text style={styles.text}>10,000</Text>
        </View>

        <View style={styles.wallet}>


          <View style={styles.feeBalance}>
            <Text style={styles.text}>Fee:</Text>
            <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
              <Text style={styles.text}>1</Text>
              <Image source={hLogo} style={styles.feeLabel} />
            </View>
          </View>
          <TouchableHighlight style={{ marginTop: 5 }} onPress={() => navigate('Anthem')}>
            <Image source={viewBtn} style={styles.button} />
          </TouchableHighlight>
        </View>
      </View>





    )
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021227',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  walletLabel: {
    width: '70%',
    height: 60,
    resizeMode: 'contain',
  },
  walletBalance: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60
  },
  wallet: {
    padding: 3,
    backgroundColor: '#021227',
    height: 150,
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: "center",
    margin: 5
  },
  feeBalance: {
    width: '50%',
    flexDirection: 'row',
    backgroundColor: '#021227',
    padding: 2,
    justifyContent: 'space-between',
    margin: 5

    // height: 

  },
  feeLabel: {
    height: 20,
    width: 40,
    resizeMode: 'contain',
    margin: 5
  },
  label: {
    height: 50,
    width: '80%',
    resizeMode: 'contain'
  },
  legendInput: {
    // alignSelf: "center",
    padding: 5,
    width: 330,
    height: 90,
    // alignItems: 'center',
    margin: 1,
    marginBottom: 5,
    backgroundColor: "#14283f",
    justifyContent: "space-between",

    borderRadius: 4
  },
  text: {

    height: 30,
    textAlign: "center",
    color: "white",
    alignSelf: "center",
    fontSize: 20.2,
    fontWeight: "600",
  },

  icon: {
    height: 50,
    width: 60,
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    marginLeft: 10

  },




  walletFee: {
    width: '80%',
    height: 200,
    // justifyContent: 'center',
    backgroundColor: '#06112e',
    padding: 3,
    alignItems: 'center',
    margin: 7
  },

  hercLabel: {
    textAlign: 'left',
    alignSelf: 'flex-start',

    alignItems: 'flex-end',
    color: 'white',
    height: 20,
    width: 120
  },
  button: {
    width: 250,
    height: 50,
    marginTop: 30
  },
})