
import React from 'react'
import Cart from './Cart'
import { Button, Card } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
 
const AddressCart = ({item,showButton,handleSelectAddress}) => {
   
  return (
    <Card className= "  flex gap-5 w-64 p-5 ">
        <HomeIcon className='text-black'/>
        <div className='text-black space-y-3 text-black-500'>

            <h1 className='font-semibold text-lg'>Home</h1>

            <p>
                Ahmedabad, Iscon Eligance , isconroad, 380018, India
            </p>
           
           {showButton && ( <Button   variant="outlined" fullWidth onClick={()=>handleSelectAddress(item)}>select</Button>)}
        </div>


    </Card>
    
  )
}

export default AddressCart