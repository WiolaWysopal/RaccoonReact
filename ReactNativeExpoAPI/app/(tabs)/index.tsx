// app/(tabs)/index.js
import React from "react";
import { View, StyleSheet } from "react-native";
import Weather from "../components/Weather";

export default function Home() {
  return (
    <View style={styles.container}>
      <Weather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
