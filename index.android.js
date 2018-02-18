/*************************************************************
 * 
 * Absolute root for running application on Android OS. 
 * 
 *************************************************************/

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './src/components/containers/appContainer'; 


export default class magicMobile extends Component {
  render() {
    return (
      <App os="android"/>
    )
  }
}

AppRegistry.registerComponent('magicMobile', () => magicMobile);
