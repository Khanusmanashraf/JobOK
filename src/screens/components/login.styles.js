import { TouchableOpacity, Text, View, Image, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import styled from "styled-components";

export const NavContainer = styled(NavigationContainer)`
  background-color: white;
`;

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const AuthInput = styled(TextInput)`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 30px;
  background-color: white;
  border: 3px solid rgba(113, 104, 211, 0.5);
  padding: 15px;
`;

export const SignInButton = styled(TouchableOpacity)`
  width: 100%;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.ui.dark};
`;

export const Shadow = styled(View)`
  shadow-color: black;
  border-radius: 30px;
  elevation: 15;
  shadow-opacity: 0.3;
  margin-top: 30px;
`;

export const ButtonText = styled(Text)`
  color: white;
  text-align: center;

  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const BottomText = styled(Text)`
  color: black;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  margin-top: 40px;
`;

export const HL = styled(Text)`
  color: #7168d3;
  text-align: center;
`;

export const Logo = styled(Image)`
  align-self: center;
  margin-bottom: 15px;
`;

export const IconsContainer = styled(View)`
  flex-direction: row;
  padding: 5px;
  justify-content: center;
  margin-top: 10px;
`;

export const Icons = styled(Image)`
  align-self: center;
  margin: 0 5px;
`;
