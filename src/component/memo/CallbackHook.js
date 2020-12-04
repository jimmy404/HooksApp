import React, { useCallback, useState } from 'react';
import { ShowAdd } from './ShowAdd';
import './memo.css';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(0);

  // const add = () => {
  //   setCounter( counter + 1);
  // }

  const add = useCallback(
    (num) => {
      setCounter( c => c + num);
    },
    [setCounter]
  )

  return (
    <div>
      <h1>Callback Hook: {counter} </h1>
      <hr />
      <ShowAdd add={add}/>
    </div>
  )
}
