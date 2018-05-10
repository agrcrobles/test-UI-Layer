import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE
} from './types'

import key from '../constants/ethKey'
import web3 from '../constants/web3';
// const info = await fetch('https://api-ropsten.etherscan.io/api?module=account&action=balance&address=' + add + '&tag=latest&apikey=' + key)

export function fetchBlock() {

    console.log('ethfetchBlock')

    return async dispatch => {
        
        function onSuccess(success) {
            success.json().then((result) => {
                console.log(result)
                dispatch(gotDataSuccess(result))
            })
        }

        function onError(error) {
            dispatch(gotDataFailure(error));
        }

        try {
            await web3.eth.getBlock('latest', (onError(error), onSuccess(result)))

        } catch (error) {
            return onError(error);
        }

    }
}

export function fetchContract(address) {
    let add = address;
    console.log('ethfetchContract')
    return async dispatch => {
        function onSuccess(success) {
            success.json().then((result) => {
                console.log(result)
                dispatch(gotDataSuccess(result))
            })

        }

        function onError(error) {
            dispatch(gotDataFailure(error));
        }

        try {
            const info = await fetch('https://api-ropsten.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=' + key)
            return onSuccess(info);
        } catch (error) {
            return onError(error);
        }

    }
}
// https://api-ropsten.etherscan.io/api?module=contract&action=getabi&address=' + add + '&tag=latest&apikey=' + key

// https://api-ropsten.etherscan.io/api?module=contract&action=getabi&address=0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413&apikey=YourApiKeyToken
// export function getData() {
//     fetch(
//         'https://api-ropsten.etherscan.io/api?module=account&action=balance&address=' + add + '&tag=latest&apikey=' + key
//     ).then((response) => {
//     () => {
//         let responseJson = response.json();
//         console.log(responseJson, 'response in ethaction')
//         return responseJson;
//     }}
//         , (error) => {
//             console.log(error, 'woops')
//         }
//     )
// }


export function gotDataSuccess(data) {
    console.log(data, 'success data')
    return {
        type: FETCHING_DATA_SUCCESS,
        isFetched: true,
        data
    }
}

export function gotDataFailure(error) {
    console.log(error)
    return {
        type: FETCHING_DATA_FAILURE,
        fetchFailure: true,
        error
    }
}
