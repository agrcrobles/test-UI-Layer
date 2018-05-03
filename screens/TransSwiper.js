import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, Text, View, Image, ScrollView, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import { StackNavigator } from 'react-navigation';
import Swiper from '../components/TxSwiper';
import { connect } from "react-redux";
import styles from '../assets/styles';
import SwipeCard from "../components/SwipeCard";
import BackButton from "../components/BackButton";



class TransSwiper extends Component {
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
        this.state = {
            transactions: Object.values(this.props.asset.transactions) || ["Data Loading","Please Be Patient"]
        }
    }
    componentDidMount() {
        // console.log(this.props.transactions, 'Swiper Here');
       
    }
    // _renderCards() {
    //     if(this.props.asset.hasOwnProperty('transactions')){
    //         this.setState({
    //             transactions: Object.values(this.props.assets.transactions)
    //         })
    //     }
    //     this.setState({
    //         transactions: ["Data Loading","Please Be Patient"]
    //     })
    // }


    render() {
    

        return (
         
                <Swiper hercId={this.props.asset.hercId} cards={this.state.transactions} />
         
        )
    }

}

const mapStateToProps = (state) => ({
    asset: state.AssetReducers.selectedAsset
})

export default connect(mapStateToProps)(TransSwiper);