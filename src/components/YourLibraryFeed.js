import '../css/YourLibraryFeed.css'
import PostFeed from './PostFeed';
import { useState } from 'react';

const YourFeed = ({feed}) => {
  
  const [ addToLibrary, setAddToLibrary ] = useState(true)
  const [ markTag, setMarkTag ] = useState(true)

  return (
        <div className='your-feed'>
            { 
              feed.map((item) => { 
                return (
                    <PostFeed  color={1} isTagged={true} addToLibrary={addToLibrary} markTag={markTag} setAddToLibrary={setAddToLibrary} setMarkTag={setMarkTag}/>
                ) 
              })
            }
        </div>    
    )
}

export default YourFeed;