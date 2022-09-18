
//import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);
  //Add Function
  const add = () => {
    console.log("click add")
    setCount(count + 1)
  }
  //Subtract Function
  const subtract = () => {
    console.log("click subtract")
    setCount(count - 1)

  }

  const reset = () => {

    console.log("click reset")

    setCount(0)
  }





  return (
    <div >
      <h1>COUNTER APP</h1>
      <h1>Count: {count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}



export default App;
