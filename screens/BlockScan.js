
import React, { Component } from 'react';
// import { WebView } from 'react-native';
import BackButton from '../components/BackButton';
// import TransAssetList from '../components/TransAssetList';
import { StackNavigator } from 'react-navigation';
import track from '../components/buttons/blockScannerBtn.png';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Platform } from 'react-native';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import { getTrans } from '../actions/AssetActions';

// TODO: Get a proper 'Track' Label from Grey if styling is an issue

class BlockScan extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Image source={track} style={{ height: 50, width: 214, marginLeft: 35 }} />,
    headerLeft: <BackButton navigation={navigation} />
  })

  _onPress = (asset) => {
    
    const { navigate } = this.props.navigation;

   
   this.props.getTrans(asset.key);
   navigate('SpaceScreen', { name: asset.name, logo: asset.logo });

  //  navigate('SpaceScreen', { logo: asset.logo, name: asset.name });
  }
 
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props, 'blockscan')

    let list = this.props.assets.map((asset, index) => {
      return (
        <View key={index} style={styles.assetField}>

          {/* <Button onPress={() => this._onDelete(asset.key)} style={styles.assetDeleteButton}>Delete</Button> */}

          <Text style={styles.assetLabel}>{asset.name}</Text>

          <TouchableHighlight style={{ alignSelf: 'flex-start' }} onPress={() => this._onPress(asset)} >
            <Image style={styles.assetButton} source={{ uri: asset.logo }} />
          </TouchableHighlight>

        </View>
      )
    });

    return (
      <View style={styles.container}>

        {list}

      </View>



    )
  };
}

//need to write GET_TRANS

const mapStateToProps = (state) => ({
  assets: state.AssetReducers.assets,

});
const mapDispatchToProps = (dispatch) => ({

  getTrans: (assetKey) => 
    dispatch(getTrans(assetKey)),
  //   deleteAsset: (key) =>
  //     dispatch(deleteAsset(key))
  
})
export default connect(mapStateToProps, mapDispatchToProps)(BlockScan)



// import React, {Component} from 'react';
// import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
// // import blockScan from "../assets/blockScannerPanel.png";
// import logo from "../assets/hLogo.png";

// export default class BlockScan extends Component {
//     static navigationOptions = {
//         header: null

//       }


//     render(){
//     const { navigate } = this.props.navigation;
//     console.log(this.props,'in blockscan')
//     let values = this.props.navigation.state.params.values || null;
//     console.log(values, 'v');
//     // {Object.keys(values).map((keyName, keyIndex) => {
//     //     return(
//     //     <View key={keyIndex} style={styles.view}>
//     //         <Text style={styles.input}>{keyName}:</Text> 
//     //         <Text style={styles.value}>{values[keyName]}</Text>

//     //     </View>

//     //     )
//     //     })}

//     return (
//         <View style={styles.container}>

//             <View style={styles.header}>
//             <TouchableHighlight onPress={() => navigate('MenuOptions')}>
//                 <Image source={logo} style={styles.icon} />
//             </TouchableHighlight>
//             </View>

//             <View style={styles.portrait}>
//                <Text> Portrait </Text> 
//             </View>

//             <View style={styles.main}>

//                  <View style={styles.section}>

//                   <Text>section1</Text>


//                 </View>

//                 <View style={styles.section}>
//                     <Text>section2</Text>
//                 </View>
//             </View>
//             </View>





//             )
//          }   

//     }

//     const styles = StyleSheet.create({
//             container: {
//             flex: 1,
//             paddingTop: 30,
//             // width: "100%",
//             backgroundColor: '#02152a',
//             // backgroundColor: '#fff',
//             alignItems: 'center',
//             justifyContent: 'flex-start',

//         },
//         header: {
//             height: 40,
//             width: '90%',
//             borderColor: '#6b6324',
//             borderWidth: 1,
//             margin: 1,
//             flexDirection: 'row',
//             justifyContent: 'flex-start',
//             alignItems: 'flex-start',
//             padding: 1
//         },
//         main: {
//             borderColor: '#6b6324',
//             borderWidth: 1,
//             width: '90%',
//             alignItems: 'center',
//             height: 550,
//             margin: 1,
//             justifyContent: 'space-around'

//         },
//         portrait: {
//             height: 50,
//             width: '65%',
//             borderColor: '#6b6324',
//             borderWidth: 1,
//             margin: 1
//         },
//         section: {
//             width: '87%',
//             height: '47%',
//             borderColor: '#6b6324',
//             borderWidth: 1,
//             margin: 1
//         },
//         icon: {
//             marginTop: 2,
//             height: 27,
//             width: 30, 
//             alignSelf:"flex-start"
//         },

//         })
