import { colors } from '@/constants/Colors';
import { WorkoutPlan } from '@/constants/DataExamples';
import utils from '@/constants/Utils';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface CustomCardProps {
  workoutPlan: WorkoutPlan;
  isHorizontal: boolean;
}

const CustomCard = ({ workoutPlan, isHorizontal }: CustomCardProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        isHorizontal
          ? { width: 175, height: 175 }
          : { width: '100%', height: 175 },
      ]}
      onPress={() =>
        router.push({
          pathname: '/details',
          params: { workoutId: workoutPlan.id },
        })
      }
    >
      <Image
        source={workoutPlan.backgroundImage}
        style={{
          ...styles.cardImage,
        }}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>{workoutPlan.name}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}
        >
          <Icon name='dumbbell' size={14} color={colors.primary['500']} />
          <Text style={styles.infoCard}>
            {workoutPlan.exercises.length} Exercises
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

interface CustomCardSliderProps {
  workoutPlans: WorkoutPlan[];
  orientation: 'horizontal' | 'vertical' | 'none';
}

const CustomCardSlider = ({
  workoutPlans,
  orientation,
}: CustomCardSliderProps) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <View style={[styles.cardSliderContainer, !isHorizontal && { flex: 1 }]}>
      {orientation === 'none' ? (
        <View
          style={{
            paddingBottom: 25,
          }}
        >
          {workoutPlans.map((workoutPlan) => (
            <CustomCard
              workoutPlan={workoutPlan}
              isHorizontal={isHorizontal}
              key={workoutPlan.id}
            />
          ))}
        </View>
      ) : (
        <FlatList
          data={workoutPlans}
          renderItem={({ item }) => (
            <CustomCard workoutPlan={item} isHorizontal={isHorizontal} />
          )}
          horizontal={isHorizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default CustomCardSlider;

const styles = StyleSheet.create({
  cardSliderContainer: {
    flex: 1,
  },

  card: {
    overflow: 'hidden',
    ...utils.borderRadius('lg'),
    ...utils.margin('md', 'top'),
    ...utils.margin('md', 'bottom'),
    ...utils.margin('md', 'right'),
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute', // Image takes up the entire card
    objectFit: 'cover', // Image is centered
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end', // Position the text at the bottom
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark transparent overlay for text
    ...utils.padding('md', 'left'),
    ...utils.padding('md', 'bottom'),
  },
  title: {
    letterSpacing: 1.5,
    ...utils.margin('md', 'bottom'),
    ...utils.textColor('background', '600'),
    ...utils.fontSize('heading', 'h5'),
    ...utils.fontFamily('heading', 'bold'),
    position: 'absolute',
    top: 15,
    left: 10,
  },
  infoCard: {
    ...utils.textColor('primary', '500'),
    ...utils.fontFamily('text', 'normal'),
    ...utils.fontSize('text', 'small'),
  },
});
