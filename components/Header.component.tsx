import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import utils from "@/constants/Utils";
import { User } from "@/app";
import moment from "moment";

interface HeaderProps {
  user: User;
  onPressAvatar: () => void;
}

const getTimeOfDay = () => {
  const currentHour = +moment().format("H");

  if (currentHour >= 5 && currentHour < 12) {
    return "Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Afternoon";
  } else if (currentHour >= 18 && currentHour < 21) {
    return "Evening";
  } else {
    return "Night";
  }
};

const Header = ({ user, onPressAvatar }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.subtitle}>{moment().format("dddd, D MMM")}</Text>
        <Text style={styles.title}>
          {getTimeOfDay()}, {user.name} 👋
        </Text>
      </View>
      <View>
        <Pressable onPress={onPressAvatar}>
          <Image source={user.avatar} style={styles.profile} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...utils.backgroundColor("background", "100"),
    ...utils.padding("sm"),
  },
  subtitle: {
    ...utils.textColor("background", "500"),
    ...utils.fontSize("text", "medium"),
    ...utils.margin("xs", "bottom"),
  },
  title: {
    color: "#fff",
    ...utils.fontSize("heading", "h1"),
  },
  profile: {
    width: 48,
    height: 48,
    ...utils.borderRadius("xl"), //24
  },
});
