import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE
} from './types'

import key from '../constants/ethKey'

export function fetchData() {
    console.log('ethfetch')
    return async dispatch => {
        try {
            const data = await getData().then(
                console.log(data),
                dispatch(gotDataSuccess(data))
            )
        }
        catch (err) {
            dispatch(gotDataFailure(err))
        }
    }
}

export function getData() {
    let add = '0xface4F2E421aeBDc384460a331C142c1D8bD8674'
    fetch(
        'https://api-ropsten.etherscan.io/api?module=account&action=balance&address=' + add + '&tag=latest&apikey=' + key
    ).then((response) => {
    () => {
        let responseJson = response.json();
        console.log(responseJson, 'response in ethaction')
        return responseJson;
    }}
        , (error) => {
            console.log(error, 'woops')
        }
    )
}


export function gotDataSuccess(data) {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export function gotDataFailure(error) {
    console.log(error)
    return {
        type: FETCHING_DATA_FAILURE,
        error
    }
}