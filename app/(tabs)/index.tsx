import AppLayouts from '@/components/AppLayouts.layout';
import CustomSectionHeader from '@/components/CustomSectionHeader';
import Header from '@/components/Header.component';
import HorizontalCalendar from '@/components/HorizontalCalendar';
import {
  Antonio_400Regular,
  Antonio_700Bold,
  useFonts,
} from '@expo-google-fonts/antonio';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

export type User = {
  name: string;
  avatar: string;
};

const user: User = {
  name: 'Eljan',
  avatar:
    'https://i.pinimg.com/550x/7a/11/b9/7a11b9f739c130eed437d1a237cc3b7d.jpg',
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
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
        }}
      >
        <Header
          user={user}
          onPressAvatar={() => {
            router.push('../profile');
          }}
        />
        <HorizontalCalendar />
        <CustomSectionHeader
          header="Recommended Workouts"
          // iconName="arrow-right-long"
          linkText="See more"
          onPress={() => {}}
        />
      </View>
    </AppLayouts>
  );
}
