export type ColorsCodes = {
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
};

export type ColorsKeys = {
  background: ColorsCodes;
  primary: ColorsCodes;
  secondary: ColorsCodes;
  tertiary: ColorsCodes;
  accent: ColorsCodes;
};

export type Colors = {
  [key in keyof ColorsKeys]: ColorsCodes;
};

export const colors: Colors = {
  background: {
    100: '#0C0C0C',
    200: '#10141C',
    300: '#2C2E34',
    400: '#777B83',
    500: '#C6C8CD',
    600: '#FFFFFF',
  },
  primary: {
    100: '#303A00', // Darkest shade
    200: '#606E00', // Darker shade
    300: '#A6C100', // Medium-dark shade
    400: '#E1FE0E', // Base color (your main color)
    500: '#EBFF58', // Lighter shade
    600: '#F5FF87', // Lightest shade
  },
  secondary: {
    100: '#332000',
    200: '#744800',
    300: '#F5B300',
    400: '#F9CC3F',
    500: '#FDEB96',
    600: '#FFFBE5',
  },
  tertiary: {
    100: '#330010',
    200: '#7A0028',
    300: '#DB0046',
    400: '#FF4058',
    500: '#FE9E99',
    600: '#FFEAE5',
  },
  accent: {
    100: '#000B34',
    200: '#001776',
    300: '#003DD3',
    400: '#3E82F9',
    500: '#97C5FD',
    600: '#F2F8FF',
  },
};
