import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ title: "Log in", headerShown: false }}
      />
    </Stack>
  );
}
