import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {ICON} from '../assets/icon';
import Color from '../constants/Color';
import ExploreScreen from '../screens/ExploreScreen';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SavedScreen from '../screens/SavedScreen';
import {scaleSizeUI} from '../utils/scaleSizeUI';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconSource;
          if (route.name === 'Feed') {
            iconSource = ICON.FEED;
          } else if (route.name === 'Explore') {
            iconSource = ICON.EXPLORE;
          } else if (route.name === 'Saved') {
            iconSource = ICON.SAVED;
          } else if (route.name === 'Profile') {
            iconSource = ICON.PROFILE;
          }
          return (
            <Image
              source={iconSource}
              tintColor={color}
              style={styles.bottom}
            />
          );
        },
        tabBarActiveTintColor: Color.primary,
        tabBarInactiveTintColor: '#000',
        headerShown: false,
        tabBarStyle: {height: scaleSizeUI(60, true), paddingBottom: 10},
      })}
      initialRouteName={'Feed'}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({});
