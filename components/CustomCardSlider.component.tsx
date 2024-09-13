import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { Workout } from '@/app/(tabs)';
import utils from '@/constants/Utils';
import { Image } from 'expo-image';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window');

interface CustomCardProps {
  workout: Workout;
  isHorizontal: boolean;
}

const CustomCard = ({ workout, isHorizontal }: CustomCardProps) => {
  return (
    <View
      style={[
        styles.card,
        isHorizontal
          ? { width: 175, height: 175 }
          : { width: '100%', height: 175 },
      ]}
    >
      <Image source={workout.imageUrl} style={styles.cardImage} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{workout.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Icon name="dumbbell" size={14} color={'#fff '} />
          <Text style={styles.infoCard}>{workout.exerciseCount} Exercises</Text>
        </View>
      </View>
    </View>
  );
};

interface CustomCardSliderProps {
  workouts: Workout[];
  orientation: string;
}

const CustomCardSlider = ({ workouts, orientation }: CustomCardSliderProps) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <FlatList
      style={styles.cardSliderContainer}
      data={workouts}
      renderItem={({ item }) => (
        <CustomCard workout={item} isHorizontal={isHorizontal} />
      )}
      horizontal={isHorizontal}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CustomCardSlider;

const styles = StyleSheet.create({
  cardSliderContainer: {},

  card: {
    width: 175, // Adjust size to match the design
    height: 175,
    overflow: 'hidden',
    ...utils.borderRadius('lg'),
    ...utils.margin('lg', 'top'),
    ...utils.margin('md', 'right'),
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute', // Image takes up the entire card
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end', // Position the text at the bottom
    backgroundColor: 'rgba(37, 53, 28, 0.6)', // Dark transparent overlay for text
    ...utils.padding('xl', 'left'),
    ...utils.padding('md', 'bottom'),
  },
  title: {
    letterSpacing: 1.5,
    ...utils.margin('md', 'bottom'),
    ...utils.textColor('background', '600'),
    ...utils.fontSize('heading', 'h3'),
    ...utils.fontFamily('bold'),
  },
  infoCard: {
    ...utils.textColor('background', '600'),
    ...utils.fontFamily('normal'),
  },
});
