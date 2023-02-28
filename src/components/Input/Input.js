import React from 'react'
import './Input.css'

const Input =(props)=>{
    
    const onSearchValueChange=(event)=>{
        console.log(props.searchValue)
        props.setSearchValue(event.target.value);
    }


    return(
        <React.Fragment>

        {props.do==="add" 
        ? <input placeholder={props.text} className={`container-input${"-"+props.name}`}/>
        : <input placeholder={props.text} className={`container-input${"-"+props.name}`}  onChange={onSearchValueChange} value={props.searchValue}/>
        }
       
        {props.children}
        </React.Fragment>
    )}
export default Input;