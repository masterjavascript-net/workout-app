import utils from "@/constants/Utils";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";

const AppLayouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, ...utils.backgroundColor("background", "100") }}
    >
      <StatusBar style="light" />
      {children}
    </SafeAreaView>
  );
};

export default AppLayouts;
