import { shuffle } from "./shuffle"

export const fetchData = async (url) => {

    const resp = await fetch(url)
    const { results } = await resp.json()

    let quizList = results.map(item => {
        return {
            question: item.question,
            correct_answer: item.correct_answer,
            answers: shuffle([ ...item.incorrect_answers, item.correct_answer ])
        }
    })

    return quizList
}