import { colors } from '@/constants/Colors';
import utils from '@/constants/Utils';
import moment from 'moment';
import React, { useEffect, useRef } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const DateBox = ({ day, weekDay }: { day: number; weekDay: string }) => {
  const toDay = moment().date();
  const isToday = toDay === day;

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isToday ? colors.primary['400'] : 'transparent',
        paddingHorizontal: 8,
        ...utils.borderRadius('md'),
        height: 55,
        gap: 5,
      }}
    >
      <Text
        style={{
          color: isToday ? colors.background['100'] : colors.background['500'],
          fontWeight: 500,
          fontSize: 14,
          ...utils.fontFamily('bold'),
        }}
      >
        {weekDay}
      </Text>
      <Text
        style={{
          color: isToday ? colors.background['100'] : colors.background['400'],
          fontWeight: 700,
          fontSize: 16,
          ...utils.fontFamily('normal'),
        }}
      >
        {day}
      </Text>
    </View>
  );
};

const HorizontalCalendar = () => {
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

  const getWeekDay = (date: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(date);
    return weekDays[newDate.getDay()];
  };

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: moment().date() - 4,
        animated: true,
      });
    }
  }, []);

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
          gap: 15,

          top: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScrollToIndexFailed={handleScrollToIndexFailed}
        renderItem={({ item }) => (
          <DateBox day={item} weekDay={getWeekDay(item)} />
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
  },
});
