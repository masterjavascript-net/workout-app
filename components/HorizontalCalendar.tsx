import { colors } from '@/constants/Colors';
import utils from '@/constants/Utils';
import { useGeneralAppStore } from '@/stores/useGeneralAppStore';
import { useSegments } from 'expo-router';
import moment from 'moment';
import React, { useEffect, useRef } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const DateBox = ({
  day,
  weekDay,
  dateOfToday,
  selectedWorkoutDay,
  setSelectedWorkoutDay,
}: {
  day: number;
  weekDay: string;
  dateOfToday: number;
  selectedWorkoutDay: number | null;
  setSelectedWorkoutDay: (day: number) => void;
}) => {
  const isToday = day === dateOfToday;
  const isSelected = day === selectedWorkoutDay && day !== dateOfToday;
  return (
    <Pressable
      onPress={() => setSelectedWorkoutDay(day)}
      style={[
        styles.dateBox,
        isSelected ? styles.selectedDateBox : {},
        isToday ? styles.todayDateBox : {},
      ]}
    >
      <Text
        style={{
          color: isToday
            ? colors.background['100']
            : isSelected
            ? colors.background['600']
            : colors.background['500'],
          fontWeight: 500,
          fontSize: 14,
          ...utils.fontFamily('text', 'bold'),
        }}
      >
        {weekDay}
      </Text>
      <Text
        style={{
          color: isToday
            ? colors.background['100']
            : isSelected
            ? colors.background['500']
            : colors.background['400'],
          fontWeight: 700,
          fontSize: 16,
          ...utils.fontFamily('heading', 'bold'),
        }}
      >
        {day}
      </Text>
    </Pressable>
  );
};

const HorizontalCalendar = () => {
  const segments = useSegments();
  const currentDate = moment().toDate();
  const dateOfToday = currentDate.getDate();
  const maxDateForCurrentMonth = moment(currentDate).endOf('month').toDate();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const flatListRef = useRef<FlatList | null>(null);
  const generateDates = () => {
    const dates = [];
    for (let i = 1; i <= maxDateForCurrentMonth.getDate(); i++) {
      dates.push(i);
    }
    return dates;
  };

  const { selectedWorkoutDay, setSelectedWorkoutDay, resetWorkoutDay } =
    useGeneralAppStore((state) => ({
      selectedWorkoutDay: state.selectedWorkoutDay,
      setSelectedWorkoutDay: state.setSelectedWorkoutDay,
      resetWorkoutDay: state.resetWorkoutDay,
    }));

  const getWeekDay = (date: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(date);
    return weekDays[newDate.getDay()];
  };

  useEffect(() => {
    resetWorkoutDay();
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: moment().date() - 4,
        animated: true,
      });
    }
  }, [segments]);

  const handleScrollToIndexFailed = (error: { index: number }) => {
    // Log the error or retry scrolling after a delay
    setTimeout(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: error.index,
          animated: true,
        });
      }
    }, 100);
  };

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        ref={flatListRef}
        data={generateDates()}
        contentContainerStyle={{
          height: 60,
          gap: 10,
          top: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScrollToIndexFailed={handleScrollToIndexFailed}
        renderItem={({ item }) => (
          <DateBox
            day={item}
            weekDay={getWeekDay(item)}
            dateOfToday={dateOfToday}
            selectedWorkoutDay={selectedWorkoutDay}
            setSelectedWorkoutDay={setSelectedWorkoutDay}
          />
        )}
      />
    </View>
  );
};

export default HorizontalCalendar;

const styles = StyleSheet.create({
  flatListContainer: {
    height: 70,
    alignItems: 'center',
    ...utils.margin('md', 'bottom'),
  },
  dateBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: 52,
    gap: 3,
    paddingHorizontal: 10,
    ...utils.borderRadius('md'),
    backgroundColor: 'transparent',
  },
  selectedDateBox: {
    color: '#fff',
    borderColor: colors.primary['300'],
    borderWidth: 1,
  },
  todayDateBox: {
    backgroundColor: colors.primary['400'],
  },
});
