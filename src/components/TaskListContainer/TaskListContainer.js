import Search from '../Search/Search'
import TaskListItem from '../TaskListItem/TaskListItem';
import { TodoContext } from '../TodoContext';
import './TaskListContainer.css'
import TaskCount from '../TaskCount/TaskCount'
import React from 'react';



    //  const defaultTodos=[
    //      {text:'Cortar cebolla', completed:false},
    //      {text:'Intro a React',completed:false},
    //      {text:'Llorar con la llorona',completed:false},
    //      {text:'LALALALALA',completed:false}   
    //  ]
 


const TaskListContainer=()=>{
    
    

    return (
        <React.Fragment>
        <div className='task-list-container'>
            <h2>TASK LIST</h2>
            <TaskCount></TaskCount>
            <Search ></Search>
            <TodoContext.Consumer>
                 {(value)=>{
                    const error=value.error;
                    const loading=value.loading;
                    const searchTodos=value.searchTodos;
                    const completeTodos=value.completeTodos;
                    const deleteTodos=value.deleteTodos;
                    return(
                     <>
                      {error && <p>Desesperate, hubo un erro ...</p>}
                      {loading && <p>Estamos cargando, no desesperes...</p>}
                    {(!loading && !searchTodos.length) && <p>Crea tu primer TODO!</p>}
                     {searchTodos.map((item,index) =>(
                        <TaskListItem key={index} text={item.text} completed={item.completed} onComplete={()=>completeTodos(item.text)} onDelete={()=>deleteTodos(item.text)}></TaskListItem>
                    ))}
                    </>
                 )}}
            </TodoContext.Consumer>
        </div>
        </React.Fragment>
    )
}

export default TaskListContainer