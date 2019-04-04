/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import {View,AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import BackGround from './src/components/BackGround';

const App = () =>  (
    <BackGround/>
) ;


AppRegistry.registerComponent(appName, () => App);
