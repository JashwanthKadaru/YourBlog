import '../css/PostFeed.css'

const PostFeed = () => {
    let text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae dolore nobis magnam eligendi! Vel libero quas eos suscipit corporis sint maiores, aut rerum cum, itaque tenetur necessitatibus voluptatem est doloremque!"

    return (
        <div className='your-post-feed'>
            <div className='post-head'> 
                <h3> My First Post </h3>

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