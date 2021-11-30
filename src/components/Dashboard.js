import { connect } from 'react-redux'
import Tweet from './Tweet'

export default connect(({ tweets }) => {
    return { tweetsIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp) }
}
)((props) => {
    const { tweetsIds } = props;
    return <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
            {tweetsIds.map(tweetId => (
                <li key={tweetId}>
                    <Tweet id={tweetId} />
                </li>
            ))}
        </ul>
    </div>
})
