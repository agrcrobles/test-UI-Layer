import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import Submit from "../components/SubmitBtn";
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";
import { StackNavigator } from 'react-navigation';
import { connect } from "react-redux";
import styles from "../assets/styles";
import fee from "../assets/hercLogoPillar.png";
{/* <Image style={styles.assetFee} source={fee} /> */ }



class Confirm extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {

      headerTitle:
        <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{
            height: 80,
            width: 80,
            alignSelf: 'center',
            borderRadius: 40,
            resizeMode: 'contain'
          }}
            source={{ uri: params.logo }} />
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
      headerRight: <View></View>
    }
  }

  constructor(props) {
    super(props);

  }
  state = {};


  componentDidMount() {
    console.log(this.props.newProps, 'thisnewtransinfo')
    console.log(this.props, 'props')


  }

  render() {
    // let price = this.state.fctPrice;
    const { navigate } = this.props.navigation;
    console.log(this.props.newProps, "txNewProps")

    let locationImage = this.props.location === 'originator' ? originator : recipient;
    let logo = this.props.logo;
    // console.log(this.props.Assets);

    let list = this.props.newProps
      ?
      Object.keys(this.props.newProps).map((propName, idx) => {
        let name = propName;
        return (

          <View key={idx} style={styles.field}>
            <Text style={styles.label}>{name}</Text>
            <Text style={styles.input}>{this.props.newProps[name]}</Text>
          </View>
        )
      })
      :
      "No Props"
      ;

    return (
      <View style={styles.containerCenter}>
        <Image style={styles.assetLocation} source={locationImage} />
        <ScrollView contentContainerStyle={styles.scrollView}>
          {list}
          <Submit onPress={() => navigate('Splash3', { logo: this.props.logo, name: this.props.name })} />
          {/* <View style={styles.assetFee}>
            <Image style={styles.assetFeeLabel} source={fee} />
            <Text style={styles.teePrice}>{price}</Text>
          </View> */}
        </ScrollView>
      </View>




    )
  }
}


const mapStateToProps = (state) => ({
  newProps: state.AssetReducers.trans.data.properties,
  location: state.AssetReducers.trans.data.tXLocation,
  logo: state.AssetReducers.selectedAsset.Logo,
  name: state.AssetReducers.trans.header.name
  // newProperties: state.AssetReducers.selectedAsset.newProperties


});
// const mapDispatchToProps = (dispatch) => ({
//   commitAsset: (asset) =>
//       dispatch(commitAsset(asset)
//       )
// })
export default connect(mapStateToProps)(Confirm);


