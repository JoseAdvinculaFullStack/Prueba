import './Input.css'

const Input =(props)=>{
    return(
        <input placeholder={props.text} className={`container-input${"-"+props.name}`}>

        </input>
    )
}

export default Input