import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
// import WelcomeHeader from "../components/WelcomeHeader";
import menuOpts from "../components/buttons/menuOptions.png";
import { StackNavigator } from 'react-navigation';
// import Title from "../components/MenuInputTitle";
import logo from "../assets/hercLogoBreak.png";
import home from "../components/buttons/homeBtn.png";
import hiprBtn from "../components/buttons/hiprBtn.png";
import igvc from "../components/buttons/igvc.png";
import verifyBtn from "../components/buttons/verifyBtn.png";
import digiView from "../components/buttons/digitalViewBtn.png";
import blockScan from "../components/buttons/blockScannerBtn.png";
import settings from "../components/buttons/settingsBtn.png";
import wallet from "../components/buttons/walletBtn.png";
import styles from "../assets/styles";
import { connect } from 'react-redux';
import { listAssets, getHercId, fetchAssets } from '../actions/AssetActions';
import BackButton from '../components/BackButton';


 class MenuOptions extends Component {
  // const { navigate } = this.props.navigation;
//   static navigationOptions = ({navigation}) => ({
//     headerLeft: <BackButton navigation={navigation} />
   
// })
  
  constructor(props) {
    super(props);
   
  }
  
  componentDidMount() {
    // this.props.fetchAssets();
    this.props.getHercId();
    // console.log(this.state, 'stateprops')
    
    console.log('working it');
    
  }
  
  render(){
   
    const { navigate } = this.props.navigation;
  
    return(
      <View style={styles.container}>
      
      {/* <Image source={logo} style={styles.menuLogo}/> */}
        <Image source={menuOpts} style={styles.menuInputTitle} />
          
          <View style={styles.menu}>
        

            {/* <TouchableHighlight onPress={() => Alert.alert('Uninstalled Component')}>
            <Image
              style={styles.button}
              source={wallet}
            />
          </TouchableHighlight>  */}
     
          <TouchableHighlight  onPress={() => navigate('PreHipr')}>
            <Image
              style={styles.button}
              source={hiprBtn}
            />
          </TouchableHighlight> 
          
          <TouchableHighlight  onPress={() => navigate('Create')}>
            <Image
              style={styles.button}
              source={igvc}
            />
          </TouchableHighlight> 
          
          <TouchableHighlight  onPress={() => navigate('Splash1')}>
            <Image
              style={styles.button}
              source={verifyBtn}
            />
          </TouchableHighlight> 
          
          <TouchableHighlight  onPress={() => navigate('PreDigi')}>
            <Image
              style={styles.button}
              source={digiView}
            />
          </TouchableHighlight> 
          
          <TouchableHighlight  onPress={() => navigate('TransAssetList')}>
            <Image
              style={styles.button}
              source={blockScan}
            />
          </TouchableHighlight> 
                  
          {/* <TouchableHighlight>
            <Image
              style={styles.button}
              source={settings}
            />
          </TouchableHighlight>  */}

          </View>
<Text style={{ color: '#f3c736', alignSelf: 'baseline', fontSize: 8}}>
V.0.2.5
</Text>
        </View>
      
           
    ) 
  };
}

const mapDispatchToProps = (dispatch) => ({

   fetchAssets: () => dispatch(fetchAssets()),
   getHercId: () => dispatch(getHercId()),


})
export default connect(null, mapDispatchToProps)(MenuOptions);