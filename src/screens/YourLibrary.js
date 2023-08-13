// import './../css/YourLibrary.css'
import YourLibraryFeed from "../components/YourLibraryFeed";
import Tagger from './../components/Tagger.js'
import { useState } from "react";

const YourLibrary = ({postLibList}) => {
    const [libraryFeedState, setLibraryFeedState] = useState([false, false, false, false])

    return (
        <div className='body'>
            <div className='summary'> 
                <p style={{fontSize: '0.85rem', fontWeight:'bold'}}>
                    Total posts saved to library: {postLibList.length}
                </p>

                <Tagger libraryFeedState={libraryFeedState} setLibraryFeedState={setLibraryFeedState}/>
            </div>

            <div className="YourLibrary">
                <YourLibraryFeed feed={postLibList}/>
            </div>
        </div>        
    )
}

export default YourLibrary;