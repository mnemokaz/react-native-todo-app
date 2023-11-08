import {React, useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {Navbar} from './src/Navbar';
import {AddTodo} from './src/AddTodo';
import {Todo} from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View>
      <Navbar title="Todo APP" />
      <StatusBar style="auto" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={item => item.id.toString}
          data={todos}
          renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
