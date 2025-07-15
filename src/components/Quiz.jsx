import { useState } from "react";

import QUESTIONS from '../questions.js';

export default function Quiz() {
    const [ userAnswers, setUserAnswers ] = useState([]);

    // Using userAnswers to derive the current question as the current
    // question will be the length of the number of answered questions
    // as an index for an array.
    const currentQuestionIndex = userAnswers.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[currentQuestionIndex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[currentQuestionIndex].answers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}