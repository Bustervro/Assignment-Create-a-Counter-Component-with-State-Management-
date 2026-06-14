import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function incrementAfterDelay() {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 2000);
  }

  function incrementTwiceWrong() {
    setCount(count + 1);
    setCount(count + 1);
  }

  function incrementTwiceCorrect() {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="counter-container">
      <h1>React State Counter</h1>
      <p className="description">
        This app shows how React state works, including snapshots, batching, and delayed updates.
      </p>

      <h2>Count: {count}</h2>

      <div className="button-group">
        <button onClick={increment}>Increment</button>
        <button onClick={incrementAfterDelay}>Increment After Delay</button>
        <button onClick={incrementTwiceWrong}>Increment Twice</button>
        <button onClick={incrementTwiceCorrect}>Correct Increment Twice</button>
        <button className="reset" onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
