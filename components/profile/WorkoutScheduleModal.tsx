import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import utils from '@/constants/Utils';
import { colors } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Animated } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

type WorkoutScheduleProps = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const WorkoutScheduleModal: React.FC<WorkoutScheduleProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  const [selectedWeekdays, setSelectedWeekdays] = useState<string[]>([]);
  const slideAnim = useRef(new Animated.Value(300)).current;

  const changeHandler = () => setModalVisible(!modalVisible);

  const selectHandler = (weekday: string) => {
    setSelectedWeekdays((prev) =>
      prev.includes(weekday)
        ? prev.filter((day) => day !== weekday)
        : [...prev, weekday]
    );
  };

  const isSelectedItem = (weekday: string) =>
    selectedWeekdays.includes(weekday);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: modalVisible ? 0 : 300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [modalVisible]);

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={styles.modalBackdrop}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <View style={styles.modalTitleContainer}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <AntDesign name='close' size={24} color='white' />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Workout Schedule</Text>
            <TouchableOpacity onPress={changeHandler}>
              <AntDesign name='check' size={24} color='white' />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.modalBodyText}>
              Select the days you want to workout
            </Text>
            <View style={styles.weekdaysList}>
              {weekdays.map((weekday, i) => (
                <Pressable
                  style={[
                    styles.weekday,
                    isSelectedItem(weekday) && styles.weekdaySelected,
                  ]}
                  key={i}
                  onPress={selectHandler.bind(this, weekday)}
                >
                  <Text style={styles.weekdayText}>{weekday.slice(0, 2)}</Text>
                  {isSelectedItem(weekday) ? (
                    <Feather name='check-circle' size={14} color='yellow' />
                  ) : (
                    <Feather name='circle' size={14} color='white' />
                  )}
                </Pressable>
              ))}
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default WorkoutScheduleModal;

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    ...utils.backgroundColor('background', '300'),
    height: '32%',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  modalTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.primary['400'],
    borderWidth: 0.2,
    ...utils.padding('lg'),
  },
  modalTitle: {
    textTransform: 'uppercase',
    ...utils.textColor('background', '600'),
    ...utils.fontSize('heading', 'h6'),
    ...utils.fontFamily('heading', 'bold'),
  },
  modalBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBodyText: {
    ...utils.textColor('background', '600'),
    ...utils.fontSize('text', 'medium'),
    ...utils.fontFamily('text', 'normal'),
    ...utils.margin('lg', 'bottom'),
    ...utils.textColor('background', '500'),
  },
  weekdaysList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...utils.padding('md'),
    gap: 15,
  },
  weekday: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    ...utils.padding('sm', 'top'),
    ...utils.padding('sm', 'bottom'),
    ...utils.borderColor('background', '400'),
    ...utils.borderWidth('thin'),
  },
  weekdayText: {
    color: colors.background['600'],
    fontSize: 14,
    fontWeight: '500',
    ...utils.fontFamily('text', 'bold'),
  },
  weekdaySelected: {
    backgroundColor: colors.background['400'],
  },
});
