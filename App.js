import "react-native-gesture-handler";
import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";

import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import { AuthenticationContextProvider } from "./src/authentication/authentication.context";
import { AuthenticationContext } from "./src/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyCuRJNOhSKjb-tgNBDvSk8jwZpDSUh0suQ",
  authDomain: "jobok-38612.firebaseapp.com",
  projectId: "jobok-38612",
  storageBucket: "jobok-38612.appspot.com",
  messagingSenderId: "230936511674",
  appId: "1:230936511674:web:6907b9fe030f5f188fae83",
  measurementId: "G-FQYX7S464M",
};

initializeApp(firebaseConfig);

import {
  useFonts as useBarlow,
  Barlow_500Medium,
} from "@expo-google-fonts/barlow";

import { theme } from "./src/theme";
import { LoginScreen } from "./src/screens/login.screen";
import { RegisterScreen } from "./src/screens/register.screen";
import { HomeScreen } from "./src/screens/home.screen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [barlowLoaded] = useBarlow({
    Barlow_500Medium,
  });

  if (!barlowLoaded) {
    return <AppLoading />;
  }

  // const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="Login"
            >
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthenticationContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
