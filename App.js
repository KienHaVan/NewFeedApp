import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import FeedStackNavigator from './src/navigation/FeedStackNavigator';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <FeedStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
