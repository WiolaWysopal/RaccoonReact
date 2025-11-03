import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { increment, decrement } from './redux/actions';

const Counter = () => {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
