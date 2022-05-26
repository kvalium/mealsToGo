import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { List } from "./src/components/List";
import { Search } from "./src/components/Search";

const getPaddingTop = () =>
  Platform.OS === "android" && StatusBar.currentHeight
    ? StatusBar.currentHeight
    : 0;

function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Search />
        <List />
      </SafeAreaView>
      <ExpoStatusBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getPaddingTop(),
  },
});

export default App;
