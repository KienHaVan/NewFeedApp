import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import feedApi from '../api/fetchApiFeed';
import {addExploreList} from '../redux/feedSlice';
import Card from '../components/Card';
import {scaleSizeUI} from '../utils/scaleSizeUI';

const ExploreScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const ExploreList = useSelector(state => state.feed.ExploreList);
  useEffect(() => {
    feedApi
      .getExploreList()
      .then(res => res.data)
      .then(feeds => {
        feeds.map(item => {
          return (item.saved = false);
        });
        dispatch(addExploreList(feeds));
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
          data={ExploreList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ExploreScreen;

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
