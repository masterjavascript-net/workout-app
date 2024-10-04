import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '@/constants/Colors';
import utils from '@/constants/Utils';

interface TabButtonProps {
  label: string;
  isFocused: boolean;
  icon: React.ReactNode;
  onPress: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  isFocused,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity
      accessibilityRole='button'
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
      style={styles.tabButton}
    >
      {icon}
      <Text
        style={{
          color: isFocused ? colors.primary['400'] : colors.background['500'],
          fontSize: 12,
          ...utils.fontFamily('heading', 'bold'),
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    paddingBottom: 22,
    gap: 5,
  },
});
