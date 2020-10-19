import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, Alert } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Sandbox from './components/sandbox'

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'Buy Coffee', key: 1},
    {text: 'Create an App', key: 2},
    {text: 'Play on the TV', key: 3},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {

    if(text.length <= 3)
    {
      Alert.alert('OOPS!', 'more than 3 character!', [{
        text: 'Understood', onPress: ()=> console.log('alert Closed')}
      ]);
    }
    else{
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ];
      })
    }
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress= {() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler = {pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex: 1,
    padding: 40,
  },
  list:{
    flex:1,
    marginTop: 20,
  },
  header:{
    backgroundColor:'pink',
    padding: 20,
  },
  boldText:{
    fontWeight: 'bold',
  },
  buttonContainer:{
    padding:20,
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});
