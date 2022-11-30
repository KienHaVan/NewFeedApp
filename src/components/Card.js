import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ICON} from '../assets/icon';
import {scaleSizeUI} from '../utils/scaleSizeUI';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';

const Card = ({data, navigation}) => {
  const {title, heroImage, description, createdAt, userProfile, minRead} = data;
  var now = dayjs(createdAt).format('DD-MM-YYYY');

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('FeedDetail', {data})}>
      {/* left */}
      <View style={styles.left}>
        {/* heading */}
        <View style={styles.leftHeading}>
          <Image
            source={{uri: userProfile.image}}
            style={styles.leftHeadingIcon}></Image>
          <Text style={styles.text1}>{userProfile.name}</Text>
        </View>
        {/* content */}
        <View style={styles.leftContent}>
          <Text style={styles.heading2} numberOfLines={2}>
            {title}
          </Text>
        </View>
        {/* bottom */}
        <View style={styles.leftBottom}>
          <Text style={styles.text2}>{now}</Text>
          <Text style={[styles.text2, styles.leftBottomMiddle]}>|</Text>
          <Text style={styles.text2}>{minRead} min read</Text>
        </View>
      </View>
      <View style={styles.center}></View>
      {/* right */}
      <View style={styles.right}>
        <Image
          source={{uri: heroImage}}
          style={styles.rightImg}
          resizeMode="cover"></Image>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    marginTop: 16,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  left: {
    flex: 1,
  },
  center: {
    width: scaleSizeUI(25),
    flexShrink: 0,
  },
  right: {
    width: scaleSizeUI(86),
    flexShrink: 0,
  },
  leftHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  leftHeadingIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    borderRadius: 100,
  },
  text1: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    color: '#000',
  },
  heading2: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color: '#000',
  },
  leftContent: {
    marginBottom: 21,
  },
  leftBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text2: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    color: '#bcbcbc',
  },
  leftBottomMiddle: {
    paddingHorizontal: 4,
  },
  rightImg: {
    width: scaleSizeUI(86),
    height: scaleSizeUI(86),
    borderRadius: 10,
  },
});
