
import React, { useState } from "react";
import "./../styles/App.css";
 
export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }
  return (
    <div className="App">
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}