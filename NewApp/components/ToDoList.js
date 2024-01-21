import React, { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { View, Text, Button, StyleSheet } from 'react-native';
import AddTask from './AddTask';

function TodoList({initialValues}) {
    const [toDos, setToDos] = useState(initialValues.map((initial) => ({id: uuidv4(), title: initial })));


function addToDo(title) {
    setToDos([...toDos, {id: uuidv4(), title: title}])
}

function removeToDo(id) {
    setToDos(toDos.filter((toDo)=>toDo.id != id))
}

return (
    <View style={styles.todoListContainer}>
        <Text style={styles.Header}>To Do List</Text>

        <AddTask onAddTask={addToDo}/>

        <View>
            {toDos.map((todo) => (
                <View key = {todo.id} style={styles.todoItem}>
                    <Text>{todo.title}</Text>
                    <Button onPress={() =>removeToDo(todo.id)} title='Delete' />
                </View>
            ))}
        </View>
    </View>
 );
}
export default TodoList;

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
    Header: {
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    }
});


