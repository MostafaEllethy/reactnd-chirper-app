import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets'

const tweets = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return action.tweets
        case ADD_TWEET:
            {
                const { tweet } = action
                let rTweet = {}
                if (tweet.replyingTo) {
                    const tempTweet = state[tweet.replyingTo]
                    rTweet = {
                        [tempTweet.id]: { ...tempTweet, replies: tempTweet.replies.concat([tweet.id]) }

                    }
                }
                return {
                    ...state,
                    ...rTweet,
                    [tweet.id]: tweet,
                }
            }
        case TOGGLE_TWEET:
            {
                const tweet = state[action.tweetId]
                return {
                    ...state,
                    [tweet.id]: {
                        ...tweet,
                        likes: action.hasLiked ? tweet.likes.filter(uid => uid !== action.authUser) : tweet.likes.concat([action.authUser])
                    }
                }
            }
        default:
            return state;
    }
}

export default tweets