import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import utils from "@/constants/Utils";
import { TabItem } from "@/app";
import Icon from "react-native-vector-icons/FontAwesome5";

function getCalculatedWidth(itemCount: number) {
  return 100 / itemCount;
}

interface SwitchTabProps {
  items: TabItem[];
  onTabChange: (selectedIndex: number) => void;
}

const SwitchTab = ({ items, onTabChange }: SwitchTabProps) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleTabPress = (index: number) => {
    setActiveIndex(index);
    onTabChange(index); // Call the parent callback with the selected index
  };

  return (
    <View style={styles.container}>
      {items.map((item) => {
        const isActive = item.index === activeIndex;

        return (
          <TouchableOpacity
            key={item.index}
            onPress={() => handleTabPress(item.index)}
            style={[
              styles.tab,
              isActive ? styles.activeTab : styles.inActiveTab,
              { width: `${getCalculatedWidth(items.length)}%` },
            ]}
          >
            <Text style={isActive ? styles.activeItem : styles.inActiveItem}>
              {item.text}
            </Text>
            {item.iconName && (
              <Icon
                name={item.iconName}
                size={16}
                style={isActive ? styles.activeItem : styles.inActiveItem}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SwitchTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ...utils.padding("sm", "top"),
    ...utils.padding("sm", "bottom"),
    ...utils.padding("sm"),
    ...utils.borderRadius("md"),
    ...utils.backgroundColor("background", "300"),
  },
  tab: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    ...utils.padding("smd"),
    ...utils.borderRadius("sm"),
    ...utils.backgroundColor("background", "600"),
  },
  activeTab: {
    ...utils.backgroundColor("primary", "400"),
  },
  inActiveTab: {
    backgroundColor: "transparent",
  },
  activeItem: {
    ...utils.textColor("background", "300"),
    fontWeight: "bold",
  },
  inActiveItem: {
    ...utils.textColor("background", "500"),
  },
});
