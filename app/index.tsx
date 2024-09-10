import AppLayouts from "@/components/AppLayouts.layout";
import Header from "@/components/Header.component";
import { View } from "react-native";
import { Image } from "react-native-reanimated/lib/typescript/Animated";

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
      }}
    >
      {/* <Header user={user} onPressAvatar={() => {}} /> */}
    </View>
  );
}
