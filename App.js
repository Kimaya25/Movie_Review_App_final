
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpScreen from './Screens/SignUpScreen';
import {AppTabNavigator} from './Components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'


export default class App extends React.Component {
  render(){
  return (
   
      <AppContainer/>
    
  );
  }
}
const switchNavigator = createSwitchNavigator({
  SignUpScreen : SignUpScreen,
  AppTabNavigator : AppTabNavigator
})
const AppContainer = createAppContainer(switchNavigator)
