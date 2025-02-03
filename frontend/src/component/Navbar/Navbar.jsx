import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { blue, pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css' 
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { Person } from '@mui/icons-material';

export const Navbar
 = () => {
    const navigate=useNavigate()
  return (
    <Box
    sx={{ zIndex:100}}
    className='px-5  sticky top-0 z-50 py-[.8rem] bg-[#09112b] lg:px-20 flex 
    justify-between'>
    

     
            <div className='lg:mr-10 cursor-pointer flex items-center
            space-x-4'>
                <Link to="https://wishlist-pearl.vercel.app/" target='blank'> 

                <li className='logo font-semibold text-black-300 text-2xl list-none'>
                 Vamos food
                </li>
                </Link>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'> 

                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{fontsize:"1.5rem"}}/>

                    </IconButton>
                </div>

                <div className=''>
                {/* <Link to="/my-profile/"> */}
                    

                    {false?<Avatar sx = {{bgcolor:"wheat",color:blue}}>H</Avatar>:
                    <IconButton onClick={()=>navigate("/account/login")}>
                        <Person/>
                    </IconButton>}

                    {/* </Link> */}
                </div>
                

                
                <div className=''>
                <Link to="/cart">
                    <IconButton>
                        <Badge color='secondary' badgeContent={3}>
                        <ShoppingCartIcon sx={{fontsize:"1.5rem"}}/>
                        
                        </Badge>
                        

                    </IconButton>
                    </Link>
                </div>
                


        </div>
        
      
        
        </Box>
  )
}
