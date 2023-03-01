import "react-native-gesture-handler";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import React, { useContext } from "react";
// import { createStackNavigator } from "@react-navigation/stack";

import {
  useFonts as useBarlow,
  Barlow_400Regular,
} from "@expo-google-fonts/barlow";

import { theme } from "./src/theme";
import { SafeAreaFull } from "./src/components/safe-area.component";
// import { LoginScreen } from "./src/screens/login.screen";

// const Stack = createStackNavigator();

export default function App() {
  const [barlowLoaded] = useBarlow({
    Barlow_400Regular,
  });

  if (!barlowLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaFull>
          <Text>Welcomtte</Text>
        </SafeAreaFull>

        {/* <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator> */}
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
