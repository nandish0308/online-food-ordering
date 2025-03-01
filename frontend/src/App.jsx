import { CssBaseline, ThemeProvider } from '@mui/material';
import { Navbar } from './component/Navbar/Navbar';
import './index.css';
import { DarkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurants/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRoute from './component/Routers/CustomerRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from './component/State/Authentication/Action';
import { findCart } from './component/State/Cart/Action';

function App() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)
   useEffect(() => {
    dispatch(getUser  (auth.jwt || jwt));
    dispatch(findCart(jwt));
   },[auth.jwt ])
  return (
    
    <ThemeProvider theme={DarkTheme}>
    <CssBaseline/>
     {/* <Navbar/> */}
         {/* <Home/>
         <RestaurantDetails/>
         <Cart/> */}
         {/* <Profile/> */}
         <CustomerRoute/>


       </ThemeProvider>
    
    
  );
}

export default App;
