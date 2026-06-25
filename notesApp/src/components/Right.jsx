import React from 'react'

const Right = ({ task, setTask }) => {

    const deleteHandle=(key)=>{
           const copyTask=[...task];
           copyTask.splice(key,1);
           setTask(copyTask);
    }

  return (
    <div className=' min-h-screen  p-20 lg:w-1/2 lg:border-white lg:border-l-1 '>
         <h1 className='text-5xl text-gray-200 mb-12'><b>Recent Notes</b></h1>
         <div className='flex gap-4 flex-wrap h-full overflow-y-auto'>
                {task.map(function(elem,key){
                     return (
                        <div key={key} >
                         <div className='backdrop-blur-sm w-40 h-60 bg-white/10 border-2 border-white/40 rounded-2xl flex flex-col justify-between'>
                           <div>
                              <h1 className='w-[100%] flex justify-center items-center text-white font-bold uppercase p-1 border-b-1 border-white '>{key+1}.{elem.title}</h1>
                               <p className='w-[100%]flex items-start text-white p-1'>{elem.details}</p>
                           </div>
                           <div className='flex justify-center items-center'>
                              <button className='w-[80%] bg-rose-700/30 backdrop-blur-md text-white p-1 rounded-2xl border border-rose-300/30 mb-2' onClick={()=>{
                                 deleteHandle(key)
                              }}>Delete</button>
                           </div>   
                         </div>
                        </div>
                     )
               })}
         </div>
        
    </div>
  )
}

export default Right
