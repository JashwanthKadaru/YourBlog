import { useState } from 'react'
import '../css/SearchBar.css'
import { FaSearch as SearchIcon } from 'react-icons/fa'

const SearchBar = ({searchText, setSearchText}) => {
    
    const [viewState, setViewState] = useState([true, false, false, false])

    const onClickHandler = (num) => {
        if(num===1) {setViewState([true, false, false, false])}
        else if(num===2) {setViewState([false, true, false, false])}
        else if(num===3) {setViewState([false, false, true, false])}
        else if(num===4) {setViewState([false, false, false, true])}
    }

    return (
        <div className='top-bar'>
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

            <div className='buttons'>
                <button className={(viewState[0])?'btn clicked':'btn'} onClick={() => { onClickHandler(1)}}>
                    Unread 
                </button>

                <button className={(viewState[1])?'btn clicked':'btn'} onClick={() => { onClickHandler(2)}}>
                    recent 7
                </button>

                <button className={(viewState[2])?'btn clicked':'btn'} onClick={() => { onClickHandler(3)}}>
                    last month
                </button>

                <button className={(viewState[3])?'btn clicked':'btn'} onClick={() => { onClickHandler(4)}}>
                    &nbsp;  All  &nbsp; 
                </button>

            </div>
        </div>
    )
}

export default SearchBar