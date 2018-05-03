import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert, Button } from 'react-native';
import Title from "../components/MenuInputTitle";
import Submit from "../components/SubmitBtn";
import logo from "../assets/teeLabel.png";
import params from "../assets/igvcParamsLabel.png";
import { StackNavigator } from 'react-navigation';
import { STATUS_BAR_HEIGHT } from '../constants';
import BackButton from "../components/BackButton";

import { connect } from "react-redux";
import styles from "../assets/styles";
import fee from "../assets/hercLogoPillar.png";
import { incHercId, confirmAsset } from "../actions/AssetActions"

class NewAssetConfirm extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            height: Platform.OS === 'android' ? 80 + STATUS_BAR_HEIGHT : 80,
            backgroundColor: '#021227',

        },
        headerTitle: <Image style={{
            height: 80,
            width: 200,
            marginLeft: 30,
            resizeMode: 'contain'
        }}
            source={logo} />,
        headerLeft: <BackButton navigation={navigation} />
    })

    constructor(props) {
        super(props);
    }
    state = {};

    componentDidMount() {
        console.log(this.props.hercId, 'hercid')


    }


    _onPressSubmit() {
        let hercId = this.props.hercId;
        const { navigate } = this.props.navigation;
        let newAsset = Object.assign({}, this.props.newAsset, {
            ...this.props.newAsset,
            hercId
        })

        console.log(newAsset, 'newasset on its way to confirm');
        this.props.incHercId(hercId);
        console.log(hercId, 'hercID');
        this.props.confirmAsset(newAsset);
        // this.props.incHercId(); 
        // console.log(this.props.hercId, 'hercid Increase?')

        navigate('MenuOptions');
        // console.log(this.state.AssetReducers.assets, 'assets after')
    }


    render() {
        const { navigate } = this.props.navigation;
        let price = this.state.fctPrice;
        let hercId = this.props.hercId;
        let newAsset = this.props.newAsset;
        let Logo, Url, newProperties, list;
        let Name = newAsset.Name;

        // let Name = this.props.newAsset.Name;
        if (newAsset.Logo) {
            Logo = (<Image style={styles.assetHeaderImage} source={{ uri: newAsset.Logo }} />);
        } else {
            Logo = (<Text style={styles.label}>No Image</Text>)
        }


        if (newAsset.hasOwnProperty('Url')) {
            Url = (<Text style={styles.label}>{newAsset.Url}</Text>);
        } else {

            Url = (<Text style={styles.label}>No Url</Text>)
        }

        if (newAsset.hasOwnProperty('CoreProps')) {
             list = Object.getOwnPropertyNames(newAsset.CoreProps).map((x, i) => {
               return (
                    <View key={i} style={styles.field}>
                        <Text style={styles.label}>{x}</Text>
                        <Text style={styles.input}>""</Text>
                    </View>
                )
            })
        } else {
            list = (<Text style={styles.label}>No Properties</Text>)
        }



        return (

            <View style={styles.containerCenter}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.assetFieldHeader}>


                        <Text style={styles.assetHeaderLabel}>{Name}</Text>
                        {Logo}
                        {Url}
                        <Text style={styles.assetHeaderLabel}>HercID: {hercId}</Text>
                    </View>



                    {list}


                </ScrollView>

                <Submit onPress={() => this._onPressSubmit()} />

                <View style={styles.assetFee}>
                    <Image style={styles.assetFeeLabel} source={fee} />
                    <Text style={styles.teePrice}>10,000</Text>
                </View>
            </View>




        )
    }
}


const mapStateToProps = (state) => ({
    newAsset: state.AssetReducers.newAsset,
    hercId: state.AssetReducers.hercId
});

const mapDispatchToProps = (dispatch) => ({
    confirmAsset: (asset) =>
        dispatch(confirmAsset(asset)),

    incHercId: (hercid) =>
        dispatch(incHercId(hercid))
})
export default connect(mapStateToProps, mapDispatchToProps)(NewAssetConfirm);


