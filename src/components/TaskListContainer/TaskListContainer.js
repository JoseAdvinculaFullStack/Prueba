import Search from '../Search/Search'
import TaskListItem from '../TaskListItem/TaskListItem'
import { useState } from 'react'
import './TaskListContainer.css'
import TaskCount from '../TaskCount/TaskCount'

const defaultTodos=[
    {text:'Cortar cebolla', completed:false},
    {text:'Intro a React',completed:false},
    {text:'Llorar con la llorona',completed:false},
    {text:'LALALALALA',completed:false}   
]
 
const TaskListContainer=()=>{
    const [searchValue,setSearchValue]=useState('');
    const [todos,setTodos]=useState(defaultTodos);
    const completedTodos=(todos.filter(todo=>!!todo.completed)).length;
    const totalTodos=todos.length;
    let searchTodos=[];
    if(!searchValue.length >= 1){
        searchTodos=todos;
    }else{
        searchTodos=todos.filter(todo =>{
            const todoText=todo.text.toLowerCase()
            const SearchText=searchValue.toLowerCase();
            return todoText.includes(SearchText);
        })
    }

    const completeTodos=(text)=>{
        const todoIndex = todos.findIndex(todo=>todo.text===text);
        const newTodos=[...todos];
        newTodos[todoIndex].completed=true;
        setTodos(newTodos);
    };

    return (
        <div className='task-list-container'>
            <h2>TASK LIST</h2>
            <TaskCount completedTodos={completedTodos} totalTodos={totalTodos}></TaskCount>
            <Search searchValue={searchValue} setSearchValue={setSearchValue}></Search>
            {searchTodos.map((item,index) =>(
                <TaskListItem key={index} text={item.text} completed={item.completed} onComplete={()=>completeTodos(item.text)}></TaskListItem>
            ))}
        </div>
    )
}

export default TaskListContainer