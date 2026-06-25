import React from 'react'
import { useState } from 'react'

const Left = ({ task, setTask } )=> {
         const [title, setTitle] = useState('')
         const [details, setDetails] = useState('')
         const submitHandler=(e)=>{
            e.preventDefault();
            const copyTast=[...task];
            copyTast.push({title,details});
            setTask(copyTast);
            setTitle('');
            setDetails('');
         }
         
  return (
    <div className=' p-20 lg:w-1/2'>
        <h1 className='text-5xl text-gray-200 mb-12'><b>Add Note</b></h1>
       <form onSubmit={(e)=>{
        submitHandler(e)
        }}>
        <input onChange={(e)=>{
            setTitle(e.target.value)
        }} value={title} placeholder='Enter the title' className='border-white border-2 text-2xl text-white w-full mb-5 px-3 placeholder:text-gray-200'></input>
        <textarea onChange={(e)=>{
            setDetails(e.target.value)
        }} value={details} className='text-xl text-white w-full px-3 h-60 placeholder:text-gray-200 border-white border-2 mb-2' placeholder='Write the description'/>
        <div className='flex items-center justify-center'>
       <button className='border-white border-2 text-2xl text-black w-[100%] px-3 bg-white'>Add</button>
       </div>
       </form>
      
    </div>
  )
}

export default Left
