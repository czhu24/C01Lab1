import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AddTask from './AddTask';

function TodoList() {
const [toDos, setToDos] = useState([]);

const [newTitle, setNewTitle] = useState('');

function addToDo(e) {
    e.preventDefault();
    setToDos([...toDos, newTitle])
    setNewTitle('')
}

function removeToDo(id) {
    const newToDos=[...toDos]
    newToDos.splice(id, 1)
    setToDos(newToDos)
}

function handleChange(e) {
    setNewTitle(e.target.value);
}

return (
    <View>
        <Text>To Do List</Text>
        <form>
            <input type="text" value={newTitle} onChange={handleChange}/>
            <button onClick={addToDo}>Add Task</button>
    </form>
        <div>
            {toDos.map((todo, id) => (
                <li key={todo}>{todo}
                <button onClick={() =>removeToDo(id)}>Delete</button>
                </li>
            ))}
        </div>
    </View>
 );
}
export default TodoList;



