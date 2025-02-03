import { CssBaseline, ThemeProvider } from '@mui/material';
import { Navbar } from './component/Navbar/Navbar';
import './index.css';
import { DarkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurants/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRoute from './component/Routers/CustomerRoute';

function App() {
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
