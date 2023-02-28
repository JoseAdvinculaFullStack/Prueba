import './App.css';
import BodyLeft from './components/BodyLeft/BodyLeft';
import TaskListContainer from './components/TaskListContainer/TaskListContainer';



function App() {
  return (
    <div className="App">
      <BodyLeft></BodyLeft>
      <TaskListContainer></TaskListContainer>
    </div>
  );
}

export default App;
