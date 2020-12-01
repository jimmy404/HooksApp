import React, { useState } from 'react';
import {MultipleHooks} from '../examples/MultipleHooks';
import './effect.css';

export const RealExample = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Hello</h1>
      <hr/>
      { show && <MultipleHooks/> }
      <button className="btn btn-primary mt-5" onClick={() => {setShow(!show)}}>Show/Hide</button>
    </div>
  )
}
