import Search from '../Search/Search'
import TaskListItem from '../TaskListItem/TaskListItem'
import { useEffect, useState } from 'react'
import './TaskListContainer.css'
import TaskCount from '../TaskCount/TaskCount'

//    const defaultTodos=[
//        {text:'Cortar cebolla', completed:false},
//        {text:'Intro a React',completed:false},
//        {text:'Llorar con la llorona',completed:false},
//        {text:'LALALALALA',completed:false}   
//    ]
 
function useLocalStorage(itemName,initialValue){
    
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(true);
    const [item,setItem]=useState(initialValue);
    useEffect(()=>{
     setTimeout(()=>{
        try{
        const localStorageItem= localStorage.getItem(itemName);
        let parseItem;
        if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parseItem=[];
        }else{
            parseItem=JSON.parse(localStorageItem)
        }

        setItem(parseItem);
        setLoading(false);
    }catch(error){
        setError(error)
    }
     
     },1000)   
    })
    
    
    const saveItem=(newItem) =>{
        try{
        const stringifiedItem=JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
        } catch{
            setError(error);
        }
    }

    return {
        item,
        saveItem,
        loading,
        error
    };
    
}


const TaskListContainer=()=>{
    
    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error
    } = useLocalStorage('PANA_V2',[]);

    const [searchValue,setSearchValue]=useState('');
    
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
        saveTodos(newTodos);
    };

    const deleteTodos=(text)=>{
        const todoIndex = todos.findIndex(todo=>todo.text===text);
        const newTodos=[...todos];
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    };


    return (
        <div className='task-list-container'>
            <h2>TASK LIST</h2>
            <TaskCount completedTodos={completedTodos} totalTodos={totalTodos}></TaskCount>
            <Search searchValue={searchValue} setSearchValue={setSearchValue}></Search>
            {error && <p>Desesperate, hubo un erro ...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchTodos.length) && <p>Crea tu primer TODO!</p>}
            
            {searchTodos.map((item,index) =>(
                <TaskListItem key={index} text={item.text} completed={item.completed} onComplete={()=>completeTodos(item.text)} onDelete={()=>deleteTodos(item.text)}></TaskListItem>
            ))}
        </div>
    )
}

export default TaskListContainer