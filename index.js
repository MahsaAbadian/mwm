/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import {Text,AppRegistry} from 'react-native';
import {name as appName} from './app.json';

const App = () => ( 
    <Text>some text</Text>
);
AppRegistry.registerComponent(appName, () => App);
