import React from 'react'
import { Card, Chip, IconButton} from '@mui/material'
import FavoriteIcon  from '@mui/icons-material/Favorite';
import { Link, Links, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { isPresentInFavorites } from '../config/logic';
import { addToFavorite } from '../State/Authentication/Action';

const Restaurantcard = ({item}) => {
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt")
    const {auth}= useSelector(store=>store)

    const handleAddToFavorite = () => {
        dispatch(addToFavorite(item.id, jwt));
      };
    const handleNavigateToRestaurant=()=>{
        if(item.open){
            navigate(`/restaurants/${item.address.city}/${item.name}/${item.id}`)
            console.log(`/restaurant/${item.address.city}/${item.name}/${item.id}`);
            
        }
    }
  return (

    <div className=' flex flex-wrap items-center justify-around gap-12'>





<Card className='m-5 w-[18rem] '>
    <div className={ `${true?'cursor-pointer': "cursor-not-allowed"  } relative`}>
    
    <img  onClick={handleNavigateToRestaurant}
 className= " w-full h-[10rem] rounded-t-md object-cover "
src={item.images[1]}
      alt=""
      />

      <Chip 
      size="small"
      className="absolute top-2 left-2"
      color={item.open?"success":"error" }
      label={item.open?"open":"closed" } 
      /> 

</div>
<div className='text-black'>
<div className='p-4 textPart lg:flex w-full justify-between'>
    <div className='space-y-1'>
    <Link to="/restaurants:city/:title/:id">
    <p onClick={handleNavigateToRestaurant} className="font-semibold text-lg cursor-pointer">
    {item.name}
        </p></Link>

        <p className=" text-gray-500 text-sm">
        {item.description}
        </p>
    </div>
    <div>
        <IconButton onClick={handleAddToFavorite}>
          {isPresentInFavorites(auth.favorites,item)?<FavoriteIcon className='text-gray-500 bg-black'/>: <FavoriteBorderIcon/>}
        </IconButton>
    </div>
</div>
</div>
</Card>



          </div>
  )
}

export default Restaurantcard