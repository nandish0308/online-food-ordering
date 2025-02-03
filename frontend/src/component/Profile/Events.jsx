import React from 'react'
import EventCard from './EventCard'

const Events = () => {
  return (
    
      <div className='flex items-center flex-col'>
        <h1 className='text-xl text-black text-center py-7 font-semibold'>New Events</h1>
        {/* <div className='space-y-5 w-full lg:w-1/2'> */}
        
        <div className=' mt-5 px-5 flex flex-wrap gap-5 '>
        {[1,1,1].map((item)=><EventCard/>)}
    </div>
    </div>
  )
}

export default Events