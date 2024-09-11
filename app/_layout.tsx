import { colors } from '@/constants/Colors';
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
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen
          name='profile'
          options={{
            headerShown: true,
            headerBackTitle: 'Home',
            title: 'Profile',
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
