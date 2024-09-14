import utils from '@/constants/Utils';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

const AppLayouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, ...utils.backgroundColor('background', '100') }}
    >
      <StatusBar style='light' />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default AppLayouts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16, // Sol ve sağdan 16dp boşluk
  },
});
