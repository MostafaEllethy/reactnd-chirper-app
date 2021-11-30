import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'

const App = (props) => {
    useEffect(() => {
        props.dispatch(handleInitialData())
    }, [])
    console.log(props)
    return (
        <div>
            <LoadingBar />
            {props.loading ?
                (<span>Loading...</span>)
                : (<Dashboard />)
            }

        </div>
    )
}

export default connect(({ authUser }) => ({ loading: authUser === null }))(App)