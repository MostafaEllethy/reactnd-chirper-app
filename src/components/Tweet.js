import { connect } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers'
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'
import { useCallback } from 'react'
import { handleToggleTweet } from '../actions/tweets'
import { Link, useNavigate } from 'react-router-dom'

export default connect(({ authUser, users, tweets }, { id }) => {
    const tweet = tweets[id]
    return {
        authUser,
        tweet: formatTweet(tweet, users[tweet.author], authUser, tweets[tweet.replyingTo])
    }
})((props) => {
    let navigate = useNavigate()
    const { dispatch, tweet, authUser } = props
    const { name, avatar, timestamp, text, hasLiked, likes, replies, id, parent } = tweet
    const toParent = useCallback((e, id) => {
        e.preventDefault()
        navigate(`/tweet/${id}`)
    }, [])
    const handleLike = useCallback((e) => {
        e.preventDefault()
        dispatch(handleToggleTweet({
            tweetId: id,
            authUser,
            hasLiked
        }))
    }, [hasLiked])
    return <Link to={`/tweet/${id}`} className='tweet'>
        <img src={avatar} alt={`Avatar for ${name}`} className='avatar' />

        <div className='tweet-info'>
            <div>
                <span>{name}</span>
                <div>{formatDate(timestamp)}</div>
                {parent && (
                    <button className='replying-to' onClick={(e) => toParent(e, parent.id)}>
                        Replying to @{parent.author}
                    </button>
                )}
                <p>{text}</p>
            </div>
            <div className='tweet-icons'>
                <TiArrowBackOutline className='tweet-icon' />
                <span>{replies !== 0 && replies}</span>
                <button className='heart-button' onClick={handleLike}>
                    {hasLiked ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' /> : <TiHeartOutline className='tweet-icon' />}
                </button>
                <span>{likes !== 0 && likes}</span>
            </div>
        </div>
    </Link>
})