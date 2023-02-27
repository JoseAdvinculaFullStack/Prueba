import Search from '../Search/Search'
import TaskListItem from '../TaskListItem/TaskListItem'
import './TaskListContainer.css'

const TaskListContainer=()=>{
    return (
        <div className='task-list-container'>
            <h2>TASK LIST</h2>
            <h3>complete 2 of 6</h3>
            <Search></Search>
            <TaskListItem></TaskListItem>
            <TaskListItem></TaskListItem>
            <TaskListItem></TaskListItem>
            <TaskListItem></TaskListItem>
        </div>
    )
}

export default TaskListContainer