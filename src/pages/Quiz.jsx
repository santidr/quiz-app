import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getQuizList } from '../api/api'
import { fetchData } from '../helpers/fetchData'
import useCounter from '../hooks/useCounter'

import CardGrid from '../components/CardGrid'
import Spinner from '../components/Spinner'

const Quiz = () => {
    const navigate = useNavigate()
    const { counter, increment } = useCounter()

    const [ quizList, setQuizList] = useState([])
    const [ showNextBtn, setShowNextBtn] = useState(false)
    const [ showFinishBtn, setShowFinishBtn] = useState(false)
    const [ blockedAnswers, setBlockedAnswers] = useState(false)

    const handleVerifyAnswer = (e, correct_answer, answerSelected) => {

        if (!blockedAnswers) {

            const answerButton = document.querySelector(`#${e.target.id}`)
            setBlockedAnswers(true)
    
            if (correct_answer === answerSelected) 
                answerButton.classList.add('is-success')
            else
                answerButton.classList.add('is-danger')

            answerButton.classList.add('actived')
        }

        if (counter === quizList.length - 1)
            setShowFinishBtn(true)
        else
            setShowNextBtn(true)
    }

    const handleNext = () => {

        setShowNextBtn(false)
        setBlockedAnswers(false)
        const answerButton = document.querySelector('div.button.actived')
        
        if (counter < quizList.length - 1) {
            increment()
            answerButton.classList.remove('is-success', 'is-danger', 'actived')
        }
    }

    useEffect(() => {
        fetchData(getQuizList())
            .then(data => setQuizList(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <CardGrid>
            { quizList.length === 0 && <Spinner />}
            { quizList.length > 0 && (
                <>
                    <div className="is-flex is-justify-content-flex-end mb-5">
                        <h3 className="title is-4">{counter + 1}/{quizList.length}</h3>
                    </div>
                    <h2 className="subtitle has-text-centered">{quizList[counter].question}</h2>
                    <div className="content">

                        <div className="quiz-list is-flex is-flex-direction-column">
                            {quizList[counter].answers.map((answer, index) => (
                                <div
                                    id={`answer${index}`}
                                    key={index}
                                    className="button answer mb-4"
                                    onClick={(e) => handleVerifyAnswer(e, quizList[counter].correct_answer, answer)}
                                >
                                    {answer}
                                </div>
                            ))}
                        </div>

                        <div className="card-footer is-flex is-justify-content-center pt-3">
                            {showNextBtn && (
                                <button
                                    className="button is-primary is-rounded"
                                    onClick={ handleNext }
                                >
                                    Next Question
                                </button>
                            )}

                            { showFinishBtn && (
                                <button
                                    className="button is-link is-rounded"
                                    onClick={ () => navigate("/") }
                                >
                                    Finish
                                </button>
                            )}
                        </div>
                    </div>
                </>
            )}
        </CardGrid>
    )
}

export default Quiz