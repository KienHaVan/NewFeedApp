import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';
import FeedDetailScreen from '../screens/FeedDetailScreen';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

const FeedStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FeedStack" component={MainTabNavigator} />
      <Stack.Screen name="FeedDetail" component={FeedDetailScreen} />
    </Stack.Navigator>
  );
};

export default FeedStackNavigator;

const styles = StyleSheet.create({});
