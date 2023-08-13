import './../css/MarkTag.css'
import {BsBookmarkFill, BsBookmark} from 'react-icons/bs'

const MarkTag = ({postTag,setPostTag}) => {
    
    const getPostTag = () => {
        switch(postTag)
        {
                case 0: return <BsBookmark color="white" />

                case 1: return <BsBookmarkFill color="red" />

                case 2: return <BsBookmarkFill color="blue" />
                
                case 3: return <BsBookmarkFill color="green" />
                
                case 4: return <BsBookmarkFill color="black" />

                default: return <BsBookmark color="white"/>
        }
    }

    return (
        <div className="mark-tag" onClick={() =>   {setPostTag((postTag+1)%5)}}>
            { 
                getPostTag()
            }
        </div>
    )
}

export default MarkTag;