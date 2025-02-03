import React from 'react'
import { Card, Chip, IconButton} from '@mui/material'
import FavoriteIcon  from '@mui/icons-material/Favorite';
import { Link, Links } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Restaurantcard = () => {
  return (

    <div className=' flex flex-wrap items-center justify-around gap-12'>


<Card className='m-5 w-[18rem]  '>
    <div className={ `${true?'cursor-pointer': "cursor-not-allowed"  } relative`}>
    <Link to="/restaurant/:city/:title/:id"><img  className= " w-full h-[10rem] rounded-t-md object-cover "src="https://b.zmtcdn.com/data/pictures/7/20816697/7e537f0c5bde3842904dabb96b6c08c5_featured_v2.jpg?output-format=webp"
          alt=""/></Link>

          <Chip 
          size="small"
          className="absolute top-2 left-2"
          color={true?"success":"error" }
          label={true?"open":"closed" } 
          /> 

    </div >
    <div className='text-black'>
    <div className=' p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
        <Link to="/restaurant/:city/:title/:id">
        <p className=" text-black font-semibold text-lg">
        Foo Palladium Ahmedabad
            </p>
            </Link>

            <p className=" text text-sm">
            Chinese, Sushi, Asian, Japanese, Desserts
            </p>
        </div>
        <div>
            <IconButton>
              {true?<FavoriteIcon className='text-black' />: <FavoriteBorderIcon/>}
            </IconButton>
        </div>
        </div>
    </div>
</Card>


<Card className='m-5 w-[18rem] '>
    <div className={ `${true?'cursor-pointer': "cursor-not-allowed"  } relative`}>
    <Link to="/restaurant/:city/:title/:id">  <img  className= " w-full h-[10rem] rounded-t-md object-cover "src="https://b.zmtcdn.com/data/pictures/7/20816697/7e537f0c5bde3842904dabb96b6c08c5_featured_v2.jpg?output-format=webp"
          alt=""/> </Link>

          <Chip 
          size="small"
          className="absolute top-2 left-2"
          color={true?"success":"error" }
          label={true?"open":"closed" } 
          /> 

    </div>
    <div className='text-black'>
    <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
        <Link to="/restaurant/:city/:title/:id">
        <p className="font-semibold text-lg">
        Foo Palladium Ahmedabad
            </p>
            </Link>

            <p className=" text-gray-500 text-sm">
            Chinese, Sushi, Asian, Japanese, Desserts
            </p>
        </div>
        <div>
            <IconButton>
              {true?<FavoriteIcon className='text-black'/>: <FavoriteBorderIcon/>}
            </IconButton>
        </div>
        </div>
    </div>
</Card>


<Card className='m-5 w-[18rem] '>
    <div className={ `${true?'cursor-pointer': "cursor-not-allowed"  } relative`}>
    <Link to="/restaurant/:city/:title/:id"> <img  className= " w-full h-[10rem] rounded-t-md object-cover "src="https://b.zmtcdn.com/data/pictures/7/20816697/7e537f0c5bde3842904dabb96b6c08c5_featured_v2.jpg?output-format=webp"
          alt=""/> </Link>

          <Chip 
          size="small"
          className="absolute top-2 left-2"
          color={true?"success":"error" }
          label={true?"open":"closed" } 
          /> 

    </div>
    <div className='text-black'>
    <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
        <Link to="/restaurant/:city/:title/:id">
        <p className="font-semibold text-lg">
        Foo Palladium Ahmedabad
            </p></Link>

            <p className=" text-gray-500 text-sm">
            Chinese, Sushi, Asian, Japanese, Desserts
            </p>
        </div>
        <div>
            <IconButton>
              {true?<FavoriteIcon className='text-black'/>: <FavoriteBorderIcon/>}
            </IconButton>
        </div>
    </div>
    </div>
</Card>


<Card className='m-5 w-[18rem] '>
    <div className={ `${true?'cursor-pointer': "cursor-not-allowed"  } relative`}>
    <Link to="/restaurant/:city/:title/:id">  <img  className= " w-full h-[10rem] rounded-t-md object-cover "src="https://b.zmtcdn.com/data/pictures/7/20816697/7e537f0c5bde3842904dabb96b6c08c5_featured_v2.jpg?output-format=webp"
          alt=""/></Link>

          <Chip 
          size="small"
          className="absolute top-2 left-2"
          color={true?"success":"error" }
          label={true?"open":"closed" } 
          /> 

    </div>
    <div className='text-black'>
    <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
        <Link to="/restaurant/:city/:title/:id">
        <p className="font-semibold text-lg">
        Foo Palladium Ahmedabad
            </p></Link>

            <p className=" text-gray-500 text-sm">
            Chinese, Sushi, Asian, Japanese, Desserts
            </p>
        </div>
        <div>
            <IconButton>
              {true?<FavoriteIcon className='text-black'/>: <FavoriteBorderIcon/>}
            </IconButton>
        </div>
    </div>
    </div>
</Card>


<Card className='m-5 w-[18rem] '>
    <div className={ `${true?'cursor-pointer': "cursor-not-allowed"  } relative`}>
    <Link to="/restaurant/:city/:title/:id"> <img  className= " w-full h-[10rem] rounded-t-md object-cover "src="https://b.zmtcdn.com/data/pictures/7/20816697/7e537f0c5bde3842904dabb96b6c08c5_featured_v2.jpg?output-format=webp"
          alt=""/></Link>

          <Chip 
          size="small"
          className="absolute top-2 left-2"
          color={true?"success":"error" }
          label={true?"open":"closed" } 
          /> 

    </div>
    <div className='text-black'>
    <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
        <Link to="/restaurant/:city/:title/:id">
        <p className="font-semibold text-lg">
        Foo Palladium Ahmedabad
            </p></Link>

            <p className=" text-gray-500 text-sm">
            Chinese, Sushi, Asian, Japanese, Desserts
            </p>
        </div>
        <div>
            <IconButton>
              {true?<FavoriteIcon className='text-black'/>: <FavoriteBorderIcon/>}
            </IconButton>
        </div>
    </div>
    </div>
</Card>


<Card className='m-5 w-[18rem] '>
    <div className={ `${true?'cursor-pointer': "cursor-not-allowed"  } relative`}>
    <Link to="/restaurant/:city/:title/:id"> <img  className= " w-full h-[10rem] rounded-t-md object-cover "src="https://b.zmtcdn.com/data/pictures/7/20816697/7e537f0c5bde3842904dabb96b6c08c5_featured_v2.jpg?output-format=webp"
          alt=""/></Link>

          <Chip 
          size="small"
          className="absolute top-2 left-2"
          color={true?"success":"error" }
          label={true?"open":"closed" } 
          /> 

    </div>
    <div className='text-black'>
    <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
        <Link to="/restaurant/:city/:title/:id">
        <p className="font-semibold text-lg">
        Foo Palladium Ahmedabad
            </p></Link>

            <p className=" text-gray-500 text-sm">
            Chinese, Sushi, Asian, Japanese, Desserts
            </p>
        </div>
        <div>
            <IconButton>
              {true?<FavoriteIcon className='text-black'/>: <FavoriteBorderIcon/>}
            </IconButton>
        </div>
    </div>
    </div>
</Card>



          </div>
  )
}

export default Restaurantcard