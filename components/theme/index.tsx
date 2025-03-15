import React from "react";
import { themeConfig } from "./config";
import { View, ViewProps } from "react-native";
import { OverlayProvider } from "@gluestack-ui/overlay";
import { ToastProvider } from "@gluestack-ui/toast";
import { useColorScheme } from "nativewind";

type ModeType = "light" | "dark" | "system";

export function ThemeProvider({
  mode = "light",
  ...props
}: {
  // TODO: Add mode types
  mode?: ModeType;
  children?: React.ReactNode;
  style?: ViewProps["style"];
}) {
  // TODO: Enable color scheme
  // const { colorScheme, setColorScheme } = useColorScheme();
  const { colorScheme } = useColorScheme();

  // TODO: Enable color scheme
  // useEffect(() => {
  //   setColorScheme(mode);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [mode]);

  return (
    <View
      style={[
        themeConfig[colorScheme!],
        { flex: 1, height: "100%", width: "100%" },
        props.style,
      ]}
    >
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}
