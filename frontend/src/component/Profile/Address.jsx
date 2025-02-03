import React from 'react'
import AddressCart from '../Cart/AddressCart'

const Address = () => {
  return (
    <div >
    <h1 className='py-5  text-black text-xl font-semibold text-center'> Address </h1> 
    <div className='flex flex-wrap gap-3 justify-center'>
        {[1,1,1].map((item)=><AddressCart/>)}

    </div>
    </div>
  )
}

export default Address