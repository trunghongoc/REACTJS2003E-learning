import React, { useReducer, useState } from 'react'
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.number};
    case 'decrement':
      return {count: state.count - action.number};
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() =>  ({type: 'decrement', number: 2 })}>-</button>
      <button onClick={() => dispatch({type: 'increment', number: 3 })}>+</button>
    </>
  );
}
