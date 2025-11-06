import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Weather() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Symulacja danych pogodowych (mock)
    const mockData = {
      main: { temp: 22 },
      weather: [{ description: "słonecznie" }],
    };

    const timer = setTimeout(() => {
      setData(mockData);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Obsługa błędu lub brak danych
  if (error) {
    return (
      <View style={styles.container}>
        <Text>Błąd ładowania danych: {error}</Text>
      </View>
    );
  }

  if (!data || !data.main || !data.weather) {
    return (
      <View style={styles.container}>
        <Text>Ładowanie danych pogodowych...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Temperatura: {data.main.temp}°C</Text>
      <Text>Opis: {data.weather[0].description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
