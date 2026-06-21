import React from 'react'
import Cards from './Cards'
const Section2 = () => {
   const arr = [
  {
    title: "Restaurant",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_8sm-tjeIyUtI-LkODmEIkZL-Axe-avCSre-zGQqwA&s=10"
  },
  {
    title: "Retail",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnyIk4ANm4vMyX2HoRZDh_nSDN0BUNlcay_lx4U9-OA&s=10"
  },
  {
    title: "Freelancer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPBN1wZCAQ2BBLRf-2fdP8J-pjdWT3YHIhl-oT-nfnGw&s=10"
  },
  {
    title: "Startup",
    img: "https://peoplebusiness.org/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F305846%2F1000x500%2F527c702ca0%2Fhow-organizations-can-drive-effective-leadership-transformation.jpg&w=1920&q=75"
  }
];
  return (
    <div>
      <div className='flex justify-center items-center p-12 text-3xl'>
           <p>Tools That Support Your Type of Business</p>
      </div>
      <div className='flex flex-wrap  gap-10 justify-center'>
         {
            arr.map((elem,key1)=>(
                <Cards key={key1} img={elem.img}  desc={elem.title}/>
            ))
         }
      </div>
    </div>
  )
}

export default Section2
