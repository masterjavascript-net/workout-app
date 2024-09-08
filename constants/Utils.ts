import { border, Border, BorderRadius, BorderWidth } from "./Borders";
import { Spacing, spacing } from "./Spacing";

// utils.js
const utils = {
  padding: (size: keyof Spacing) => ({
    padding: spacing[size] || spacing.none,
  }),
  paddingVertical: (size: keyof Spacing) => ({
    paddingVertical: spacing[size] || spacing.none,
  }),
  paddingHorizontal: (size: keyof Spacing) => ({
    paddingHorizontal: spacing[size] || spacing.none,
  }),

  margin: (size: keyof Spacing) => ({
    margin: spacing[size] || spacing.none,
  }),
  marginVertical: (size: keyof Spacing) => ({
    marginVertical: spacing[size] || spacing.none,
  }),
  marginHorizontal: (size: keyof Spacing) => ({
    marginHorizontal: spacing[size] || spacing.none,
  }),

  borderRadius: (size: keyof BorderRadius) => ({
    borderRadius: border.radius[size] || border.radius.none,
  }),
  borderWidth: (size: keyof BorderWidth) => ({
    borderWidth: border.width[size] || border.width.none,
  }),
  //   borderColor: (color: string) => ({
  //     borderColor: colors[color] || colors.black,
  //   }),
  //   backgroundColor: (color: string) => ({
  //     backgroundColor: colors[color] || colors.white,
  //   }),
  //   textColor: (color: string) => ({
  //     color: colors[color] || colors.black,
  //   }),
};

export default utils;
