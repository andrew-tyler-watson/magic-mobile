/**********************************************************
 * 
 * Absolute root for running application on IOS. 
 * 
 *********************************************************/

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './appContainer';


export default class magicMobile extends Component {
  render() {
    return (
      <App os="ios"/>
    );
  }
}

AppRegistry.registerComponent('magicMobile', () => magicMobile);
