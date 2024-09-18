import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Animated,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { workouts } from './(tabs)';
import Icon from 'react-native-vector-icons/Ionicons';
import utils from '@/constants/Utils';
import CustomButton from '@/components/CustomButton.component';
import { Image } from 'expo-image';
import { colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';

// C
interface Exercise {
  name: string;
  duration: string;
  image: string;
}
const exercises: Exercise[] = [
  {
    name: 'Lunge Stretch',
    duration: '1:00 min',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
  },
  {
    name: 'High Knees',
    duration: '0:50 min',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
  },
  {
    name: 'Sprint in Place',
    duration: '1:00 min',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
  },
  {
    name: 'TEST 4',
    duration: '1:00 min',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
  },
  {
    name: 'TEST 5',
    duration: '0:50 min',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
  },
  {
    name: 'TEST 6',
    duration: '1:00 min',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
  },
  {
    name: 'TEST 7',
    duration: '1:00 min',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
  },
  {
    name: 'TEST 8',
    duration: '0:50 min',
    image: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
  },
];

// F
const Header = ({
  title,
  exerciseCount,
  onBackPress,
}: {
  title: string;
  exerciseCount: number;
  onBackPress: any;
}) => {
  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        source={{
          uri: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
        }}
        resizeMode='cover'
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.99)']}
          style={styles.gradientOverlay}
        />
        <View style={styles.topBar}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            onPress={onBackPress}
          >
            <Icon name='chevron-back' size={30} color='#fff' />
            <Text style={styles.navText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='bookmark-outline' size={30} color='#fff' />
          </TouchableOpacity>
        </View>

        <View style={styles.workoutInfo}>
          <Text style={styles.title}>
            Chest Workout Chest Workout Chest Workout
          </Text>
          <View style={styles.badgeList}>
            <View style={styles.badgeItem}>
              <Icon
                name='barbell-outline'
                size={18}
                color={colors.primary['400']}
              />
              <Text style={styles.badgeText}>10 Exercise</Text>
            </View>
          </View>

          <CustomButton
            label='Start Workout'
            widthType='full'
            onPress={() => {}}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const StickyTopBar = ({ onBackPress }: any) => {
  return (
    <View style={{ padding: 16 }}>
      <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
          onPress={onBackPress}
        >
          <Icon name='chevron-back' size={30} color='#fff' />
          <Text style={styles.navText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='bookmark-outline' size={30} color='#fff' />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const BodySection = () => {
  return (
    <View style={styles.bodyContainer}>
      {exercises.map((item) => (
        <View style={styles.exerciseItem} key={item.name}>
          <Image source={{ uri: item.image }} style={styles.exerciseImage} />
          <View style={styles.exerciseInfo}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Text style={styles.exerciseDuration}>{item.duration}</Text>
          </View>
          <TouchableOpacity>
            <Icon name='play-outline' size={25} color='#fff' />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

// M
const Details = () => {
  //
  const { workoutId } = useLocalSearchParams();
  const selectedWorkout = workouts.find(
    (workout) => workout.id === String(workoutId)
  );
  const navigation = useNavigation();

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
            <Header
              title={selectedWorkout.title}
              exerciseCount={selectedWorkout.exerciseCount}
              onBackPress={() => navigation.goBack()}
            />
            <BodySection />
          </ScrollView>
          <Animated.View
            style={[
              styles.animatedView,
              {
                top: stickyTop,
                opacity: stickyOpacity,
              },
            ]}
          >
            <StickyTopBar onBackPress={() => navigation.goBack()} />
          </Animated.View>
        </View>
      )}
    </>
  );
};

// S
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedView: {
    height: 110,
    ...utils.backgroundColor('background', '100'),
    justifyContent: 'flex-end',
    position: 'absolute',
    top: -150, // -150 -> 0
    left: 0,
    right: 0,
    opacity: 1,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 16,
        shadowOffset: {
          width: 4,
          height: 5,
        },
      },
    }),
  },

  // ----------------- HEADER
  headerContainer: {
    height: 670,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 70,
    zIndex: 2,
    paddingHorizontal: 16,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    ...utils.textColor('background', '600'),
  },
  workoutInfo: {
    zIndex: 2,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  badgeList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  badgeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    ...utils.backgroundColor('background', '300'),
    ...utils.borderRadius('md'),
  },
  badgeText: {
    marginLeft: 5,
    ...utils.textColor('background', '600'),
  },

  // ---------------- BODY:
  bodyContainer: {
    marginTop: 25,
    paddingHorizontal: 16,
  },

  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  exerciseImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },

  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  exerciseDuration: {
    color: '#999',
  },
});

export default Details;
