import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets'

const tweets = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return action.tweets
        case TOGGLE_TWEET:
            const tweet = state[action.tweetId]
            return {
                ...state,
                [tweet.id]: {
                    ...tweet,
                    likes: action.hasLiked ? tweet.likes.filter(uid => uid !== action.authUser) : tweet.likes.concat([action.authUser])
                }
            }
            break;
        default:
            return state;
    }
}

export default tweets