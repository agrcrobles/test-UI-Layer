import React, { Component } from 'react';
import { View, Platform, Text, TouchableHighlight, Image, TextInput } from 'react-native';
import BackButton from '../components/BackButton';
import { STATUS_BAR_HEIGHT } from '../constants';
import styles from '../assets/styles';
import { connect } from 'react-redux';
import { fetchWallet, fetchContract } from '../actions/EthActions';
import NewButton from 'react-native-button';
import RadioButtons from '../components/RadioButtons';

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

            contract: '0xcCeAE97b9EE2f89E62367bf95d970678a5c59958',
            wallet: '0xface4F2E421aeBDc384460a331C142c1D8bD8674',
            // search: this.state.wallet
            // address: wallet

        }

    }

    componentDidMount() {

        //     console.log(this.state.wallet, 'wallet')
        //     console.log(this.state.contract, 'contract')
    }
    // https://api-ropsten.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=YourApiKeyToken

    _onSearchWallet = (val) => {
        this.props.fetchWallet(val);
        // console.log(this.state, 'this.state');
    }

    _onSearchContract = (val) => {
        this.props.fetchContract(val);
        // console.log(this.state, 'this.state');
    }


    render() {
        let balance;

        //    let wallet = '0xcCeAE97b9EE2f89E62367bf95d970678a5c59958';
        //    let contract = '0xface4F2E421aeBDc384460a331C142c1D8bD8674',
        // let data = this.props.data;
        balance = this.props.data.result || 'nothing';
        // this.props.isFetched ? balance = this.props.data.balance : "nothing";
        // this.props.fetchError ? console.log('errorr') : console.log("no error");
        console.log(this.props.data, 'data')

        return (

            <View style={styles.container}>
                <Text style={{ color: 'white', height: 30, fontSize: 20 }}>
                    Eth Address: Token/Contract/Transaction
                 </Text>
                <TextInput
                    style={{ color: 'white', height: 36, width: 374, fontSize: 16, textAlign: 'center' }}
                    value={this.state.address}
                />

                <NewButton style={{ margin: 10, textAlign: 'center', height: 50, width: 100, backgroundColor: 'blue' }}
                    onPress={() => this._onSearchWallet(this.state.wallet)}
                >
                    Search Wallet</NewButton>

                <NewButton style={{ margin: 10, textAlign: 'center', height: 50, width: 100, backgroundColor: 'blue' }}
                    onPress={() => this._onSearchContract(this.state.contract)}
                >
                    Search Contract</NewButton>
                <View style={{
                    height: 100, width: '80%',
                    backgroundColor: 'blue',
                    margin: 10,

                }}>
                    <Text style={{ color: 'white', height: 30, fontSize: 20 }}>Balance:
                    {balance}
                    </Text>
                </View>

            </View>

        );
    }
}

const mapStateToProps = (state) => ({
    data: state.EthReducers.data,
    isFetching: state.EthReducers.isFetching,
    isFetched: state.EthReducers.isFetched,
    fetchError: state.EthReducers.fetchError
})

const mapDispatchToProps = (dispatch) => ({
    fetchWallet: (walAdr) => dispatch(fetchWallet(walAdr)),
    fetchContract: (conAdr) => dispatch(fetchContract(conAdr))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlockScanner);

// <WebView
//     source={{ uri: 'https://ethstats.net/' }}
//     style={{ flex: 1 }}
// />