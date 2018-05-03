import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Platform, Image, TouchableHighlight } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import styles from '../assets/styles';
import icon from '../assets/hercLogoPillar.png';
import logo from '../assets/hercLogoBreak.png';
import backArrow from '../assets/icon_backarrow.png';
import { Font } from 'expo';
import BackButton from '../components/BackButton';
// import { listAssets } from '../actions/AssetActions';
import { connect } from 'react-redux';

import Welcome from "../screens/Welcome";
import FileUp from "../screens/FileUp";
import DocUp from "../screens/DocUp";
import Confirm from "../screens/Confirm";
import Create from "../screens/Create";
import MenuOptions from '../screens/MenuOptions';
import InputMan from '../screens/InputMan';
import Tee from '../screens/Tee';
import Digi from '../screens/DigiViewer';
import Anthem from '../screens/Anthem';
import PreHipr from '../screens/PreHIPR';
import HiprAssets from '../screens/HiprAssets';
import Hipr from '../screens/Hipr';
import BlockScanner from '../screens/BlockScanner';
import TransSwiper from '../screens/TransSwiper';
import Splash1 from '../screens/Splash1';
import Splash2 from '../screens/Splash2';
import Splash3 from '../screens/Splash3';
import NewAssetConfirm from '../screens/NewAssetConfirm';
import EdiT from '../screens/Edi-T';
import PreDigi from '../screens/PreDigiView';
import SpaceScreen from '../screens/SpaceScreen';
import TransAssetList from '../screens/TransAssetList';

const MainNavigator = StackNavigator({
    Welcome: { screen: Welcome },
    MenuOptions: { screen: MenuOptions },
    Create: { screen: Create },
    Tee: { screen: Tee },
    Digi: { screen: Digi },
    Anthem: { screen: Anthem },
    PreHipr: { screen: PreHipr },
    HiprAssets: { screen: HiprAssets },
    Hipr: { screen: Hipr },
    BlockScanner: { screen: BlockScanner },
    TransSwiper: { screen: TransSwiper },
    TransAssetList: { screen: TransAssetList },
    Splash1: { screen: Splash1 },
    Splash2: { screen: Splash2 },
    Splash3: { screen: Splash3 },
    InputMan: { screen: InputMan },
    FileUp: { screen: FileUp },
    DocUp: { screen: DocUp },
    Confirm: { screen: Confirm },
    NewAssetConfirm: { screen: NewAssetConfirm },
    EdiT: { screen : EdiT},
    PreDigi: { screen: PreDigi },
    SpaceScreen: { screen: SpaceScreen }

},


    {
        initialRouteName: 'Welcome',
        navigationOptions: ({ navigation }) => ({

            headerTitle: <Image style={{
                height: 100,
                width: 240,
                alignSelf: 'center',
                resizeMode: 'contain',
                marginLeft: 0,
            }}
                source={logo} />,

            headerStyle: {
                height: Platform.OS === 'android' ? 100 + STATUS_BAR_HEIGHT : 100,
                backgroundColor: '#021227',
                
            },
            headerTitleStyle: {
                marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
                textAlign: 'center',
                textAlignVertical: 'center',
                backgroundColor: '#021227',
                alignSelf: 'center',

            },
            headerRight: <View></View>,
            headerLeft: <View></View>

        })
    })

 class MainNavigation extends Component {
    componentDidMount() {
        Font.loadAsync({
            'dinPro': require('../assets/font/DINPro-Regular_13937.ttf'),
        });
        console.log('fonts');
        // this.props.listAssets();
    }
    render() {
        return (
            <MainNavigator />
        )
    }
}

export default MainNavigation;
// const mapDispatchToProps = (dispatch) => ({

//     listAssets: () => dispatch(listAssets())
  
//   })
//   export default connect(null, mapDispatchToProps)(MainNavigation);