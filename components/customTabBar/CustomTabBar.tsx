import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BlurView } from 'expo-blur';
import TabButton from './TabButton';
import {
  FontAwesome6,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
} from '@expo/vector-icons';

import { colors } from '@/constants/Colors';
import utils from '@/constants/Utils';

type RouteName = 'index' | 'explore' | 'builder' | 'profile';
const getIcon = (routeName: RouteName, color: string) => {
  switch (routeName) {
    case 'index':
      return <FontAwesome6 name='bullseye' size={20} color={color} />;
    case 'explore':
      return <SimpleLineIcons name='globe' size={20} color={color} />;
    case 'builder':
      return <FontAwesome6 name='dumbbell' size={20} color={color} />;
    case 'profile':
      return <FontAwesome name='user-o' size={20} color={color} />;
    default:
      return null;
  }
};

interface CustomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <BlurView style={styles.blurView} tint='dark' intensity={60}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const icon = getIcon(
          route.name as RouteName,
          isFocused ? colors.primary['400'] : colors.background['500']
        );

        return (
          <TabButton
            key={index}
            label={label}
            isFocused={isFocused}
            icon={icon}
            onPress={onPress}
          />
        );
      })}
    </BlurView>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    ...utils.borderColor('background', '400'),
    borderTopWidth: 1,
  },
});
