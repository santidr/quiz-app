import { Link } from 'react-router-dom'
import CardGrid from '../components/CardGrid'

const Finished = () => {
    return (
        <CardGrid>
            <div className="card-content">
                
                <h4 className="title is-4 has-text-centered">You've completed the quiz!</h4>
                <h5 className="subtitle is-5 has-text-centered mt-1">And congrats! &#128515; You got <b>10</b> out of <b>12</b></h5>
            
            </div>
            <div className="card-content is-flex is-justify-content-space-around mt-4">
                <Link
                    to="/quiz"
                    className="button is-link is-rounded"
                >
                    Replay Quiz
                </Link>

                <Link
                    to="/"
                    className="button is-link is-rounded is-outlined"
                >
                    Quit Quiz
                </Link>
            </div>
        </CardGrid>
    )
}

export default Finished