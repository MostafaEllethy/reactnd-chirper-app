import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'

export default connect(({ authUser, users, tweets }, { id }) => {
    const tweet = tweets[id]
    return {
        authUser,
        tweet: formatTweet(tweet, users[tweet.author], authUser)
    }
})((props) => {
    console.log(props)
    return <div className='tweet'>TWEET</div>
})