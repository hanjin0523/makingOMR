import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Camera(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Camera</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Camera;