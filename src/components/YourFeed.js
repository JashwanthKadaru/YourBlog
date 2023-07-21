import '../css/YourFeed.css'
import PostFeed from './PostFeed';
const YourFeed = ({feed}) => {
    return (
        <div className='your-feed'>
            { 
              feed.map((item) => { 
                return (
                    <PostFeed />
                ) 
              })
            }
        </div>    
    )
}

export default YourFeed;