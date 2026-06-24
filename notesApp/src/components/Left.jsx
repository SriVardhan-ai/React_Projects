import React from 'react'

const left = () => {
  return (
    <div className='w-1/2 p-20'>
        <h1 className='text-5xl text-gray-200 mb-12'><b>Add Note</b></h1>
       <form  className=''>
        <input placeholder='Enter the title' className='border-white border-2 text-2xl text-white w-full mb-5 px-3 placeholder:text-gray-200'></input>
        <textarea className='border-white border-2 text-xl text-white w-full px-3 h-60 placeholder:text-gray-200' placeholder='Write the description'/>
       </form>
    </div>
  )
}

export default left
