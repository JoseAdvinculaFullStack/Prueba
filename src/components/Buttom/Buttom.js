import './Buttom.css'

const Buttom =(props)=>{
    return(
        <button type='button' className='icons-button'>
           <img src={props.image} alt="imagen"></img>
        </button>
    )
}

export default Buttom