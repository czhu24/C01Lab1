import { TouchableOpacity } from 'react-native-web';


import React from 'react';

function AddTask() {

const [toDos, setToDos] = useState([]);

const [newTitle, setNewTitle] = useState('');

function handleAddTask(e) {
    e.preventDefault();
    setToDos([...toDos, newTitle])
    setNewTitle('')
}

function handleChange(e) {
    setNewTitle(e.target.value);
}


return (
    <View>
        <input type="text" value={newTitle} onChange={handleChange}/>
        <button onClick={handleAddTask}>Add Task To</button>
    </View>
);
}
export default AddTask;