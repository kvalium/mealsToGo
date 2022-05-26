import React from "react";

import { StyleSheet, Text, View } from "react-native";

export function List() {
  return (
    <View style={styles.container}>
      <Text>list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});
