import React from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext=React.createContext();

function TodoProvider(props){


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





    return(
        <TodoContext.Provider value={
            {
                loading,
                error,
                totalTodos,
                completeTodos,
                searchValue,
                setSearchValue,
                searchTodos,
                completedTodos,
                deleteTodos
                
            }
        }>
            {props.children}
        </TodoContext.Provider>
    )
}


export {TodoContext,TodoProvider}