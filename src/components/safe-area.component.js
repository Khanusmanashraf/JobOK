import { SafeAreaView, Platform, StatusBar } from "react-native";
import styled from "styled-components";

const isAndroid = Platform.OS === "android";

export const SafeAreaFull = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => (isAndroid ? "white" : "white")};
`;
