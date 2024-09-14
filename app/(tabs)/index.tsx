import AppLayouts from '@/components/AppLayouts.layout';
import CustomCardSlider from '@/components/CustomCardSlider.component';
import CustomSectionHeader from '@/components/CustomSectionHeader';
import Header from '@/components/Header.component';
import HorizontalCalendar from '@/components/HorizontalCalendar';
import {
  Antonio_400Regular,
  Antonio_700Bold,
  useFonts,
} from '@expo-google-fonts/antonio';
import { router } from 'expo-router';
import { ScrollView, Text } from 'react-native';

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
};

const workouts: Workout[] = [
  {
    id: '1',
    title: 'Back Workout',
    exerciseCount: 5,
    imageUrl:
      'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    title: 'Chest Workout',
    exerciseCount: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1604480133080-602261a680df?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    title: 'Leg Workout',
    exerciseCount: 6,
    imageUrl:
      'https://images.unsplash.com/photo-1541600383005-565c949cf777?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Index() {
  const [fontsLoaded] = useFonts({
    Antonio_400Regular,
    Antonio_700Bold,
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
        <Header
          user={user}
          onPressAvatar={() => {
            router.push('../profile');
          }}
        />
        <HorizontalCalendar />
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
      </ScrollView>
    </AppLayouts>
  );
}
