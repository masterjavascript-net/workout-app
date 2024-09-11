import AppLayouts from "@/components/AppLayouts.layout";
import CustomButton from "@/components/CustomButton.component";
import Header from "@/components/Header.component";
import SearchBar from "@/components/SearchBar.component";
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
