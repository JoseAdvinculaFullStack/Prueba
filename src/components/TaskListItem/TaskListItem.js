import React from 'react'
import './TaskListItem.css'
import Buttom from '../Buttom/Buttom'
import Checkmark from '../../images/Checkmark.svg'
import Checkcancel from '../../images/matt-icons_cancel.svg'
const BodyItem=()=>{
    return(
        <div className='container-list-item'>
            Comer Alitas
        </div>
    )
}
const TaskListItem=()=>{
    return (   
       <React.Fragment>
            <BodyItem></BodyItem>
            <div className='container-buttons'>
            <Buttom image={Checkmark} name="icon"></Buttom>
            <Buttom image={Checkcancel} name="icon"></Buttom>
            </div>

       </React.Fragment>
    )
}

export default TaskListItem