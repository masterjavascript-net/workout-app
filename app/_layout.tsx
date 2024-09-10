import AppLayouts from "@/components/AppLayouts.layout";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AppLayouts>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </AppLayouts>
  );
}
