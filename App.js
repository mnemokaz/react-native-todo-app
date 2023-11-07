import {React, useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Navbar} from './src/Navbar';
import {AddTodo} from './src/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      titile: title,
    };
  };

  return (
    <View>
      <Navbar title="Todo APP" />
      <StatusBar style="auto" />
      <View style={styles.container}></View>
      <AddTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
