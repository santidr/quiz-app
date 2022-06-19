import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/quiz" element={ <Quiz /> } />
    
                    <Route path="*" element={ <Navigate to="/" /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter