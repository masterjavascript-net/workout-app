export type HeadingType = {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
};

export type TextType = {
  large: number;
  medium: number;
  small: number;
  tiny: number;
};

export type FontSize = {
  heading: HeadingType;
  text: TextType;
};

export const fontSize: FontSize = {
  heading: {
    h1: 32,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 18,
    h6: 16,
  },
  text: {
    large: 16,
    medium: 14,
    small: 12,
    tiny: 10,
  },
};

export type FontFamily = {
  normal: string;
  bold: string;
};

export const fontFamily: FontFamily = {
  normal: "Antonio_400Regular",
  bold: "Antonio_700Bold",
};
