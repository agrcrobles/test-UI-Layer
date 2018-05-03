import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert, ScrollView } from 'react-native';
import styles from '../assets/styles';
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";

class SwipeCard extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('SwipeCardHere')
    }
   

    render() {
        let data = this.props.data;
        console.log(data, 'card Data');

        let locationImage = this.props.data.tXLocation === 'recipient' ? recipient : originator;
        let list;
        let ediTName, ediTNum, doc, docSize = null;
        let image = data.images[0] || null;

        let dTime = transDat.dTime;
        console.log(dTime, 'dtime??');
        
        if(transDat.documents[0]){
            doc = transDat.documents[0].name;
            docSize = transDat.documents[0].size;
        
        }

        if(transDat.hasOwnProperty('ediT')){
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
                <Image style={styles.assetLocationNoTopMargin} source={locationImage} />
                <Text style={styles.transRevTime}>{dTime}</Text>
               
                <Text style={styles.editLabel}>EDI-T-SET:</Text>
                <Text style={styles.transRevTime}>{ediTName}</Text>
                <Text style={styles.transRevTime}>{ediTNum}</Text>
               
                <Image style={styles.thumb} source={{ uri: image }} />
                <Text style={styles.editLabel}>Document Name and Size</Text>
                <Text style={styles.transRevTime}>{doc}</Text>
                <Text style={styles.transRevTime}>{docSize} kb</Text>
                
                <View style={{ flex: 1 }}>
                    {list}
                </View>
                <TouchableHighlight onPress={() => this._sendTrans()}>
                    <Image source={submit} style={styles.assetLocationNoTopMargin} />
                </TouchableHighlight>
            </View>

        )
    }
}