import './../css/NewPost.css'

const NewPost = ({}) => {
    return (
        <div className="body">
            <h2 className="new-post-head1"> Write your own post. All it takes is 15 minutes.</h2>

            <div className="new-post"> 
                <form onSubmit={() => {console.log('form submitted')}}>
                    <label htmlFor="newPostHead" > Post Heading </label>
                    <input type="text" name="newPostHead" id="newPostHead" maxLength={90}/>
                    <span className="char-limit"> 90/90</span>

                    <label htmlFor="newPostContent"> Post content </label>
                    <textarea name="newPostContent" id="newPostContent" maxLength={1750}/>
                    <span className="char-limit"> 1750/1750</span>
                    
                    <button type="submit" id="submit"> Submit </button> 
                </form>               
           </div>
        </div>
    )
}

export default NewPost