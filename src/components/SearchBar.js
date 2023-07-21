import '../css/SearchBar.css'
import { FaSearch as SearchIcon } from 'react-icons/fa'

const SearchBar = ({searchText, setSearchText}) => {
    return (
        <div className='search-bar'>
            <input 
                className='search-box'
                type="search" 
                name="search-text" 
                id="search-text" 
                placeholder="type your search text here"
                value={searchText}
                onChange={({target}) => {
                    console.log('search text modified');
                    console.log(target.value)
                    setSearchText(target.value)
                }}
            />

            <SearchIcon
                className='search-icon'
                size={14}
                focusable='true'    
                onClick={()=> {console.log('search icon clicked')}}/>
        </div>
    )
}

export default SearchBar