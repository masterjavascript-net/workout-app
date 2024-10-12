import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import utils from '@/constants/Utils';
import { user } from '@/constants/DataExamples';
import moment from 'moment';
import { router } from 'expo-router';
import { Image } from 'expo-image';
const ProfileHeader = () => {
  return (
    <LinearGradient
      colors={[colors.background[100], colors.background[400]]}
      style={styles.headerContainer}
    >
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
        resizeMode='cover'
        style={styles.headerBackgroundImg}
        imageStyle={{ opacity: 0.15 }}
      >
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => router.push('/settings')}
        >
          <Feather name='settings' size={28} color={colors.background['600']} />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <Image source={user.profileImage} style={styles.profileImg} />
          <Text style={styles.profileName}>Eljan Rustamov</Text>
          <Text style={styles.profileSubtitle}>{moment().format('L')}</Text>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    width: '100%',
    height: '35%',
  },
  headerBackgroundImg: {
    flex: 1,
    justifyContent: 'center',
  },
  settingsButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 15,
    borderRadius: 20,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    ...utils.fontSize('heading', 'h4'),
    ...utils.margin('md', 'top'),
    ...utils.fontFamily('heading', 'bold'),
    ...utils.textColor('background', '600'),
  },
  profileSubtitle: {
    ...utils.margin('sm', 'top'),
    ...utils.fontSize('text', 'medium'),
    ...utils.fontFamily('text', 'normal'),
    ...utils.textColor('background', '500'),
  },
});
