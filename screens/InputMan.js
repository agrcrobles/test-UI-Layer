import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import Next from "../components/NextBtn";
import styles from "../assets/styles";
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";
import { StackNavigator, } from 'react-navigation';
import { connect } from "react-redux";
import { addProps } from "../actions/AssetActions";
import review from "../assets/review.png";
import BackButton from '../components/BackButton';

class InputMan extends Component {
    
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
          headerLeft: <BackButton navigation={navigation} />,
          headerRight: <View></View>
        }
      }
    constructor(props) {
        super(props);
        this.state = {};
    }

    _onReview = () => {
        const { navigate } = this.props.navigation;
        let attributes = this.state;
        console.log(this.state, "stateInputesfilled?");
        this.props.addProps(attributes);
        console.log("justaddedPRoperties");
        navigate('Confirm',{logo: this.props.logo, name: this.props.name});
    }
    render() {

        let locationImage = this.props.location === 'originator' ? originator : recipient;
        let logo = this.props.logo;
        // console.log(this.props.coreProps, 'coreProps');
        
        let list = Object.keys(this.props.coreProps).map((propName, idx) => {
            let name = propName;
            return (

                <View key={idx} style={styles.field}>
                    <Text style={styles.label}>{name}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.setState({ [propName]: text })}
                        placeholder={name}
                    />
                </View>

            )

        })

        return (
            <View style={styles.container}>
                  <ScrollView contentContainerStyle={styles.scrollView}>

               
                <Image style={styles.assetLocationNoTopMargin} source={locationImage} />


                    {list}

                <TouchableHighlight onPress={() => this._onReview()} >
                    <Image source={review} style={styles.button} />
                </TouchableHighlight>

                </ScrollView>
            </View>)
    }
}

const mapStateToProps = (state) => ({
    name: state.AssetReducers.trans.header.name,
    logo: state.AssetReducers.selectedAsset.Logo,
    location: state.AssetReducers.trans.data.tXLocation,
    coreProps: state.AssetReducers.selectedAsset.CoreProps,
    // properties: state.AssetReducers.selectedAsset.CoreProperties
});
const mapDispatchToProps = (dispatch) => ({
    addProps: (attributes) =>
        dispatch(addProps(attributes),
        )
})
export default connect(mapStateToProps, mapDispatchToProps)(InputMan);