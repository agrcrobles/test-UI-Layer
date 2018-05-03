import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/styles';
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";
import submit from "../assets/submitButton.png";
import { sendTrans } from "../actions/AssetActions";
import fee from "../assets/hercLogoPillar.png";


class TransRev extends Component {
    constructor(props) {
        super(props);
        state = {};
    }
    componentDidMount() {
        this.getPricesFromApi();
        // console.log(this.props.transInfo, this.props.transDat, 'transinfos')
    }

    async getPricesFromApi() {
        try {
            let response = await fetch(
                'https://jsondata.herc.one/service-1.0-SNAPSHOT/JSON'
            );
            let responseJson = await response.json();
            let fctPrice = responseJson.list["0"].pricePerHercForFCT; 
            console.log(fctPrice, 'newthing');
            this.setState({ fctPrice });

        } catch (error) {
            console.error(error);
        }
    }

    _sendTrans() {
        const { navigate } = this.props.navigate;

        this.props.sendTrans();
        this.props.navigate('MenuOptions');

    }

    render() {
        // this.getPricesFromApi();
        let transInfo = this.props.transInfo;
        let price = this.state ? this.state.fctPrice : "";
        console.log(this.state, 'price');
        let transDat = this.props.transDat;

        console.log(transInfo, 'transinfo in transreviewrender', transDat, 'transdata')

        let locationImage = this.props.transDat.tXLocation === 'recipient' ? recipient : originator;
        let list;
        let ediTName, ediTNum, doc, docSize, image, imageSize = null;
        let dTime = transDat.dTime;
        console.log(dTime, 'dtime??');

        if (transDat.images[0]) {
            image = (<Image style={styles.thumb} source={{ uri: transDat.images[0].image }} />);
            imageSize = (<Text style={styles.revPropVal}>{transDat.images[0].size} kb</Text>);

        }

        if (transDat.documents[0]) {
            doc = (<Text style={styles.transRevTime}>{transDat.documents[0].name}</Text>);
            docSize = (<Text style={styles.transRevTime}>{(transDat.documents[0].size / 1024).toFixed(3)} kb</Text>);

        }

        if (transDat.hasOwnProperty('ediT')) {
            ediTName = transDat.ediT.name;
            ediTNum = transDat.ediT.value;
        }

        console.log((transDat.hasOwnProperty('properties')));

        transDat.hasOwnProperty('properties')
            ?

            list = Object.keys(transDat.properties).map((name, idx) => {
                console.log(name, 'name in for loop in review')
                return (
                    <View key={idx} style={styles.revPropField}>
                        <Text style={styles.transRevName}>{name}:</Text>
                        <Text style={styles.revPropVal}>{transDat.properties[name]}</Text>
                    </View>
                )
            }) :
            list = null;


        return (

            <View style={styles.container}>
                <Text style={styles.transReview}>Transaction Review</Text>

                <Image style={styles.assetLocationNoTopMargin} source={locationImage} />
                {/* {/* <Text style={styles.transRevName}>{transInfo.name}</Text> */}
                <Text style={styles.transRevName}>HercID: {transInfo.hercId}</Text>
                <Text style={styles.transRevTime}>{dTime}</Text>
                <Text style={styles.editLabel}>EDI-T-SET:</Text>
                <Text style={styles.transRevTime}>{ediTName}</Text>
                <Text style={styles.transRevTime}>{ediTNum}</Text>
                <Text style={styles.editLabel}>Images and Size</Text>
                {image}
                {imageSize}
                
                <Text style={styles.editLabel}>Document Name and Size</Text>
                
                {doc}
                {docSize}

                <View style={{ flex: 1 }}>
                    {list}
                </View>
                <TouchableHighlight onPress={() => this._sendTrans()}>
                    <Image source={submit} style={styles.assetLocationNoTopMargin} />
                </TouchableHighlight>
                <View style={styles.assetFee}>
                    <Image style={styles.assetFeeLabel} source={fee} />
                    <Text style={styles.teePrice}>{price}</Text>
                </View>
            </View>

        )
    }
}

const mapStateToProps = (state) => ({
    transInfo: state.AssetReducers.trans.header,
    transDat: state.AssetReducers.trans.data
})
const mapDispatchToProps = (dispatch) => ({
    sendTrans: (trans) => dispatch(sendTrans(trans))
})

export default connect(mapStateToProps, mapDispatchToProps)(TransRev);