import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import MainNavigation from './navigation/MainNavigation';


import store from './store';



export default class App extends Component {
  render() {
      
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}
