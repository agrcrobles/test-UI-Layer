import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, Image, Picker, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { StackNavigator } from 'react-navigation';
import { STATUS_BAR_HEIGHT } from '../constants';
import styles from '../assets/styles';
import edits from '../reducers/Edi-T-Sets';
import {setSet } from '../actions/AssetActions';
import BackButton from "../components/BackButton";


 class EditSets extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {

            headerTitle:
                <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{
                        height: 80,
                        width: 80,
                        alignSelf: 'center',
                        borderRadius: 40,
                        resizeMode: 'contain'
                    }}
                        source={{ uri: params.logo }} />
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
    constructor(props){
        super(props);
        state = {};
    }
    _setEdit = (item) => {
        
        console.log(item);
        this.props.setSet(item);
      
        this.props.navigation.navigate('Splash3',{logo: this.props.logo, name: this.props.name});

    }


    render() {
        // const { params } = navigation.state;
        
        // let arrayOfObjects = edits.map(x => {
        //     return ({
        //         value: x[0],
        //         name: x[1]
        //     });
        // });
console.log(edits)
        let arrayOfSets = edits.map((item, idx) => {
            return (
                <TouchableHighlight style={styles.editTouch} key={idx} onPress={() => this._setEdit(item)}>
                    <View style={styles.editField}>
                        <Text style={styles.editName}>{item.name.trim()}</Text>
                        

                    </View>
                </TouchableHighlight>
            )
        });
        return (
            <View style={styles.container}>

            <ScrollView contentContainerStyle={[ styles.scrollView,{ backgroundColor: '#021227'}]}>
                {arrayOfSets}
            </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    name: state.AssetReducers.selectedAsset.Name,
    logo: state.AssetReducers.selectedAsset.Logo
});

const mapDispatchToProps = (dispatch) => ({
    setSet: (item) => dispatch(setSet(item))
    
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSets);