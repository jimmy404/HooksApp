import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {state} </h1>
      <button className="btn" onClick={increment}> + 1</button>
      <button className="btn" onClick={reset}>Reset</button>
      <button className="btn" onClick={decrement}> - 1</button>
    </>
  )
}
