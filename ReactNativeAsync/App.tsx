import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

// Prosty komponent główny
export default function App() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Pobranie danych po uruchomieniu aplikacji
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Zapytanie do publicznego API
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Błąd pobierania danych:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Jeśli trwa ładowanie danych, pokaż spinner
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Ładowanie danych...</Text>
      </View>
    );
  }

  // Wyświetlenie listy pobranych postów
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista postów z JSONPlaceholder</Text>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  post: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  postTitle: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
});
