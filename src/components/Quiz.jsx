import { useState } from "react";

import QUESTIONS from '../questions.js';
import completeImage from '../assets/quiz-complete.png'

export default function Quiz() {
    const [ userAnswers, setUserAnswers ] = useState([]);

    // Using userAnswers to derive the current question as the current
    // question will be the length of the number of answered questions
    // as an index for an array.
    const currentQuestionIndex = userAnswers.length;    
    const quizIsComplete = currentQuestionIndex === QUESTIONS.length;
    
    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }
    
    if (quizIsComplete) {
        return <div id="summary">
            <img src={completeImage} alt="completed quiz image"/>
            <h2>Quiz Completed!</h2>
        </div>
    }

    // Create a new array from the answers to be able to shuffle them without
    // editing the original array which we need in order still.
    const shuffledAnswers = [...QUESTIONS[currentQuestionIndex].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[currentQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}