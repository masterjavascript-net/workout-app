import AppLayouts from "@/components/AppLayouts.layout";
import CustomButton from "@/components/CustomButton.component";
import Header from "@/components/Header.component";
import SearchBar from "@/components/SearchBar.component";
import SwitchTab from "@/components/SwitchTab.component";
import { View, Text } from "react-native";

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
  return (
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
      {/* <Header user={user} onPressAvatar={() => {}} /> */}
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
  );
}
