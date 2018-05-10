import React, { Component } from 'react';
import { View, Platform, Text, TouchableHighlight, Image, TextInput } from 'react-native';
import BackButton from '../components/BackButton';
import { STATUS_BAR_HEIGHT } from '../constants';
import styles from '../assets/styles';
import { connect } from 'react-redux';
import { fetchBlock, fetchContract } from '../actions/EthActions';
import Block from '../components/Block';
import NewButton from 'react-native-button';
import JSONTree from 'react-native-json-tree';
import web3 from '../constants/web3';

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
            block: null,
            isFetching: true,
            // contract: '0xcCeAE97b9EE2f89E62367bf95d970678a5c59958',
            // wallet: '0xface4F2E421aeBDc384460a331C142c1D8bD8674',
            // search: this.state.wallet
            // address: wallet

        }

    }

    componentDidMount() {

        // const { web3 } = this.props.navigation.state.params;

        web3.eth.getBlock('latest', (err, block) => {
            this.setState({
                block,
                isFetching: false,
            });
        });
    }
    // https://api-ropsten.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=YourApiKeyToken

    _onSearchWallet = (val) => {
        this.props.fetchBlock();
        // console.log(this.state, 'this.state');
    }

    _onSearchContract = (val) => {
        this.props.fetchContract(val);
        // console.log(this.state, 'this.state');
    }


    render() {

        return (

            <View style={styles.container}>
                <Text style={{ color: 'white', height: 30, fontSize: 20 }}>
                    Eth Address: Token/Contract/Transaction
                 </Text>
                <TextInput
                    style={{ color: 'white', height: 36, width: 374, fontSize: 16, textAlign: 'center' }}
                    value={this.state.address}
                />
                <View style={{ width: '90%', height: 60, justifyContent: 'space-around', flexDirection: 'row' }}>
                    <NewButton style={{ margin: 10, textAlign: 'center', height: 50, width: 100, backgroundColor: 'blue' }}
                        onPress={() => this._onSearchWallet(this.state.wallet)}
                    >
                        Search Wallet</NewButton>

                    <NewButton style={{ margin: 10, textAlign: 'center', height: 50, width: 100, backgroundColor: 'blue' }}
                        onPress={() => this._onSearchContract(this.state.contract)}
                    >
                        Search Contract</NewButton>
                    }}>
                </View>

                {!this.state.isFetching && <Block block={this.state.block} />}
            </View>

        );
    }
}

const mapStateToProps = (state) => ({
    // data: state.EthReducers.data,
    isFetching: state.EthReducers.isFetching,
    isFetched: state.EthReducers.isFetched,
    fetchError: state.EthReducers.fetchError
})

const mapDispatchToProps = (dispatch) => ({
    fetchBlock: () => dispatch(fetchBlock()),
    fetchContract: (conAdr) => dispatch(fetchContract(conAdr))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlockScanner);

// <WebView
//     source={{ uri: 'https://ethstats.net/' }}
//     style={{ flex: 1 }}
// />