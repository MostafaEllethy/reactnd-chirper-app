import { connect } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'
import { Fragment } from 'react'
import { useParams } from "react-router-dom";


export default connect(({ tweets }) => ({
    tweets
}))((props) => {
    const id = useParams().id
    const { tweets } = props
    const replies = tweets[id].replies.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp);

    return (
        <div>
            <Tweet id={id} />
            <NewTweet id={id} />
            {replies.length !== 0 && (
                <Fragment>
                    <h3 className='center'>Replies</h3>
                    <ul>
                        {replies.map(id => <li key={id}>
                            <Tweet id={id} />
                        </li>)}
                    </ul>
                </Fragment>
            )}
        </div>
    )
})