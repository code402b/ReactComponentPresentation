import { createRoot } from 'react-dom/client';
import React, { useState } from 'react'

import CounterContainer from './components/CounterContainer.styled.js';


const root = createRoot(document.getElementById('root'));

function App() {

  const [count, setCount] = useState(0);
  const [inputNum, setInputNum] = useState(0);

  return (
    <>
      <h2>Counter</h2>
      <CounterContainer>
        <button onClick={() => setCount(count - 1)}>-</button>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <input
          type="number"
          value={inputNum}
          onChange={(e) => setInputNum(parseInt(e.target.value))}
          ></input>
        <button onClick={() => setCount(inputNum)}>Set Count</button>
      </CounterContainer>
    </>

  )
}

root.render(<App />);
