import "react-native-gesture-handler";

import React, { useState, useContext } from "react";

import { SafeAreaFull } from "../components/safe-area.component";
import {
  Container,
  AuthInput,
  SignInButton,
  ButtonText,
  BottomText,
  HL,
  Logo,
  IconsContainer,
  Icons,
  Shadow,
} from "./components/login.styles";
import { AuthenticationContext } from "../authentication/authentication.context";
import { TouchableOpacity } from "react-native";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useContext(AuthenticationContext);

  return (
    <SafeAreaFull>
      <Container>
        <Logo source={require("../../assets/icon.png")} />
        <AuthInput
          placeholder="   Email Address"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        ></AuthInput>
        <AuthInput
          placeholder="   Password"
          value={password}
          keyboardType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />

        <Shadow>
          <SignInButton onPress={() => navigation.navigate("Home")}>
            <ButtonText>Sign In</ButtonText>
          </SignInButton>
        </Shadow>

        <BottomText>Or Sign Up with</BottomText>
        <IconsContainer>
          <TouchableOpacity>
            <Icons source={require("../../assets/google.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons source={require("../../assets/facebook.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons source={require("../../assets/twitter.png")} />
          </TouchableOpacity>
        </IconsContainer>
        <BottomText>
          Don’t have an Account?{" "}
          <HL onPress={() => navigation.navigate("Register")}>Sign Up</HL>
        </BottomText>
      </Container>
    </SafeAreaFull>
  );
};
