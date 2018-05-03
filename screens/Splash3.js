import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, Text, View, Image, ScrollView, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';

import { StackNavigator } from 'react-navigation';


import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";

import documents from "../assets/docs.png";
import camera from "../assets/camera.png";
import styles from "../assets/styles";
import metrics from "../assets/metrics.png";
import EDIT from "../assets/EdiT-Sets.png";
import { connect } from "react-redux";
import TransRev from "../components/TransactionReview";
import BackButton from "../components/BackButton";

class Splash3 extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {

            headerTitle:
                <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableHighlight onPress={() => navigation.navigate('MenuOptions')}>
                        <Image style={{
                            height: 80,
                            width: 80,
                            alignSelf: 'center',
                            borderRadius: 40,
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
            headerRight: <View></View>,
            headerLeft: <BackButton navigation={navigation} />

        }
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.transInfo, 'transInfo')


    }
    // this.props.navigation.state.params.image
    render() {
        const { navigate } = this.props.navigation;
        // let image = this.props.asset.Images ? this.props.asset.Images[0] : null;
        let locationImage = this.props.data.tXLocation === 'recipient' ? recipient : originator;
        let logo = this.props.logo;
        let asset = this.props.transHeader;
        let hercId = this.props.hercId;
        console.log(asset, 'splash3 this.props.transinfo');


        return (
            <View style={styles.container}>

                <ScrollView contentContainerStyle={styles.scrollView}>


                    <View style={styles.spaceAroundContainer}>
                        <TouchableHighlight onPress={() => navigate('FileUp', { logo: logo, name: asset.name })}>
                            <Image
                                style={styles.menuInputTitle}
                                source={camera}
                            />

                        </TouchableHighlight>
                        <Image source={{ uri: logo }} />
                        <TouchableHighlight onPress={() => navigate('DocUp', { logo: logo, name: asset.name })}>
                            <Image
                                style={styles.menuInputTitle}
                                source={documents}
                            />
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => navigate('InputMan', { logo: logo, name: asset.name })}>
                            <Image
                                style={styles.menuInputTitle}
                                source={metrics}
                            />
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => navigate('EdiT', { logo: logo, name: asset.name })}>
                            <Image
                                style={styles.menuInputTitle}
                                source={EDIT}
                            />
                        </TouchableHighlight>
                    </View>

                    <TransRev navigate={navigate} />
                </ScrollView>
            </View>


        )
    };
}

const mapStateToProps = (state) => ({
    logo: state.AssetReducers.selectedAsset.Logo,
    transHeader: state.AssetReducers.trans.header,
    hercId: state.AssetReducers.trans.header.hercId,
    data: state.AssetReducers.trans.data

});
export default connect(mapStateToProps)(Splash3);