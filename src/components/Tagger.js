import { useEffect, useState } from 'react'
import './../css/Tagger.css'
import {AiFillTags, AiFillTag} from 'react-icons/ai'
import {BsBookmarkFill} from 'react-icons/bs'
const Tagger = ({libraryFeedState, setLibraryFeedState}) => {

    const [showTags, setShowTags] = useState(true)

    useEffect(() => {
        const handler = () => { 
            if(window.innerWidth < 600){
            setShowTags(false)
            } else {
            setShowTags(true)
            }
            // console.log(window.innerWidth)
        }

        window.addEventListener('resize', handler)

        return () => {
            window.removeEventListener('resize', handler)
        }
    }, [])
    
    return (
        <div className='tagger'>
            
            <span className={(showTags)? 'tag-btn btn-show': 'tag-btn'} onClick={() => {setShowTags(!showTags)}}> <AiFillTags size={20} color={(showTags)?'#232f47':'white'}/> </span>

            <span className={(showTags)?'tags': 'tags hide'}>
                <div className={(libraryFeedState[0])?'tag red selected':'tag red'} onClick= {() => {setLibraryFeedState([!libraryFeedState[0], libraryFeedState[1], libraryFeedState[2], libraryFeedState[3]])}}> <BsBookmarkFill size={16} color='red' /> </div>
                <div className={(libraryFeedState[1])?'tag blue selected':'tag blue'} onClick= {() => {setLibraryFeedState([libraryFeedState[0], !libraryFeedState[1], libraryFeedState[2], libraryFeedState[3]])}}> <BsBookmarkFill size={16} color='blue' /> </div>
                <div className={(libraryFeedState[2])?'tag green selected':'tag green'} onClick= {() => {setLibraryFeedState([libraryFeedState[0], libraryFeedState[1], !libraryFeedState[2], libraryFeedState[3]])}}> <BsBookmarkFill size={16} color='green' /> </div>
                <div className={(libraryFeedState[3])?'tag black selected':'tag black'} onClick= {() => {setLibraryFeedState([libraryFeedState[0], libraryFeedState[1], libraryFeedState[2], !libraryFeedState[3]])}}> <BsBookmarkFill size={16} color='black' /> </div>
            </span>
        </div>
    )
}

export default Tagger