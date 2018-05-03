// const { navigate } = this.props.navigation;
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { STATUS_BAR_HEIGHT } from '../constants';
import { connect } from 'react-redux';
import Button from 'react-native-button';
import styles from '../assets/styles';
import create from '../assets/createNewAssetButton.png';
import supply from '../components/buttons/verifyBtn.png'
import BackButton from "../components/BackButton";

import { selectAsset, deleteAsset } from '../actions/AssetActions';
import backArrow from '../assets/icon_backarrow.png';


class Splash1 extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Image source={supply} style={{ height: 50, width: 250, marginLeft: 20 }} />,
    headerLeft: <BackButton navigation={navigation} />
  })
  constructor(props) {
    super(props);

  }

  //  Need to determine the ideal way to get the selected asset, currently am pulling them both down entirely and then just assigning the selected to state...I think...
  componentDidMount() {
    console.log(this.state, this.props, 'state and props');

  }

  _onDelete = (key) => {
    const { navigate } = this.props.navigation;

    this.props.deleteAsset(key);
    navigate('MenuOptions')

  }


  _onPress = (asset) => {
    const { navigate } = this.props.navigation;

    this.props.selectAsset(asset);
    navigate('Splash2', { logo: asset.logo, name: asset.name });
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props)
    let list = this.props.assets.map((asset, index) => {
      return (
        <TouchableHighlight key={index} style={styles.assetField}
          onPress={() => this._onPress(asset)}
           >

          <View  style={styles.assetField}>

            {/* <Button onPress={() => this._onDelete(asset.key)} style={styles.assetDeleteButton}>Delete</Button> */}

            <Text style={styles.assetLabel}>{asset.name}</Text>

            <Image style={styles.assetButton} source={{ uri: asset.logo }} />

          </View>
        </TouchableHighlight>
      )
    });

    return (
      // conditional render or fix scrollview styling...

      <View style={styles.container}>
        {/* <Image source={supply} style={{height: 50, width: 250, margin: 5}} />  */}
        {/* <ScrollView contentContainerStyle={styles.scrollView}> */}
        {list}
        {/* </ScrollView> */}
        <TouchableHighlight onPress={() => navigate('Create')}>
          <Image
            style={{ resizeMode: 'contain', height: 80, width: 150 }}
            source={create}
          />
        </TouchableHighlight>

      </View>



    )
  };
}

const mapStateToProps = (state) => ({
  assets: state.Assets,

});
const mapDispatchToProps = (dispatch) => ({

  selectAsset: (asset) =>
    dispatch(selectAsset(asset)),
  deleteAsset: (key) =>
    dispatch(deleteAsset(key))

})
export default connect(mapStateToProps, mapDispatchToProps)(Splash1);