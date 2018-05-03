import {

    ADD_ASSET,
    LIST_ASSETS,
    GET_TRANS,
    GOT_LIST_ASSETS,
    SELECT_ASSET,
    START_TRANS,
    SEND_TRANS,
    ADD_PHOTO,
    ADD_DOC,
    ADD_PROPS,
    INC_HERC_ID,
    GET_HERC_ID,
    GOT_HERC_ID,
    CONFIRM_ASSET,
    SET_SET,
    DELETE_ASSET,
    GOT_ASSET_TRANS,
    // FETCHING_DATA,
    // FETCHING_DATA_SUCCESS,
    // FETCHING_DATA_FAILURE

} from './types';

import firebase from '../constants/Firebase';
const rootRef = firebase.database().ref();
import getAssets from '../reducers/Assets'

// export function getData() {
//     return {
//       type: FETCHING_DATA
//     }
//   }
  
//   export function getDataSuccess(data) {
//     return {
//       type: FETCHING_DATA_SUCCESS,
//       data,
//     }
//   }
  
//   export function getDataFailure() {
//     return {
//       type: FETCHING_DATA_FAILURE
//     }
//   }
  
  

export function incHercId(hercid) {
    console.log(hercid, 'hercid');
    let hercIdStr = (Number(hercid) + 1).toString()
    console.log(hercIdStr, 'transformed to string')
    let hercId = "00" + hercIdStr;  //adding leading 0's for fun
    console.log(hercId, 'after refact')
    return {
        type: INC_HERC_ID,
        hercId

    }
}


export function getHercId() {
    return (dispatch) => {
        dispatch({

            type: GET_HERC_ID

        })
        let hercId;
        rootRef.child('hercID').once('value').
            then((snapshot) => {
                console.log(snapshot.val(), 'snaps')
                hercId = snapshot.toJSON();
            }).then(() => dispatch(gotHercId(hercId)));


    }
}
export function gotHercId(hercId) {
    let id = hercId;
    console.log(id, 'gotHercId');
    return {
        type: GOT_HERC_ID,
        hercId: id

    }

}

export function fetchAssets(){
    return async dispatch => {
     try {
         const assets = await getAssets();
         dispatch(gotListAssets(assets))
     }
      
        
        catch(err) { console.log('err:', err)}
    }
  }

// export function listAssets() {
//     return (dispatch) => {
//         dispatch({
//             type: "LIST_ASSETS"
//         });
        // let assets = [];
        // rootRef.child('assets').once('value').
        //     then((snapshot) => {
        //         snapshot.forEach((obj) => {
        //             console.log('objects in listassets');
        //             assets.push({
        //                 name: obj.toJSON().Name,
        //                 key: obj.key,
        //                 logo: obj.toJSON().Logo,
        //                 // url: obj.toJSON().url
        //             });

        //         })

        //     }).then(() => dispatch(gotListAssets(assets)))

//     }
// }
export function gotListAssets(assetList) {
    let assets = assetList;
    console.log('got the list');
    return {
        type: GOT_LIST_ASSETS,
        assets

    }
}

export function selectAsset(asset) {
    let assetRef = rootRef.child('assets/' + asset.key);
    let selectedAsset = {};
    assetRef.on('value', (snapshot) => {
        selectedAsset = snapshot.val();

    });
    selectedAsset = Object.assign({}, selectedAsset, {
        ...selectedAsset,
        key: asset.key
    })
    console.log( 'selecteasset in action')
    return (

        {
            type: SELECT_ASSET,
            selectedAsset
        }
    )
}

export function addAsset(newAsset) {
    return {
        type: ADD_ASSET,
        newAsset

    }
}

export function confirmAsset(confirmedAsset) {
    let newAsset = confirmedAsset;
    console.log('confirming asset');
    return {
        type: CONFIRM_ASSET,
        newAsset

    }
}

export function deleteAsset(key) {
    let delKey = key;
    console.log(delKey, "deletekey");
    return {
        type: DELETE_ASSET,
        delKey

    }
}


export function startTrans(trans) {
    let newtrans = trans;

    return (
        {
            type: START_TRANS,
            data: newtrans
        }
    )
}

export function sendTrans(trans) {
    console.log("inside set Location action")
    return (
        {
            type: SEND_TRANS,
            data: trans
        }
    )
}

export function addProps(newProps) {
    return {
        type: ADD_PROPS,
        data: newProps
    }
}

export function addPhoto(imgObj) {
    return ({
        type: ADD_PHOTO,
        data: imgObj.image,
        size: imgObj.size
    }
    )
}

export function addDoc(doc) {
    let document = doc;
    return {
        type: ADD_DOC,
        document
    }
}

export function setSet(item) {
    return {
        type: SET_SET,
        item
    }
}

export function getTrans(assetKey) {
    return (dispatch) => {
        dispatch({
            type: "GET_TRANS"
        });

        console.log("getTrans action")
        let assetTrans = [];
        rootRef.child('assets/' + assetKey + '/transactions').once('value').
           then( (snapshot) => {
                snapshot.forEach((trans) => {
                    console.log('object in getTrans!');
                    assetTrans.push({
                        data: trans.toJSON().data
                    });

                })

            }).then(() => dispatch(gotAssetTrans(assetTrans)))
        
        }

    }


export function gotAssetTrans(assetTrans) {
    let transactions = assetTrans;
    console.log('got the transactions list');
    return {
        type: GOT_ASSET_TRANS,
        transactions

    }
}


