import { useState } from 'react';
import '../css/YourFeed.css'
import PostFeed from './PostFeed';
const YourFeed = ({feed}) => {
    const f = [1,2,3]
    
    const [ addToLibrary, setAddToLibrary ] = useState(true)
    const [ markTag, setMarkTag ] = useState(true)
    return (
        <div className='your-feed'>
            { 
              
              feed.map((item) => { 
                console.log(feed.indexOf(item))
                return (
                    <PostFeed key={feed.indexOf(item)} color={1} isTagged={false} addToLibrary={addToLibrary} markTag={markTag} setAddToLibrary={setAddToLibrary} setMarkTag={setMarkTag}/>
                ) 
              })
            }
        </div>    
    )
}

export default YourFeed;