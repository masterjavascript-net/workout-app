import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import utils from '@/constants/Utils';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '@/constants/Colors';

const WorkoutScheduleCard = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <View style={styles.workoutScheduleCard}>
      <View style={styles.titleWrapper}>
        <FontAwesome name='calendar' size={18} color={colors.primary['400']} />
        <Text style={styles.cardTitle}>Workout Schedule</Text>
      </View>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.changeButton}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutScheduleCard;

const styles = StyleSheet.create({
  workoutScheduleCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...utils.borderRadius('xl'),
    ...utils.margin('lg', 'bottom'),
    ...utils.padding('md'),
    ...utils.backgroundColor('background', '300'),
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  cardTitle: {
    textTransform: 'uppercase',
    ...utils.fontSize('heading', 'h6'),
    ...utils.textColor('background', '600'),
    ...utils.fontFamily('heading', 'bold'),
  },
  changeButton: {
    ...utils.textColor('primary', '400'),
    ...utils.padding('xs', 'top'),
    ...utils.padding('xs', 'bottom'),
    ...utils.padding('md', 'left'),
    ...utils.padding('md', 'right'),
    ...utils.borderColor('primary', '400'),
    ...utils.borderWidth('thin'),
    ...utils.borderRadius('md'),
  },
});
