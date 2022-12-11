import React from 'react'
import "../component/box.css"

const Box = ({value ,onClick}) => {
    const styles= value==="X" ? "box x" :"box o";
  return (
    <>
        <button className={styles} onClick={onClick}>{value}</button>
    </>
  )
}

export default Box
