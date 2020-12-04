import React from 'react'

export const ShowAdd = React.memo(({add}) => {
  console.log('lalalalal')
  return (
    <button className="btn btn-primary" onClick={() => {add(10)}}>
      Add
    </button>
  )
})
