import React from 'react'
import './Buttom.css'


const ButtomIcon=(props)=>{
    //  const CheckCance=()=>{
 
         
    //  }
    // const CheckMark=()=>{
    //     console.log(`Hola mi estimado es ${props.do}`)
    // }
    return(
        
        <React.Fragment>
            {props.do==="checkmark" ?
        <button type='button' className={`icons-button${"-"+props.name}`} onClick={props.onComplete}>
         <img src={props.image} alt="imagen"></img> 
        </button> :
         <button type='button' className={`icons-button${"-"+props.name}`} onClick={props.onComplete}>
         <img src={props.image} alt="imagen"></img> 
        </button>}
        </React.Fragment>
    )
}

const ButtomTask=(props)=>{
    return(
        <button type='button' className={`icons-button${"-"+props.name}`} onClick={()=>{console.log("Hola")}}>
         {props.children} 
        </button>
    )
}

const Buttom =(props)=>{
    return(
        <React.Fragment>
        {props.name==="task" ? <ButtomTask image={props.image} name={props.name} >{props.children}</ButtomTask> : <ButtomIcon image={props.image} name={props.name} do={props.do} onComplete={props.onComplete} completed={props.completed} />}      
        </React.Fragment>
    )
}

export default Buttom