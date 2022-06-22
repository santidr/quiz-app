import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CardGrid from '../components/CardGrid'
import { Score } from '../context/ScoreContext'

const Finished = () => {

    const { score, totalQuiz } = useContext(Score)

    return (
        <CardGrid>
            <div className="card-content">
                <h4 className="title is-4 has-text-centered">You've completed the quiz!</h4>
                <h5 className="subtitle is-5 has-text-centered mt-1">
                    { score <= 5 && "Better luck next time. 😕" }
                    { (score > 5 && score < 12) && "Nice! 😃" }
                    { score === 12 && "BOOM! Congrats! 🎉" }
                    &nbsp;You got <b>{ score }</b> out of <b>{ totalQuiz }.</b>
                </h5>
            </div>
            <div className="card-content is-flex is-justify-content-space-around">
                <Link
                    to="/quiz"
                    className="button is-link is-rounded"
                >
                    Replay
                </Link>

                <Link
                    to="/"
                    className="button is-link is-rounded is-outlined"
                >
                    Quit
                </Link>
            </div>
        </CardGrid>
    )
}

export default Finished