//this potentially will change to an array of logos to dynamically generate the list
import reducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import * as firebase from 'firebase';
//REDUX devtools integration

// composeWithDevTools()
// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
// other store enhancers if any 
// ));
const store = createStore(
  reducers,

  composeWithDevTools(applyMiddleware(thunkMiddleware)),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


);

export default store;



