import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthUser } from '../actions/authUser'

const AUTH_USER_ID = 'sarah_edo'

export const handleInitialData = () => {
    return (dispatch) => {
        return getInitialData().then(({ users, tweets }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(setAuthUser(AUTH_USER_ID))
        })
    }
}