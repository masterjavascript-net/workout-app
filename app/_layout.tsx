import { colors } from '@/constants/Colors';
import utils from '@/constants/Utils';
import { DarkTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

/**
 * Defines the dark theme for the React Navigation library, with custom colors.
 * This theme is used when the device is in a dark color scheme.
 */
const NavigationDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary[400],
    notification: colors.accent[300],
    card: colors.background[200],
    text: colors.background[600],
    background: colors.background[100],
    border: colors.background[300],
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={NavigationDarkTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="profile"
          options={{
            headerShown: true,
            headerBackTitle: 'Home',
            headerBackTitleStyle: {
              ...utils.fontFamily('normal'),
            },
            title: 'Profile',
            headerTitleStyle: {
              ...utils.fontFamily('normal'),
            },
          }}
        />
        <Stack.Screen
          name="details"
          options={{
            headerShown: false,
            headerBackTitleStyle: {
              ...utils.fontFamily('normal'),
            },
            title: 'Details',
            headerTitleStyle: {
              ...utils.fontFamily('normal'),
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
