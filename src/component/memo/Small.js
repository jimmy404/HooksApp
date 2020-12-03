import React, { memo } from 'react'

export const Small = memo(({ value }) => {
  console.log('Hello motherf')
  return (
    <small>
      { value }
    </small>
  )
})
