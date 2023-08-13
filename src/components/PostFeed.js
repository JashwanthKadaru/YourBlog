import '../css/PostFeed.css'
import {BsBookmarkFill} from 'react-icons/bs'
import MarkTag from './MarkTag'
import {BiSolidAddToQueue} from 'react-icons/bi'
import {CiBookmarkRemove} from 'react-icons/ci'
import { useState } from 'react'

const PostFeed = ({isTagged, color, addToLibrary=false, markTag=false, setAddToLibrary, setMarkTag}) => {

    const [postTag, setPostTag] = useState(0)

    let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolore nobis magnam eligendi! Vel libero quas eos suscipit corporis sint maiores, aut rerum cum, itaque tenetur necessitatibus voluptatem est doloremque!"

    // let isTagged =true;
    const setTagColor = (color) => {
        switch(color) {
            case 1: return "red";

            case 2: return "blue";

            case 3: return "green";

            case 4: return "black";

            default: return ""
        }
    }
    return (
        <div className='your-post-feed'>
            <div className='post-head'> 
                <h3> My First Post  {(isTagged)?<BsBookmarkFill id='bookmark' size={16} color={setTagColor(1)}/>: null}
                
                {(addToLibrary)?<BiSolidAddToQueue id='bookmark' size={16} color={"white"} onClick={() => {setAddToLibrary(!addToLibrary); setMarkTag(true)}}/>: <CiBookmarkRemove id='bookmark' size={16} color={"white"} onClick={() => {setAddToLibrary(!addToLibrary); setMarkTag(false)}}/>}

                {(markTag)?<MarkTag postTag={postTag} setPostTag={setPostTag}/>: null}

                </h3>

                <p> 
                    written by <span>Solomon Shankar</span>, posted on <span>June 3rd 2023</span>, <span>Monday</span> 
                </p>
            </div>

            <div className='post-body'> 
                <p className='post-text'> 
                    {text.slice(0, 200) + ' . . .'}                
                </p>
            </div>
        </div>
    )
}

export default PostFeed