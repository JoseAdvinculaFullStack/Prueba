import './Search.css'
import Input from '../Input/Input'
import SearchIcon from '../../images/search-icon.svg'
const Search =({searchValue,setSearchValue})=>{
    return(
        <div className='container-search'>
            <Input name="tasklist" text="Search" do="search" searchValue={searchValue} setSearchValue={setSearchValue} >
             <img src={SearchIcon} alt="icon-search"></img> 
            </Input>
        </div>
    )
}

export default Search
