import AppLayouts from "@/components/AppLayouts.layout";
import Header from "@/components/Header.component";
import { router } from "expo-router";
import { View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Antonio_400Regular,
  Antonio_700Bold,
} from "@expo-google-fonts/antonio";

export type User = {
  name: string;
  avatar: string;
};

const user: User = {
  name: "Eljan",
  avatar:
    "https://lh3.googleusercontent.com/a/ACg8ocIKlwqLE0abszDaZo3gtxAYewe8FHKHl_em0wK5zknh3VLbpk-A=s192-c-mo",
};

export type TabItem = {
  text: string;
  iconName?: string;
  index: number;
};

const tabItems: TabItem[] = [
  { index: 1, text: "Workout", iconName: "dumbbell" },
  { index: 2, text: "Meal", iconName: "utensils" },
];

export default function Index() {
  const [fontsLoaded] = useFonts({
    Antonio_400Regular,
    Antonio_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />; // Wait for fonts to load
  }

  return (
    <AppLayouts>
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          paddingHorizontal: 25,
        }}
      >
        {/* 
      <SwitchTab items={tabItems} onTabChange={(index) => {}} />
      */}
        {/* 
      <SearchBar
        onSearch={(text) => {
          console.log(text);
        }}
        placeholder="Search workout.."
      />
      */}
        <Header
          user={user}
          onPressAvatar={() => {
            router.push("../profile");
          }}
        />
        {/* 
      <CustomButton
        onPress={() => {}}
        widthType="auto"
        color="primary"
        buttonType="filled"
        label="Save me"
        iconName="forward"
      />
      
    
      <CustomButton
        onPress={() => {}}
        label="Outline"
        widthType="full"
        buttonType="outline"
        color="tertiary"
      />

      <CustomButton
        onPress={() => {}}
        label="Nude"
        widthType="auto"
        buttonType="nude"
        color="tertiary"
      />
       */}
      </View>
    </AppLayouts>
  );
}
