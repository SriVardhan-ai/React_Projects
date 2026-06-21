import React from 'react'

const Section1 = () => {
  return (
    <div className='bg-[#f5f4da] w-full h-120 rounded-xl flex '>
      <div className='w-1/2 flex flex-col items-center justify-between py-20'>
          <div className='flex flex-col text-blue-950 text-5xl relative left-9'>
              <b>Accounting Software</b>
              <b>Built for Owners</b>
          </div>
          <button className='bg-blue-500 text-white text-sm p-2 rounded-xl'>
            Limited Time Offer
          </button>
           <div className='flex flex-col  text-blue-950 text-3xl'>
              <b>Get 70% Off for 3 Months</b>
              
          </div>

          <button className='bg-emerald-500 text-white text-2xl p-3 rounded-xl'>
            Buy Now
          </button>
          
      </div>
      <div> 
        <img className="w-full h-full object-cover  rounded-bl-full overflow-hidden" src="https://datatalks.club/images/posts/2022-07-16-data-science-manager-vs-data-science-expert/image3.jpg" alt="Hello"></img>
           </div>
    </div>
  )
}

export default Section1