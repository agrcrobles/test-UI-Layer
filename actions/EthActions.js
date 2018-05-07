import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE
} from './types'

import key from '../constants/ethKey'

export function fetchData(address) {
        let add = address;
    console.log('ethfetch')
    return async dispatch => {
        function onSuccess(success) {
            console.log(success.json().then(data => {data}), 'ethaction async fetch success')
           let jsonData = success.json().then( data => data)  
           dispatch(gotDataSuccess(jsonData))
           return jsonData;
            }
        }
        
        function onError(error) {
            dispatch(gotDataFailure(error));
            return error;
        }

        try {
            const info = await fetch('https://api-ropsten.etherscan.io/api?module=account&action=balance&address=' + add + '&tag=latest&apikey=' + key)
            return onSuccess(info);
        } catch (error) {
            return onError(error);
        }
    }

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
    return {
        type: FETCHING_DATA_SUCCESS,
        isFetched: true,
        data: data._bodyText
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