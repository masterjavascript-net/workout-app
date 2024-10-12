import { User } from '@/constants/DataExamples';
import utils from '@/constants/Utils';
import { addElipsis } from '@/textUtils';
import { Image } from 'expo-image';
import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
  user: User;
  onPressAvatar: () => void;
}

const getTimeOfDay = () => {
  const currentHour = +moment().format('H');

  if (currentHour >= 5 && currentHour < 12) {
    return 'Morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Afternoon';
  } else if (currentHour >= 18 && currentHour < 21) {
    return 'Evening';
  } else {
    return 'Night';
  }
};

const Header = ({ user, onPressAvatar }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.subtitle}>{moment().format('dddd, D MMM')}</Text>
        <Text style={styles.title}>
          Good {getTimeOfDay()}, {addElipsis(user.name, 10)} 👋
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPressAvatar}>
          <Image source={user.profileImage} style={styles.profile} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...utils.margin('lg', 'bottom'),
    // ...utils.backgroundColor('background', '100'),
    // backgroundColor: 'red',
  },
  subtitle: {
    ...utils.textColor('background', '500'),
    ...utils.fontSize('text', 'medium'),
    ...utils.margin('xs', 'bottom'),
    ...utils.fontFamily('text', 'bold'),
  },
  title: {
    color: '#fff',
    ...utils.fontSize('heading', 'h2'),
    ...utils.fontFamily('heading', 'bold'),
  },
  profile: {
    width: 48,
    height: 48,
    ...utils.borderRadius('xl'), //24
  },
});
