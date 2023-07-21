// import './../css/YourLibrary.css'
import YourLibraryFeed from "../components/YourLibraryFeed";

const YourLibrary = ({postLibList}) => {
    return (
        <div className='body'>
            <div className='summary'> 
                <p style={{fontSize: '0.85rem'}}>
                    Total posts saved to library: {postLibList.length}
                </p>
            </div>

            <div className="YourLibrary">
                <YourLibraryFeed feed={postLibList}/>
            </div>
        </div>        
    )
}

export default YourLibrary;