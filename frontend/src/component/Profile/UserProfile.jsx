import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const UserProfile = () => {
    const handleLogout=()=>{}

    return (
    <div className='min-h-[80vh] flex flex-col justify-center 
    items-center text-center text-black' >
         <div className='flex flex-col items-center justify-center'>
            <AccountCircleIcon sx={{fontSize:"9rem"}}/>
            <h1 className='py-5 text-2xl font-semibold'>Nandish shah</h1>
            <p>Email: nandishshah@gmail.com</p>
            <Link to="/">
            <Button variant='contained' onClick={handleLogout}sx={{margin:"2rem 0rem"}}>Logout</Button>
            </Link>

         </div>

    </div>
  )
}

export default UserProfile