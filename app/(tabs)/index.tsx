import AppLayouts from '@/components/AppLayouts.layout';
import CustomCardSlider from '@/components/CustomCardSlider.component';
import CustomSectionHeader from '@/components/CustomSectionHeader';
import Header from '@/components/Header.component';
import HorizontalCalendar from '@/components/HorizontalCalendar';
import GraphWidget from '@/components/widgets/GraphWidget';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export type User = {
  name: string;
  avatar: string;
};

const user: User = {
  name: 'John',
  avatar:
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export type TabItem = {
  text: string;
  iconName?: string;
  index: number;
};

const tabItems: TabItem[] = [
  { index: 1, text: 'Workout', iconName: 'dumbbell' },
  { index: 2, text: 'Meal', iconName: 'utensils' },
];

export type Workout = {
  id: string;
  title: string;
  exerciseCount: number;
  imageUrl: string;
  category: string;
};

export const workouts: Workout[] = [
  {
    id: '1',
    title: 'Advanced Back Workout',
    exerciseCount: 5,
    imageUrl:
      'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Back',
  },
  {
    id: '2',
    title: 'Begineer Chest Workout',
    exerciseCount: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1604480133080-602261a680df?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Chest',
  },
  {
    id: '3',
    title: 'Advanced ABS Workout',
    exerciseCount: 6,
    imageUrl:
      'https://images.unsplash.com/photo-1541600383005-565c949cf777?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ABS',
  },
  {
    id: '4',
    title: 'Advanced Leg Workout',
    exerciseCount: 6,
    imageUrl:
      'https://images.unsplash.com/photo-1541600383005-565c949cf777?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Leg',
  },
];

export default function Index() {
  const [fontsLoaded] = useFonts({
    lusitana: require('../../assets/fonts/Lusitana-Regular.ttf'),
    'lusitana-bold': require('../../assets/fonts/Lusitana-Bold.ttf'),
    lato: require('../../assets/fonts/Lato-Regular.ttf'),
    'lato-bold': require('../../assets/fonts/Lato-Bold.ttf'),
  });

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
          <CustomSectionHeader
            header='Widgets'
            iconName='setting'
            onPress={() => {}}
          />
          <GraphWidget />
          <CustomSectionHeader
            header='Recommended Workouts'
            // iconName="arrow-right-long"
            linkText='See more'
            onPress={() => {}}
          />
          <CustomCardSlider workouts={workouts} orientation='horizontal' />
          <CustomSectionHeader
            header='My Workouts'
            // iconName="arrow-right-long"
            linkText='See more'
            onPress={() => {}}
          />
          <CustomCardSlider workouts={workouts} orientation='none' />
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
