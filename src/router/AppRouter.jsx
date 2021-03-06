import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Finished from '../pages/Finished'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import ProtectedRoute from './ProtectedRoute'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/quiz" element={ <Quiz /> } />
                    <Route path="/finished" element={ 
                        <ProtectedRoute>
                            <Finished />
                        </ProtectedRoute> } 
                    />
                    <Route path="*" element={ <Navigate to="/" /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter