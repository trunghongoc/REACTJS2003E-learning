import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import CounterByReducer from './components/CounterByReducer'

function App() {
  const [isShowCounter, setIsShowCounter] = useState(true)

  const showCounterButton = () => {
    setIsShowCounter(!isShowCounter)
  }

  return (
    <>
      <button onClick={showCounterButton}>TOGGLE SHOW COUNTER BUTTON</button>
      { isShowCounter && <Counter/> }

      <CounterByReducer/>
    </>
  );
}

export default App;
