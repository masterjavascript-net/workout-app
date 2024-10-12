import AppLayouts from '@/components/AppLayouts.layout';
import CustomCardSlider from '@/components/CustomCardSlider.component';
import CustomSectionHeader from '@/components/CustomSectionHeader';
import Header from '@/components/Header.component';
import HorizontalCalendar from '@/components/HorizontalCalendar';
import GraphWidget from '@/components/widgets/GraphWidget';
import { user, workoutPlans } from '@/constants/DataExamples';
import { useGeneralAppStore } from '@/stores/useGeneralAppStore';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import moment from 'moment';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

function getContent(selectedWorkoutDay: number | null) {
  if (selectedWorkoutDay === moment().date()) {
    return (
      <>
        {/* <CustomSectionHeader
          header='Widgets'
          iconName='setting'
          onPress={() => {}}
        /> */}
        {/* <GraphWidget /> */}
        <CustomSectionHeader
          header='Recommended Workouts'
          // iconName="arrow-right-long"
          linkText='See more'
          onPress={() => {}}
        />
        <CustomCardSlider
          workoutPlans={workoutPlans}
          orientation='horizontal'
        />
        <CustomSectionHeader
          header='My Workouts'
          // iconName="arrow-right-long"
          linkText='See more'
          onPress={() => {}}
        />
        <CustomCardSlider workoutPlans={workoutPlans} orientation='none' />
      </>
    );
  } else {
    return (
      <Text style={{ color: '#fff' }}>
        - There is no data related to this date{' '}
        {`10/0${selectedWorkoutDay}/2024`}
      </Text>
    );
  }
}

export default function Index() {
  const [fontsLoaded] = useFonts({
    lusitana: require('../../assets/fonts/Lusitana-Regular.ttf'),
    'lusitana-bold': require('../../assets/fonts/Lusitana-Bold.ttf'),
    lato: require('../../assets/fonts/Lato-Regular.ttf'),
    'lato-bold': require('../../assets/fonts/Lato-Bold.ttf'),
  });
  const { selectedWorkoutDay } = useGeneralAppStore((state) => ({
    selectedWorkoutDay: state.selectedWorkoutDay,
  }));

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <AppLayouts>
      <ScrollView
        style={{
          flex: 1,
          paddingVertical: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Header
            user={user}
            onPressAvatar={() => {
              router.push('../profile');
            }}
          />
          <HorizontalCalendar />
          {getContent(selectedWorkoutDay)}
        </View>
      </ScrollView>
    </AppLayouts>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
