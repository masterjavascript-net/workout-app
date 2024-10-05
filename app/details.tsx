import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  Animated,
  Pressable,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { useNavigation } from '@react-navigation/native';
import { exercises, workouts } from '@/constants/DataExamples';
import StickyTopbar from '@/components/details/subcomponents/StickyTopbar.component';
import HeaderSection from '@/components/details/subcomponents/HeaderSection.component';
import AccordionItem from '@/components/details/subcomponents/AccordionItem.component';

const Details = () => {
  const { workoutId } = useLocalSearchParams();
  const selectedWorkout = workouts.find(
    (workout) => workout.id === String(workoutId)
  );
  const navigation = useNavigation();
  const [openedItemId, setOpenedItemId] = useState(0);

  // Animation
  const scrollY = new Animated.Value(0);
  const stickyTop = scrollY.interpolate({
    outputRange: [-20, 0],
    inputRange: [100, 100 + 10],
    extrapolate: 'clamp',
  });
  const stickyOpacity = scrollY.interpolate({
    outputRange: [0, 1],
    inputRange: [100, 100],
    extrapolate: 'clamp',
  });
  return (
    <>
      {selectedWorkout && (
        <View style={styles.container}>
          <ScrollView
            bounces={false}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              {
                useNativeDriver: false,
              }
            )}
          >
            <HeaderSection
              title={selectedWorkout.title}
              exerciseCount={selectedWorkout.exerciseCount}
              onBackPress={() => navigation.goBack()}
            />
            <View style={styles.bodySection}>
              {exercises.map((item) => (
                <AccordionItem key={item.id} {...item} />
              ))}
            </View>
          </ScrollView>

          <StickyTopbar
            onBackPress={() => navigation.goBack()}
            stickyTop={stickyTop}
            stickyOpacity={stickyOpacity}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },

  bodySection: {
    marginTop: 25,
    paddingHorizontal: 16,
  },
});

export default Details;
