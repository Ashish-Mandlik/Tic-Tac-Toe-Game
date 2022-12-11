import React from 'react'
import "../component/reset.css"

const Reset = ({resetBoard}) => {
  return (
    <div>
      <button className='reset-button' onClick={resetBoard}>Reset</button>
    </div>
  )
}

export default Reset
