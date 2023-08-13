import { useState } from "react"
import "./../css/PostRead.css"
import {BsBookmarkFill, BsBookmark} from 'react-icons/bs'
import MarkTag from "../components/MarkTag"


const PostRead = ({replyList}) => {
    let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolore nobis magnam eligendi! Vel libero quas eos suscipit corporis sint maiores, aut rerum cum, itaque tenetur necessitatibus voluptatem est doloremque!"

    const [showReplyBox, setShowReplyBox] =useState(false)
    const [postTag, setPostTag] = useState(0)

    const onClickReplySend = () => {

    } 

    return (
        <div className="body">

            <div className="post-div">
                <div className="postHeader">
                    <h3> The First Post Head. An Awesome Read About React Framework for NodeJS Frontend ;{")"}. </h3>
                    <p> 
                        written by <span>Solomon Shankar</span>, posted on <span>June 3rd 2023</span>, <span>Monday</span>
                    </p>
                </div>

                <div className="postBody">
                    <p className='para' id='FirstPara'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolore nobis magnam eligendi! Vel libero quas eos suscipit corporis sint maiores, aut rerum cum, itaque tenetur necessitatibus voluptatem est doloremque!
                    </p>

                    <p className='para'>
                        exercitationem dicta neque voluptates repellat expedita fugiat alias, ea adipisci eligendi ipsam nisi dignissimos at est excepturi dolorum ratione! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quisquam corrupti exercitationem similique sint commodi optio corporis dignissimos minus inventore!
                    </p>
                </div>
            </div>

            <div className='button-div
            '>
                <MarkTag postTag={postTag} setPostTag={setPostTag}/>

                <button className='btn' onClick={() => {setShowReplyBox(!showReplyBox)}}> {(showReplyBox)?'close':'Reply'} </button>
            </div>

            <div className={(showReplyBox)?'reply-box':'reply-box hide-reply-type-div'}>

                <div className="reply-text">
                    <textarea name="reply-content" id="replycontent" cols="30" rows="3" placeholder="type your reply here ..."> </textarea>
                </div>

                <div className="btn-div1">
                    <button type="button" className={(true)?"reply-btn":"reply-btn disabled"} onClick={ onClickReplySend() }> send </button>
                </div>

            </div>
            <div className="reply-div">
                <p id='summary'> replies: &nbsp; <span>{replyList.length}</span></p>
                {
                    replyList.map((item) => {
                    return (
                        <div className="reply">
                            <p className="reply-head"> 
                                 @ 
                                <span className="replyee-name">{' '} Solomon Shankar,</span>

                                {' '} &nbsp;
                                commented at

                                <span className="reply-date">  9:43pm, 04/06/2023</span>
                            </p>

                            <p className="reply-body"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ea. </p>

                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}

export default PostRead