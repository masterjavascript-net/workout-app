import moment from 'moment';
import { border, Border, BorderRadius, BorderWidth } from './Borders';
import { ColorsCodes, ColorsKeys, colors } from './Colors';
import {
  fontSize,
  FontSize,
  HeadingType,
  TextType,
  FontWeight,
  FontType,
} from './Fonts';
import { Directions, Spacing, spacing } from './Spacing';

// utils.js
const utils = {
  padding: (size: keyof Spacing, direction?: Directions) => {
    switch (direction) {
      case 'top':
        return { paddingTop: spacing[size] };
      case 'bottom':
        return { paddingBottom: spacing[size] };
      case 'left':
        return { paddingLeft: spacing[size] };
      case 'right':
        return { paddingRight: spacing[size] };
      default:
        return { padding: spacing[size] };
    }
  },
  margin: (size: keyof Spacing, direction?: Directions) => {
    switch (direction) {
      case 'top':
        return { marginTop: spacing[size] };
      case 'bottom':
        return { marginBottom: spacing[size] };
      case 'left':
        return { marginLeft: spacing[size] };
      case 'right':
        return { marginRight: spacing[size] };
      default:
        return { margin: spacing[size] };
    }
  },
  borderRadius: (size: keyof BorderRadius) => ({
    borderRadius: border.radius[size] || border.radius.none,
  }),
  borderWidth: (size: keyof BorderWidth) => ({
    borderWidth: border.width[size] || border.width.none,
  }),
  borderColor: (colorKey: keyof ColorsKeys, colorCode: keyof ColorsCodes) => ({
    borderColor: colors[colorKey][colorCode],
  }),
  backgroundColor: (
    colorKey: keyof ColorsKeys,
    colorCode: keyof ColorsCodes
  ) => ({
    backgroundColor: colors[colorKey][colorCode],
  }),
  textColor: (colorKey: keyof ColorsKeys, colorCode: keyof ColorsCodes) => ({
    color: colors[colorKey][colorCode],
  }),

  fontSize: (
    type: keyof FontSize,
    size: keyof HeadingType | keyof TextType
  ) => {
    if (type === 'heading') {
      return { fontSize: fontSize[type][size as keyof HeadingType] };
    }
    return { fontSize: fontSize[type][size as keyof TextType] };
  },

  fontFamily: (type: keyof FontType, weight: keyof FontWeight) => {
    switch (type) {
      case 'heading':
        if (weight === 'normal') return { fontFamily: 'lato' };
        if (weight === 'bold') return { fontFamily: 'lato-bold' };
      case 'text':
        if (weight === 'normal') return { fontFamily: 'lusitana' };
        if (weight === 'bold') return { fontFamily: 'lusitana-bold' };
    }
  },
};

export default utils;
