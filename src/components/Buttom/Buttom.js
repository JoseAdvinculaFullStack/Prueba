import './Buttom.css'

const Buttom =(props)=>{
    return(
        <button type='button' className={`icons-button${"-"+props.name}`}>
        {props.image===null || undefined ? props.children : <img src={props.image} alt="imagen"></img>} 
        </button>
    )
}

export default Buttom