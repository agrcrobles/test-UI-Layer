import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE
} from '../actions/types';

const ETH_STATE =
    {
        isFetching: false,
        isFetched: false,
        fetchError: false,
        data: []
    }

const EthReducers = (ethState = ETH_STATE, action) => {
console.log("ETh reducer")
    switch (action.type) {
        case FETCHING_DATA_SUCCESS:
        console.log('eth reducer');
            let ethData = action.data
            return {
                ...ethState,
                
                    isFetched: true,
                    data: ethData
                
            }
        case FETCHING_DATA_FAILURE:
                return {
                    ...ethState,
                    fetchError: true,
                    error: action.error
                }

                default:
                return ethState

            }
    }

export default EthReducers;