import { createContext, useState } from "react"

export const Score = createContext()

const ScoreContext = ({ children }) => {

    const [ score, setScore ] = useState(0)
    const [ totalQuiz, setTotalQuiz ] = useState(0)

    return (
        <Score.Provider value={{
            score, setScore,
            totalQuiz, setTotalQuiz
        }}>
            { children }
        </Score.Provider>
    )
}

export default ScoreContext