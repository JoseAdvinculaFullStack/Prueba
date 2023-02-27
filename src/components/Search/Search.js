import './Search.css'
import Input from '../Input/Input'
import SearchIcon from '../../images/search-icon.svg'
const Search =()=>{
    return(
        <div className='container-search'>
            <Input name="tasklist" text="Search" >
             <img src={SearchIcon} alt="icon-search"></img> 
            </Input>
        </div>
    )
}

export default Search
