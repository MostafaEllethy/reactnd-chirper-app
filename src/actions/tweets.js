import { saveLikeToggle, saveTweet } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

export const receiveTweets = (tweets) => ({
    type: RECEIVE_TWEETS,
    tweets
})

export const toggleTweet = ({ tweetId, authUser, hasLiked }) => ({
    type: TOGGLE_TWEET,
    tweetId,
    authUser,
    hasLiked
})

export const addTweet = (tweet) => ({
    type: ADD_TWEET,
        tweet
})

export const handleAddTweet = (text, replyingTo) => {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const { authUser } = getState();

        return saveTweet({
            text,
            author: authUser,
            replyingTo
        }).then(tweet => dispatch(addTweet(tweet))).then(() => dispatch(hideLoading()))
    }
}

export const handleToggleTweet = (info) => {
    return (dispatch) => {
        dispatch(toggleTweet(info))
        const { tweetId, authUser, hasLiked } = info
        return saveLikeToggle({ id: tweetId, authedUser: authUser, hasLiked }).catch(e => {
            console.error("Error while liking tweet", e)
            dispatch(toggleTweet(info))
            alert("There was an error liking the tweet.")
        })
    }
}