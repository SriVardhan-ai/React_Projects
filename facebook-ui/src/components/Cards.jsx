import React from 'react'

const Cards = (props) => {
  return (
    <div className=''>
      <img className="relative w-60 h-32" src={props.img} alt="Hello"></img>
      <p className='w-60 flex justify-center items-center border-2 mt-2 py-1'>{props.desc}</p>
    </div>
  )
}

export default Cards
