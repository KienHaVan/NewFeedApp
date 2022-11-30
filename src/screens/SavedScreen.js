import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../components/Card';
import {scaleSizeUI} from '../utils/scaleSizeUI';
import {useNavigation} from '@react-navigation/native';

const SavedScreen = () => {
  const list = useSelector(state => state.feed.feedList);
  const results = list.filter(item => item.saved === true);
  const navigation = useNavigation();
  const renderItem = ({item}) => <Card data={item} navigation={navigation} />;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading1}>Hello,</Text>
        <Text style={styles.heading1}>Ha Van Kien</Text>
      </View>
      <View style={styles.feedList}>
        <FlatList
          data={results}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: scaleSizeUI(160, true),
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  heading1: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    color: '#000',
  },
  feedList: {
    paddingHorizontal: 16,
  },
});
