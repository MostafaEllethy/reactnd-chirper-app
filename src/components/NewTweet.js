import { useState } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Navigate } from 'react-router-dom'

export default connect()((props) => {
    const [toHome, setToHome] = useState(false)
    const [text, setText] = useState('')
    if (toHome) return <Navigate to="/" replace={true} />;
    const { dispatch, id } = props
    const tweetLeft = 280 - text.length
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddTweet(text, id))
        console.log(id)
        if (!id) setToHome(true)
        setText('')
    }
    return (
        <div>
            <h3 className='center'>Compose new Tweet</h3>
            <form onSubmit={handleSubmit} className='new-tweet'>
                <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='Placeholder...' className='textarea' maxLength='280'></textarea>
                <div className='tweet-length'>
                    {tweetLeft}
                </div>
                <button className='btn' type='submit' disabled={text === ''}>SUBMIT</button>
            </form>
        </div>
    )
})