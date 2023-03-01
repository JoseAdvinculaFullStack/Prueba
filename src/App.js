import './App.css';
import BodyLeft from './components/BodyLeft/BodyLeft';
import TaskListContainer from './components/TaskListContainer/TaskListContainer';
import { TodoProvider } from './components/TodoContext';



function App() {
  return (
    <div className="App">
      <BodyLeft></BodyLeft>
      <TodoProvider>
      <TaskListContainer></TaskListContainer>
      </TodoProvider>
    </div>
  );
}

export default App;
