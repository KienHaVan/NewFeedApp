import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ICON} from '../assets/icon';
import {scaleSizeUI} from '../utils/scaleSizeUI';
import {useNavigation, useRoute} from '@react-navigation/native';
import dayjs from 'dayjs';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSavedStatus} from '../redux/feedSlice';

const FeedDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    title,
    heroImage,
    description,
    createdAt,
    userProfile,
    minRead,
    saved,
    id,
  } = route.params.data;
  const [toggleSaved, setToggleSaved] = useState(saved);
  var now = dayjs(createdAt).format('DD-MM-YYYY');
  const handleSave = () => {
    setToggleSaved(!toggleSaved);
    dispatch(toggleSavedStatus(id));
  };
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={ICON.LEFT} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave}>
          {toggleSaved ? (
            <Image
              source={ICON.VECTORED}
              style={styles.savedIcon}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={ICON.VECTOR}
              style={styles.savedIcon}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* image */}
        <View style={styles.image}>
          <Image
            source={{
              uri: heroImage,
            }}
            style={styles.imageInside}
          />
        </View>
        {/* title */}
        <View>
          <Text style={styles.heading3} numberOfLines={2}>
            {title}
          </Text>
          <View style={styles.titleContent}>
            <Image
              source={{uri: userProfile.image}}
              style={styles.titleAvatar}
            />
            <Text style={styles.titleText}>{userProfile.name}</Text>
            <Text style={[styles.titleText, styles.titleTextMiddle]}>|</Text>
            <Text style={styles.titleText}>{now}</Text>
          </View>
        </View>
        {/* content */}
        <View style={styles.content}>
          <Text style={styles.text}>{description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default FeedDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    height: scaleSizeUI(230, true),
    marginBottom: 12,
  },
  imageInside: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  heading3: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 28,
    color: '#000',
    marginBottom: 8,
  },
  titleContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleAvatar: {
    width: 16,
    height: 16,
    marginRight: 8,
    borderRadius: 100,
  },
  titleText: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    color: '#bcbcbc',
  },
  titleTextMiddle: {
    paddingHorizontal: 4,
  },
  content: {
    marginTop: 16,
  },
  text: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color: '#000',
  },
  savedIcon: {
    width: 24,
    height: 24,
  },
});
