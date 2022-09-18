
//import './App.css';
import React, { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);
  //Add Function
  const add = () => {
    console.log("click add")
  }
  //Subtract Function
  const subtract = () => {
    console.log("click subtract")
  }

const reset=()=> {

console.log("click reset")


}





  return (
    <div >
      <h1>COUNTER APP</h1>
      <h1>Count:0</h1>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick = {reset}>Reset</button>
    </div>
  );
}



export default App;
