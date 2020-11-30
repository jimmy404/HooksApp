import React, { useEffect } from 'react';

export const Message = () => {
  useEffect(() => {
    console.log('Component mounted')
    return () => {
      console.log('Component dismounted')
    }
  }, [])
  return (
    <div>
      <h3>You rocks</h3>
    </div>
  )
}
