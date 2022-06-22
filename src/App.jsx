import React from 'react'
import ScoreContext from './context/ScoreContext'
import AppRouter from './router/AppRouter'

const App = () => {
    return (
        <ScoreContext>
            <AppRouter />
        </ScoreContext>
    )
}

export default App