import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { blue, pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css' 
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { Person } from '@mui/icons-material';
import { useSelector } from 'react-redux';


export const Navbar
 = () => {
    const {auth}=useSelector(store=>store)
    const [cart] = useState({
        cart: { items: [] },  
      });
      
    const navigate=useNavigate()
    const handleAvtarClick=() => {
        if (auth.user.role==="ROLE_CUSTOMER"){
            navigate("/my-profile")
        }
        else{
            navigate("/admin/restaurant")
        }}
  return (
    <Box
    sx={{ zIndex:100}}

    className='px-5 sticky top-0 z-50 mt-[-70px] py-[.8rem] lg:px-20 flex 
    justify-between'>
    

     
            <div className='lg:mr-10 cursor-pointer flex items-center
            space-x-4'>
                <Link to="/"> 

                <li className='logo font-semibold text-pink-400 text-2xl list-none'>
                 Vamos food
                </li>
                </Link>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'> 

                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{color: "white", fontsize:"1.5rem"}}/>

                    </IconButton>
                </div>

                <div className=''>
                {/* <Link to="/my-profile/"> */}
                    

                    {auth.user?(<Avatar onClick={handleAvtarClick} sx = {{bgcolor:"wheat",color:"white"}}>
                        {auth.user?.fullName?.[0]?.toUpperCase()}
                    </Avatar>):(
                    <IconButton sx={{color: "white"}} onClick={()=>navigate("/account/login")}>
                        <Person/>
                    </IconButton>)}
                    {/* {auth.user ? (
    <Avatar onClick={handleAvtarClick} sx={{ bgcolor: "wheat", color: "white" }}>
        {auth.user?.fullName?.[0]?.toUpperCase()}
    </Avatar>
) : (
    <IconButton sx={{ color: "white" }} onClick={() => navigate("/account/login")}>
        <Person />
    </IconButton>
)} */}


                    {/* </Link> */}
                </div>
                

                
                <div className=''>
               
                    <IconButton onClick={()=>navigate("/cart")}>
                        <Badge color='secondary' badgeContent={cart.cart.items.length}>
                        <ShoppingCartIcon sx={{color: "white",fontsize:"1.5rem"}}/>
                        
                        </Badge>
                        

                    </IconButton>
                  
                </div>
                


        </div>
        
      
        
        </Box>
  )
}
 
