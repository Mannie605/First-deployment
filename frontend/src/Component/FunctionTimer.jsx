import { useState, useRef } from "react";

function FunctionTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let intervalRef = useRef(null);

    const startTimer = () => {
        intervalRef.current !== null;
    
    intervalRef.current = setInterval(() => {
     setSeconds((prev) => prev + 1);
    }, 1000);

    setIsRunning(true);
};
const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
};

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setSeconds(0);
        setIsRunning(false);
    }

    return (
        
        <div>
            <p>Elapsed Time: {seconds} seconds</p>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
            <button onClick={resetTimer}>Reset Timer</button>
        </div>
    );
}

export default FunctionTimer;