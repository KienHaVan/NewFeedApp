import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scaleSizeUI} from '../utils/scaleSizeUI';
import Card from '../components/Card';
import feedApi from '../api/fetchApiFeed';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addFeedList} from '../redux/feedSlice';

const FeedScreen = () => {
  // const [feedList, setFeedList] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const feedList = useSelector(state => state.feed.feedList);
  useEffect(() => {
    feedApi
      .getFeedList()
      .then(res => res.data)
      .then(feeds => {
        feeds.map(item => {
          return (item.saved = false);
        });
        // setFeedList(feeds);
        dispatch(addFeedList(feeds));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderItem = ({item}) => <Card data={item} navigation={navigation} />;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading1}>Hello,</Text>
        <Text style={styles.heading1}>Ha Van Kien</Text>
      </View>
      <View style={styles.feedList}>
        <FlatList
          data={feedList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: scaleSizeUI(160, true),
    paddingHorizontal: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
    elevation: 10,
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
    paddingBottom: scaleSizeUI(160, true),
  },
});
