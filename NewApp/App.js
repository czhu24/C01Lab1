import ToDoList from './components/ToDoList';
import { View } from 'react-native';


function App() {

  return (
    <View>
      <ToDoList initialValues={[]}/>
    </View>
  );
}

export default App;


