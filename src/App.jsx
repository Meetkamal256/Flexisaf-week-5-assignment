import React, { useState, useEffect, useRef } from "react";
import "./App.css"; // Import the CSS file

// Custom Hook for Counter
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

function App() {
  // useState for managing user input
  const [name, setName] = useState("");

  // useState for managing counter
  const { count, increment, decrement } = useCounter(0);

  // useRef for focusing the input field
  const inputRef = useRef(null);

  // useEffect to update document title when counter changes
  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  // useEffect to log a message when the component mounts
  useEffect(() => {
    console.log("Component mounted!");

    // Cleanup function
    return () => {
      console.log("Component unmounted!");
    };
  }, []);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="appContainer">
      <div className="app">
        <h1>React Hooks Demo</h1>

        <div>
          <h2>useState: User Input</h2>
          <input
            ref={inputRef}
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
          <p>Hello, {name ? name : "stranger"}!</p>
          <button onClick={handleFocus}>Focus Input</button>
        </div>

        <div>
          <h2>useState and Custom Hook: Counter</h2>
          <p>Counter: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>

        <div>
          <h2>useEffect: Document Title</h2>
          <p>Document title changes based on counter.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
