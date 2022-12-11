import React from 'react'
import Box from '../component/box'
import "../component/board.css"

function Board({board,onClick}) {
  return (
    <div className='board'>
        {board.map((value,idx)=>{
            return <Box value={value} onClick={()=>{value===null && onClick(idx)}}/>
        })}
      
    </div>
  )
}

export default Board
