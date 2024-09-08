export type BorderRadius = {
  none: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type BorderWidth = {
  none: number;
  thin: number;
  thick: number;
  extraThick: number;
};

export type Border = {
  width: BorderWidth;
  radius: BorderRadius;
};

export const border: Border = {
  width: {
    none: 0,
    thin: 1,
    thick: 2,
    extraThick: 4,
  },
  radius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
};
