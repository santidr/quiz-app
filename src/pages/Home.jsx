import React from 'react'
import { Link } from 'react-router-dom'
import CardGrid from '../components/CardGrid'

const Home = () => {
    return (
        <CardGrid>
            
            <div className="card-content">
                <h2 className="title is-2 has-text-centered">SuperQuiz</h2>
                <h2 className="subtitle has-text-centered ">General Knowledge Questions</h2>
            </div>

            <div className="card-content is-flex is-justify-content-center">
                <Link 
                    to="/quiz"
                    className="button is-link is-medium is-rounded"
                >
                    Play Quiz!
                </Link>
            </div>
        </CardGrid>
    )
}

export default Home