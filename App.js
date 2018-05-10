import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import MainNavigation from './navigation/MainNavigation';

import store from './store';

// // The Weird shit

// import 'babel-preset-react-native-web3/globals';
// import Web3 from 'web3';
// import truffleConfig from './truffle';
// const network = truffleConfig.networks.ropsten;

// // const TESTRPC_ADDRESS = `${network.protocol}://${network.host}:${network.port}`;

// const TESTRPC_ADDRESS = `${network.protocol}://${network.host}/${network.key}`;
// var crypto = require('crypto')
// // var abc = crypto.createHash('sha1').update('abc').digest('hex')


export default class App extends Component {
  constructor(props) {
		super(props);
		// Initialize web3 and set the provider to the testRPC.
		// set the provider you want from Web3.providers
		// const web3Provider = new Web3.providers.HttpProvider(TESTRPC_ADDRESS);
		// this.web3 = new Web3(web3Provider);
	}
  render() {
    // let web3 = this.web3;
      // console.log(this.web3, '???')
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}
