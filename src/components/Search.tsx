import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Search() {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: 50,
    justifyContent: "center",
    padding: 16,
  },
});
