import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import TweetPage from './TweetPage'
import Nav from './Nav'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'

const App = (props) => {
    useEffect(() => {
        props.dispatch(handleInitialData())
    }, [])
    return (
        <BrowserRouter>
            <LoadingBar />
            {!props.loading && (
                <div className='container'>
                    <Nav />
                    <Routes>
                        <Route path='/new' element={<NewTweet />} />
                        <Route path='/tweet/:id' element={<TweetPage />} />
                        <Route path='/' element={<Dashboard />} />
                    </Routes>
                </div>
            )
            }
        </BrowserRouter>
    )
}

export default connect(({ authUser }) => ({ loading: authUser === null }))(App)