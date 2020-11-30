import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import './effect.css';

export const MultipleHooks = () => {
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  console.log(state)
  return (
    <div>
      <h1>Custom Hook!</h1>
    </div>
  )
}
