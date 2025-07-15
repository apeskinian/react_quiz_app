import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [ remainingTime, setRemainingTime ] = useState(timeout);
    
    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);
        // cleanup function to stop more than one timer instance running
        return () => {
            clearTimeout(timer)
        }
    }, [timeout, onTimeout])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100);
        // cleanup function to stop concurrent timers being created and to clear
        // timers if removed from the DOM
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress id="question-time" max={timeout} value={remainingTime} />;
}