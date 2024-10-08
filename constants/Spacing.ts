export type Spacing = {
  none: number;
  xs: number;
  sm: number;
  smd: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

const spacing: Spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  smd: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export type Directions = "top" | "right" | "bottom" | "left";

export { spacing };
