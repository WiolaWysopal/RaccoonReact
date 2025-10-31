import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Nagłówek */}
      <Text style={styles.title}>Witaj w mojej aplikacji!</Text>

      {/* Obrazek */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />

      {/* Podtytuł / opis */}
      <Text style={styles.subtitle}>
        To jest prosta strona startowa stworzona w React Native.
      </Text>
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

export default App;
