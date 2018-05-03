import React, { Component } from 'react';
import {View, TouchableHighlight, Text, Platform, Image, WebView } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import { StackNavigator } from 'react-navigation';
import BackButton from "../components/BackButton";


// TODO:
// get the selected asset logo in header, proabably have to pull from the state.assets array using name or index

export default class AnthemWeb extends Component {
  static navigationOptions = ({ navigation }) => {
    // const { params } = navigation.state;

    return {

      // headerTitle:
      //   <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
      //     <TouchableHighlight onPress={() => navigation.navigate('MenuOptions')}>
      //       <Image style={{
      //         height: 80,
      //         width: 80,
      //         // alignSelf: 'center',
      //         borderRadius: 120,
      //         resizeMode: 'contain'
      //       }}
      //         source={{ uri: params.logo }} />
      //     </TouchableHighlight>
      //     <Text style={styles.assetHeaderLabel}>{params.name}</Text>
      //   </View>,

      // headerStyle: {
      //   height: Platform.OS === 'android' ? 100 + STATUS_BAR_HEIGHT : 100,
      //   backgroundColor: '#021227',

      // },
      // headerTitleStyle: {
      //   marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
      //   textAlign: 'center',
      //   alignSelf: 'center',
      //   // textAlignVertical: 'center',
      //   backgroundColor: '#021227',

      // },
      headerLeft: <BackButton navigation={navigation} />,
      // headerRight: <View></View>
    }
  }

  render() {
    return (
      <WebView
        source={{ uri: 'https://www.anthemvault.com/' }}
        style={{ marginTop: 20, flex: 1 }}
      />
    );
  }
}