import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import utils from "@/constants/Utils";

interface CustomButtonProps {
  onPress: () => void;
  iconName?: string;
  label?: string;
  widthType?: "auto" | "full";
  color?: "primary" | "secondary" | "tertiary" | "background" | "accent";
  buttonType?: "filled" | "outline" | "nude";
  disabled?: boolean;
}

function getBackground(color: string, pressed: boolean) {
  switch (color) {
    case "primary":
      if (pressed) return { ...utils.backgroundColor("primary", "500") };
      return { ...utils.backgroundColor("primary", "400") };
    case "secondary":
      if (pressed) return { ...utils.backgroundColor("secondary", "500") };
      return { ...utils.backgroundColor("secondary", "400") };
    case "tertiary":
      if (pressed) return { ...utils.backgroundColor("tertiary", "500") };
      return { ...utils.backgroundColor("tertiary", "400") };
    case "background":
      if (pressed) return { ...utils.backgroundColor("background", "500") };
      return { ...utils.backgroundColor("background", "400") };

    case "accent":
      if (pressed) return { ...utils.backgroundColor("accent", "500") };
      return { ...utils.backgroundColor("accent", "400") };
  }
}

function getOutline(color: string) {
  switch (color) {
    case "primary":
      return {
        ...utils.borderColor("primary", "400"),
        ...utils.borderWidth("thin"),
      };
    case "secondary":
      return {
        ...utils.borderColor("secondary", "400"),
        ...utils.borderWidth("thin"),
      };
    case "tertiary":
      return {
        ...utils.borderColor("tertiary", "400"),
        ...utils.borderWidth("thin"),
      };
    case "background":
      return {
        ...utils.borderColor("background", "400"),
        ...utils.borderWidth("thin"),
      };

    case "accent":
      return {
        ...utils.borderColor("accent", "400"),
        ...utils.borderWidth("thin"),
      };
  }
}

const CustomButton = ({
  onPress,
  iconName,
  label = "Button",
  widthType = "auto",
  color = "primary",
  buttonType = "filled",
  disabled = false,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        widthType === "full" ? styles.fullWidthButton : styles.fitButton,
        styles.button,
        buttonType === "filled" && getBackground(color, pressed),
        buttonType === "outline" && getOutline(color),
        buttonType === "nude" && styles.nudeButton,
      ]}
      disabled={disabled}
    >
      {label && <Text>{label}</Text>}
      {iconName && <Icon name={iconName} />}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    ...utils.borderRadius("md"),
    ...utils.padding("sm", "top"),
    ...utils.padding("sm", "bottom"),
    ...utils.padding("lg"),
  },
  fitButton: {
    alignSelf: "flex-start",
  },
  fullWidthButton: {
    width: "100%",
  },
  nudeButton: {
    backgroundColor: "transparent",
  },
  disabled: {
    backgroundColor: "#aaa",
  },
});
