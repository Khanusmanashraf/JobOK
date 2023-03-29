import "react-native-gesture-handler";

import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

import { SafeAreaFull } from "../components/safe-area.component";

export const SignInButton = styled(TouchableOpacity)`
  width: 100%;
  border-radius: 30px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.ui.dark};
`;

export const ButtonText = styled(Text)`
  color: white;
  text-align: center;
`;

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaFull>
      <View style={styles.container}>
        <SignInButton>
          <ButtonText>Home</ButtonText>
        </SignInButton>
      </View>
    </SafeAreaFull>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
});
