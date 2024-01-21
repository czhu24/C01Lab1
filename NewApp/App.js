import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import AddTask from './components/AddTask';
import ToDoList from './components/ToDoList';


function App() {

  return (
    <div className='App'>
      <ToDoList/>
    </div>
  );
}

export default App;


