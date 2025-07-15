import { useState, useCallback } from "react";

import QUESTIONS from '../questions.js';
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [ userAnswers, setUserAnswers ] = useState([]);

    // Using userAnswers to derive the current question as the current
    // question will be the length of the number of answered questions
    // as an index for an array.
    const currentQuestionIndex = userAnswers.length;    
    const quizIsComplete = currentQuestionIndex === QUESTIONS.length;
    
    // useCallback to prevent the functions being recreated when changing state
    // unless dependencies change
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsComplete) {
        return <Summary
            userAnswers={userAnswers}
        />
    }
    return (
        <div id="quiz">
            <Question
                key={currentQuestionIndex}
                questionIndex={currentQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}