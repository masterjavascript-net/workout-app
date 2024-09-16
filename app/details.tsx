import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { workouts } from './(tabs)';

const Details = () => {
  const { workoutId } = useLocalSearchParams(); // Parametreyi alıyoruz

  const selectedWorkout = workouts.find(
    (workout) => workout.id === String(workoutId)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Details</Text>
      <Text style={{ color: '#fff' }}>test: {selectedWorkout?.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Details;
