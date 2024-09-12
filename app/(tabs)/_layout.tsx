import { Tabs } from 'expo-router';
import React from 'react';

import utils from '@/constants/Utils';
import { FontAwesome6, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
          paddingBottom: 40,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          ...utils.fontFamily('normal'),
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name='bullseye' size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name='globe' size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='builder'
        options={{
          title: 'Builder',
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name='dumbbell' size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <Ionicons name='settings' size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
