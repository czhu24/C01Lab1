import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function AddTask({onAddTask}) {

    const [title, setNewTitle] = useState('');

    function handleAddTask() {
        if (title.trim() !== '') {
            onAddTask(title)
            setNewTitle('')
        }
    }


    return (
        <View style={styles.addTodoForm}>
            <TextInput value={title} onChangeText={(e) => setNewTitle(e)} style={styles.input}/>
            <Button onPress={handleAddTask} title='Add Task' />
        </View>
    );
}
export default AddTask;

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});