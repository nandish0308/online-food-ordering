import { Chip, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Cartitem = () => {
  return (
    <div className='px-5'>
        <div className='lg:flex items-center lg:space-x-5'>
            <div>
                <img className='w-[5rem] h-[rem] object-cover'
                 src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=''/>
            </div>
            <div className='flex items-center justify-between lg:w-[70%]'>
                <div className='space-y-1 lg:space-y-3 w-full'>
                    <p>Pizza</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-1'>
                            <IconButton >
                                <RemoveCircleOutlineIcon className='text-black'/>

                            </IconButton>
                            <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                {5}
                            </div>

                            <IconButton >
                                <AddCircleOutlineIcon className='text-black' />

                            </IconButton>
                           

                        </div>
                    </div>
                </div>
                <p>
                    $40.96
                </p>
        

            </div>
            
        </div>
        <div className=' pt-3 space-x-2'>
            <div className=''>
            {[1,1,1,].map((item) => <Chip sx={{
          backgroundColor: "White", 
          // Silver background
          border:"solid black",
          gap: "20px",
        margin:"0.5px",
          color: "Black", // Black text
          fontWeight: "bold", // Makes text more visible
          
        }} className= ''label = {"bread"}/>)}
            </div>

        </div>

    </div>
  )
}

export default Cartitem