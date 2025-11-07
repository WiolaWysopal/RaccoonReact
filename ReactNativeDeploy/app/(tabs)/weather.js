// app/(tabs)/weather.js
import React from "react";
import { View, StyleSheet } from "react-native";
import Weather from "../components/Weather"; // import istniejącego komponentu

export default function WeatherScreen() {
  return (
    <View style={styles.container}>
      <Weather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
