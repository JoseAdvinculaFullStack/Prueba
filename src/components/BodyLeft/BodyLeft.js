import ImageBook from '../ImageBook/ImageBook';
import Input from '../Input/Input';
import Buttom from '../Buttom/Buttom';
import './BodyLeft.css';
import Person from '../../images/Person.svg';

const BodyLeft=()=>{
    return(
        <div className='container-body-left'>
            <h1>YOUR TASK</h1>
            <ImageBook></ImageBook>
            <div className='container-add-task'>
                <h3>Task Name</h3>
                <div className='input-container-body-left'>
                    <Input text="Write your task" name="tasklist"></Input>
                </div>
                <Buttom image={null} name="task">
                    <p>Add Task</p>
                </Buttom>
            </div>
            <img src={Person} alt="Person"></img>
        </div>
    )
}

export default BodyLeft;