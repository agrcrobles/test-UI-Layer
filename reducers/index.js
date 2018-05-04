import { combineReducers } from 'redux';
import Assets from './Assets';
import EthReducers from './EthReducers';
import AssetReducers from './AssetReducers';
// import dataReducer from './dataReducer';
import EDIT from './Edi-T-Sets'
;
const rootReducer = combineReducers({
    AssetReducers,
    Assets,
    EthReducers,
  EDIT
})

export default rootReducer