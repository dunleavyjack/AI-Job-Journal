import { store } from "@/store/store";
import { Stack } from "expo-router";
import { Provider as GlobalStoreProvider } from "react-redux";

export default function TabsLayout() {
  return (
    <GlobalStoreProvider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GlobalStoreProvider>
  );
}
