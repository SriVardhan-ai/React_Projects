import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="bg-amber-100 w-80 h-50 p- pl-22 border-1 rounded-2xl flex flex-col ">
        <div className='pl-7 pt-7 pb-3'>
           <img  className="w-20 h-20  rounded-full " src={props.image}></img>
        </div>
        <p><b>Name</b> - {props.name}</p>
        <p> <b>age</b> - {props.age}</p>
        
      </div>
    </div>
  )
}

export default Card;
