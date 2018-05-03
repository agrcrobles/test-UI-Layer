import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { STATUS_BAR_HEIGHT } from '../constants';
import { connect } from 'react-redux';
import hiprLogo from "../assets/hiprLogo.png";
import styles from '../assets/styles';
import create from '../assets/createNewAssetButton.png';
import supply from '../components/buttons/verifyBtn.png'
import BackButton from '../components/BackButton';
import { selectAsset, listAssets } from '../actions/AssetActions';
import backArrow from '../assets/icon_backarrow.png';


 class HiprAssets extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {
        height: Platform.OS === 'android' ? 80 + STATUS_BAR_HEIGHT : 80,
        backgroundColor: '#021227',

    },
    headerTitle: <Image style={{
        height: 200,
        width: 200,
        marginLeft: 55,
        resizeMode: 'contain'
    }}
        source={hiprLogo} />,
    
        headerLeft: <BackButton navigation = { navigation } />

})
  constructor(props) {
    super(props);

  }
 
  //  Need to determine the ideal way to get the selected asset, currently am pulling them both down entirely and then just assigning the selected to state...I think...
  componentDidMount() {
    
   
  }

//   _onPress = (asset) => {
//     const { navigate } = this.props.navigation;
//     this.props.selectAsset(asset);
//     navigate('Splash2', {logo: asset.logo, name: asset.name});
//   }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props)
    let list = this.props.assets.map((asset, index) => {
      return (
        <View key={index} style={styles.assetField}>
          <Text style={styles.assetLabel}>{asset.name}</Text>
          <TouchableHighlight style={{alignSelf: 'flex-start'}} onPress={() => navigate('Hipr')}  >
            <Image style={styles.assetButton} source={{uri:asset.logo}} />  
          </TouchableHighlight>
        </View>
      )
    });
    {/* <ScrollView contentContainerStyle={styles.scrollView}> */}
    
    return (
      
      <View style={styles.container}>
      {/* <Image source={supply} style={{height: 50, width: 250, margin: 5}} />  */}
          {list}
        {/* <TouchableHighlight onPress={() => navigate('Create')}>
          <Image
            style={{ resizeMode: 'contain', height: 80, width: 150 }}
            source={create}
          />
        </TouchableHighlight> */}

      </View>



    )
  };
}

const mapStateToProps = (state) => ({
  assets: state.Assets,

});
// const mapDispatchToProps = (dispatch) => ({

//   selectAsset: (asset) =>
//     dispatch(selectAsset(asset)),

// })
export default connect(mapStateToProps)(HiprAssets);