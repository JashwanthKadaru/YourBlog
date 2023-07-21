import SearchBar from './../components/SearchBar'
import YourFeed from './../components/YourFeed'

const Home = ({searchText, setSearchText, postFeed}) => {
    return (
        <div className='body'>
          <SearchBar searchText={searchText} setSearchText={setSearchText}/>

          <YourFeed feed={postFeed}/>
        </div>        
    )
}

export default Home