import "react-native-gesture-handler";

import { StyleSheet, Text, View } from "react-native";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcomtte</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
