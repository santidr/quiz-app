import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Score } from '../context/ScoreContext'

const ProtectedRoute = ({ children }) => {

    const { score, totalQuiz } = useContext(Score)

    return (score !== 0 && totalQuiz !== 0) ? children : <Navigate to="/" />
}

export default ProtectedRoute