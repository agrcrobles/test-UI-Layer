import React, { Component } from 'react';
import { View, Platform, Text, TouchableHighlight, Image, TextInput, Button, ScrollView } from 'react-native';
import BackButton from '../components/BackButton';
import { STATUS_BAR_HEIGHT } from '../constants';
import styles from '../assets/styles';
import { connect } from 'react-redux';
import { fetchBlock, fetchContract } from '../actions/EthActions';
// import Block from '../components/Block';
// import NewButton from 'react-native-button';
import JSONTree from 'react-native-json-tree';
import Web3 from '../constants/web3';
import abi from '../constants/abi';

class BlockScanner extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {

            headerTitle:
                <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableHighlight style={{ flex: 1, height: 80, width: 80, borderRadius: 40 }} onPress={() => navigation.navigate('MenuOptions')}>
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
                </View>
            ,

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
            block: {'still': 'loading'},
            isFetching: true,
            // contract: '0xcCeAE97b9EE2f89E62367bf95d970678a5c59958',
            // wallet: '0xface4F2E421aeBDc384460a331C142c1D8bD8674',
            // search: this.state.wallet
            // address: wallet

        }

    }

    componentDidMount() {
        console.log(Web3, 'webs');
        console.log(Web3.eth.contract(abi))
        Web3.eth.getBlock('latest', (err, block) => {
            this.setState({
                block,
                isLoading: false,
            });
            // https://api-ropsten.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=YourApiKeyToken
        })
    }
    // _getBlock = (val) => {
    //     this.props.fetchBlock();
    //     web3.eth.getBlock('latest', (err, block) => {
    // 		this.setState({
    // 			block,
    // 			isLoading: false,
    // 		});
    // 	});
    // }

    // _onSearchContract = (val) => {
    //     this.props.fetchContract(val);
    //     // console.log(this.state, 'this.state');
    // }


    render() {
        let gasLimit, gasUsed, miner;
        let block = this.state.block;
        this.state.isLoading

        if (block) {
            gasLimit = block.gasLimit;
            gasUsed = block.gasUsed;
            miner = block.miner;
        }

        console.log(this.state.block);
        return (

            <View style={styles.container}>
                <Text style={{ color: 'white', height: 30, fontSize: 20 }}>
                    Eth Address: Token/Contract/Transaction
                 </Text>
            
           {!this.state.isLoading && <ScrollView><JSONTree data={block} theme={theme} invertTheme={false} /></ScrollView>}
              
            </View>
            );
        }
    
    }
    
const theme = {
                    scheme: 'monokai',
                author: 'wimer hazenberg (http://www.monokai.nl)',
                base00: '#272822',
                base01: '#383830',
                base02: '#49483e',
                base03: '#75715e',
                base04: '#a59f85',
                base05: '#f8f8f2',
                base06: '#f5f4f1',
                base07: '#f9f8f5',
                base08: '#f92672',
                base09: '#fd971f',
                base0A: '#f4bf75',
                base0B: '#a6e22e',
                base0C: '#a1efe4',
                base0D: '#66d9ef',
                base0E: '#ae81ff',
                base0F: '#cc6633',
            };
            
const mapStateToProps = (state) => ({
                    // data: state.EthReducers.data,
                    isFetching: state.EthReducers.isFetching,
                isFetched: state.EthReducers.isFetched,
                fetchError: state.EthReducers.fetchError
            })
            
const mapDispatchToProps = (dispatch) => ({
                    fetchBlock: () => dispatch(fetchBlock()),
                fetchContract: (abi) => dispatch(fetchContract(abi))
            })
            
            export default connect(mapStateToProps, mapDispatchToProps)(BlockScanner);
            
// <WebView
//     source={{ uri: 'https://ethstats.net/' }}
//     style={{ flex: 1 }}
// />