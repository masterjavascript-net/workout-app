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
  selectedDay,
  setSelectedDay,
}: {
  day: number;
  weekDay: string;
  selectedDay: number | null;
  setSelectedDay: (day: number) => void;
}) => {
  return (
    <Pressable
      onPress={() => setSelectedDay(day)}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:
          selectedDay === day ? colors.primary['400'] : 'transparent',
        paddingHorizontal: 10,
        ...utils.borderRadius('md'),
        height: 55,
        width: 50,
        gap: 3,
      }}
    >
      <Text
        style={{
          color:
            selectedDay === day
              ? colors.background['100']
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
          color:
            selectedDay === day
              ? colors.background['100']
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

  const {
    currentWorkoutDay: selectedDay,
    setCurrentWorkoutDay: setSelectedDay,
  } = useGeneralAppStore((state) => ({
    currentWorkoutDay: state.currentWorkoutDay,
    setCurrentWorkoutDay: state.setCurrentWorkoutDay,
  }));

  const getWeekDay = (date: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(date);
    return weekDays[newDate.getDay()];
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: moment().date() - 2,
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
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
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
});
