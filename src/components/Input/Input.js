import React from 'react'
import './Input.css'

const Input =(props)=>{
    return(
        <React.Fragment>
        <input placeholder={props.text} className={`container-input${"-"+props.name}`}/>
        {props.children}
        </React.Fragment>
    )}
export default Input;