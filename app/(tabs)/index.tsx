import AppLayouts from '@/components/AppLayouts.layout';
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
    'https://lh3.googleusercontent.com/a/ACg8ocIKlwqLE0abszDaZo3gtxAYewe8FHKHl_em0wK5zknh3VLbpk-A=s192-c-mo',
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
          backgroundColor: 'black',
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
      </View>
    </AppLayouts>
  );
}
