import utils from '@/constants/Utils';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface CustomSectionHeaderProps {
  header: string;
  onPress: () => void;
  linkText?: string;
  iconName?: string;
}

const CustomSectionHeader = ({
  header = 'Workouts',
  linkText,
  iconName,
  onPress,
}: CustomSectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{header}</Text>
      <TouchableOpacity onPress={onPress} style={styles.linkContainer}>
        {linkText && <Text style={styles.headerLinkText}>{linkText}</Text>}
        {iconName && <Icon name={iconName} style={styles.icon} size={18} />}
      </TouchableOpacity>
    </View>
  );
};

export default CustomSectionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...utils.margin('lg', 'top'),
  },
  headerText: {
    ...utils.fontSize('heading', 'h5'),
    ...utils.textColor('background', '600'),
    ...utils.fontFamily('bold'),
  },

  headerLinkText: {
    ...utils.fontSize('text', 'small'),
    ...utils.textColor('accent', '400'),
    ...utils.fontFamily('normal'),
  },

  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  icon: {
    ...utils.textColor('accent', '400'),
  },
});
