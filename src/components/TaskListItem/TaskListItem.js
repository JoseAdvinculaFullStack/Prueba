import React from 'react'
import './TaskListItem.css'
import Buttom from '../Buttom/Buttom'
import Checkmark from '../../images/Checkmark.svg'
import Checkcancel from '../../images/matt-icons_cancel.svg'
const BodyItem=(props)=>{
    return(
        <div className='container-list-item'>
             {props.text} 
        </div>
    )
}
const TaskListItem=(props)=>{
    return (   
       <React.Fragment>
            <BodyItem text={props.text}></BodyItem>
            <div className='container-buttons'>
            <Buttom image={Checkmark} name="icon" do="checkmark" completed={props.completed} onComplete={props.onComplete}></Buttom>
            <Buttom image={Checkcancel} name="icon" do ="checkcancel"  completed={props.completed} onComplete={props.onComplete}></Buttom>
            </div>
 
       </React.Fragment>
    )
}

export default TaskListItem