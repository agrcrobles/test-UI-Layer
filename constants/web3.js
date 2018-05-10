import 'babel-preset-react-native-web3/globals';
import Web3 from 'web3';
import truffleConfig from '../truffle';
const network = truffleConfig.networks.ropsten;

// const TESTRPC_ADDRESS = `${network.protocol}://${network.host}:${network.port}`;

const TESTRPC_ADDRESS = `${network.protocol}://${network.host}/${network.key}`;
var crypto = require('crypto');
const web3Provider = new Web3.providers.HttpProvider(TESTRPC_ADDRESS);
    
 export default web3 = new Web3(web3Provider);