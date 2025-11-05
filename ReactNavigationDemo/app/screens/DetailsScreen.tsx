import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type RootStackParamList = {
  Home: undefined;
  Details: { name: string };
};

type DetailsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Details">;
  route: RouteProp<RootStackParamList, "Details">;
};

export default function DetailsScreen({
  navigation,
  route,
}: DetailsScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ekran Szczegółów</Text>
      <Text style={styles.subtitle}>Witaj, {route.params.name}!</Text>
      <Button title="Wróć" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 20 },
});
