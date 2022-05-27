import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export const Loader = ({ text }: { text?: string }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size="large" />
      {text && <Text style={styles.text}>Loading restaurants...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  text: {
    paddingTop: 20,
  },
});
