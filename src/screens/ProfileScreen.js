import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ICON} from '../assets/icon';
import Color from '../constants/Color';
import feedApi from '../api/fetchApiFeed';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ProfileScreen = () => {
  const [avatar, setAvatar] = useState(1);
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    dob: '',
    image: null,
  });
  const handleSendData = () => {
    feedApi.postListProfile(profile);
    setProfile({
      name: '',
      bio: '',
      dob: '',
      image: null,
    });
  };
  const handleChoosePhoto = () => {
    launchImageLibrary({}, res => {
      if (res?.assets[0]?.uri) {
        setProfile({...profile, image: res?.assets[0]?.uri});
      }
    });
  };
  return (
    <View style={styles.container}>
      {/* heading */}
      <View style={styles.heading}>
        <Image
          source={{
            uri: profile?.image || 'https://picsum.photos/200',
          }}
          style={styles.headingImage}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.headingCamera}
          onPress={handleChoosePhoto}>
          <Image source={ICON.CAMERA} />
        </TouchableOpacity>
      </View>
      {/* content */}
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <View style={styles.formHeading}>
            <Text style={styles.heading1}>Name</Text>
            <Text style={styles.heading2}>Add</Text>
          </View>
          <TextInput
            placeholder="Input your name..."
            style={styles.formInput}
            placeholderTextColor={'#848A90'}
            onChangeText={newText => setProfile({...profile, name: newText})}
            value={profile.name}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formHeading}>
            <Text style={styles.heading1}>Bio</Text>
            <Text style={styles.heading2}>Add</Text>
          </View>
          <TextInput
            placeholder="Describe yourself..."
            style={styles.formInput}
            placeholderTextColor={'#848A90'}
            onChangeText={newText => setProfile({...profile, bio: newText})}
            value={profile.bio}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formHeading}>
            <Text style={styles.heading1}>Date of birth</Text>
            <Text style={styles.heading2}>Add</Text>
          </View>
          <TextInput
            placeholder="Change your date..."
            style={styles.formInput}
            placeholderTextColor={'#848A90'}
            onChangeText={newText => setProfile({...profile, dob: newText})}
            value={profile.dob}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSendData}>
          <Text style={styles.buttonText}>SEND THE DATA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    height: 300,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headingImage: {
    width: 140,
    height: 140,
    borderRadius: 1000,
  },
  headingCamera: {
    position: 'absolute',
    // padding: 30,
  },
  heading1: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    color: '#000',
  },
  heading2: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    color: Color.primary,
  },
  content: {
    paddingHorizontal: 20,
  },
  formHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  formInput: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
    borderColor: '#999',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  formContainer: {
    marginBottom: 10,
  },
  button: {
    width: 280,
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    height: 60,
    backgroundColor: Color.primary,
    borderRadius: 28,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 20,
    color: '#fff',
  },
});
