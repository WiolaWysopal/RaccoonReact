import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ name?: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Details screen </Text>
      <Text style={styles.subtitle}> Hello, {params.name || " Stranger"}!</Text>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 20 },
});
