import { Tabs } from 'expo-router';
import React from 'react';

import CustomTabBar from '@/components/customTabBar/CustomTabBar';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name='index' options={{ title: 'Home' }} />
      <Tabs.Screen name='explore' options={{ title: 'Explore' }} />
      <Tabs.Screen name='builder' options={{ title: 'Builder' }} />
      <Tabs.Screen name='profile' options={{ title: 'Profile' }} />
    </Tabs>
  );
}
