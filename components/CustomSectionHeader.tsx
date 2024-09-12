import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import utils from '@/constants/Utils';

interface CustomSectionHeaderProps {
  header: string;
  onPress: () => void;
  linkText?: string;
}

const CustomSectionHeader = ({
  header = 'Workouts',
  linkText = 'View all',
  onPress,
}: CustomSectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{header}</Text>
      <TouchableOpacity>
        <Text style={styles.headerLinkText}>{linkText}</Text>
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
  },
  headerText: {
    ...utils.fontSize('heading', 'h4'),
    ...utils.textColor('background', '600'),
    ...utils.fontFamily('bold'),
  },

  headerLinkText: {
    ...utils.fontSize('text', 'medium'),
    ...utils.textColor('primary', '400'),
    ...utils.fontFamily('normal'),
  },
});
