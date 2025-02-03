import React from 'react'
import Restaurantcard from '../Restaurants/Restaurantcard'

const Favorites = () => {
  return (
    <div>
        <h1 className='py-5 text-xl font-semibold text-center text-black'> My Favorites </h1> 
        <div className='flex flex-wrap gap-3 justify-center'>
            {[1].map((item)=><Restaurantcard/>)}

        </div>
        </div>
  )
}

export default Favorites