import React, { Component } from 'react';
import { ImageBackground, Text, View, Image, Platform } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Button } from 'native-base';
import ResultsFound from './src/ResultsFound';
import ResultsNotFound from './src/ResultsNotFound';
//import Verify from './src/Verify';
import MoreInformation from './src/MoreInformation';
import Welcome from './src/Welcome';
import ScanQRCode from './src/ScanQRCode';
import Scan from './src/Scan';
import './shim'

const RootPage = createStackNavigator (
  {
  ScanQRCode : ScanQRCode,
  Scan : Scan,
  ResultsFound : ResultsFound,
  ResultsNotFound : ResultsNotFound
  }
);

const AppContainer = createAppContainer(RootPage);

//var img2 = require('./assets/found1.png');
export default class App extends Component {
  render() {
    return <AppContainer style={styles.container4}/>;
  }
}

const styles = {
  container4: {
    flex: 1,
    marginTop: Platform.OS ==="android" ? 24 : 0 
  }
}

