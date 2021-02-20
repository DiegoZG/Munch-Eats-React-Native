import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useSource,
  SourceSansPro_400Regular,
  SourceSansPro_400Regular_Italic,
} from "@expo-google-fonts/source-sans-pro";

import {
  useFonts as useBalsamiq,
  BalsamiqSans_400Regular,
} from "@expo-google-fonts/balsamiq-sans";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [sourceLoaded] = useSource({
    SourceSansPro_400Regular_Italic,
  });

  const [balsamiqLoaded] = useBalsamiq({
    BalsamiqSans_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded || !sourceLoaded || !balsamiqLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
