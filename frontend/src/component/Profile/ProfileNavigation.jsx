import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider , Drawer, Icon, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout} from '../State/Authentication/Action';
const menu =[
    {title:"Orders",Icon:<ShoppingBagIcon/>},
    {title:"Favorites",Icon:<FavoriteIcon className='text-black'/>},
    {title:"Address",Icon:<HomeIcon/>},
    {title:"Payments",Icon:<AccountBalanceWalletIcon/>},
    {title:"Notification",Icon:<NotificationsActiveIcon/>},
    {title:"Event",Icon:<EventIcon/>},
    
    {title:"Logout",Icon:<LogoutIcon/>},
]

const ProfileNavigation = ({open,handleClose}) => {
    const isSmallScreen=useMediaQuery("(max-width:1080)")
     const navigate=useNavigate();
     const dispatch=useDispatch();
     const handleNavigate = (item) => {
      if (item.title === "Logout") {
        dispatch(logout()); // Call the correct function
        navigate("/");
      } else {
        navigate(`/my-profile/${item.title.toLowerCase()}`);
      }
    };
    
  return (
    <div>
        <Drawer variant={isSmallScreen?"temporary":"permanent"}
         onClose={handleClose}
          open={open}
           anchor='left' 
           sx={{zIndex: -1, position:"sticky"}}>

            <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col
             justify-center text-xl gap-8 pt-20 '>
                {menu.map((item,i)=>(<>
                <div  onClick={()=> handleNavigate(item) } className='text-black px-5 flex items-center space-x-5 cursor-pointer'>
                    {item.Icon}
                    <span>{item.title}</span>
                </div>

                {i!== menu.length-1 && <Divider className='bg-black' />}
                
                </>))}
             </div>

        </Drawer>

    </div>
  )
}

export default ProfileNavigation