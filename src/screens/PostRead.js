import "./../css/PostRead.css"

const PostRead = ({replyList}) => {
    let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolore nobis magnam eligendi! Vel libero quas eos suscipit corporis sint maiores, aut rerum cum, itaque tenetur necessitatibus voluptatem est doloremque!"

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
                <button className='btn'> Reply </button>
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