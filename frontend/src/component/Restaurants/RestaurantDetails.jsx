import React, { useEffect, useState } from 'react'
import { Divider , FormControl, FormControlLabel, Grid, RadioGroup, Radio, Typography, Checkbox } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';
import { CheckBox, Restaurant } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurantById, getRestaurantCategory } from '../State/Restaurant/Action';
import {  getMenuItemsByRestaurant } from '../State/Menu/Action';


const foodTypes=[
    {label:"All",value:"all"},
    {label:"Veg only",value:"vegS"},
    {label:"Non-veg",value:"non-veg"},
    {label:"Seasonal",value:"seasonal"}
]
const menu=[1,1,1,1,1,1]

const RestaurantDetails = () => {

    const[foodType, setFoodType]=useState("all")
    const navigate=useNavigate()
    const dispatch=useDispatch();
    
  
    const jwt=localStorage.getItem("jwt")
    const {auth,restaurant,menu}= useSelector(store=>store)
    const [selectedCategory,setselectedCategory]=useState("")
    const { category } = useSelector(store => store.restaurant);

    console.log("Redux Category State:", category);


    const{id,city}=useParams();


    const handleFilter=(e)=>{
        setFoodType(e.target.value)
        console.log(e.target.value,e.target.name)
    }
    const handleFilterCategory=(e,value)=>{
        setselectedCategory(value)
        console.log(e.target.name,value)
    }
    console.log("restaurant",restaurant)

    useEffect(() => {
      if (jwt && id) {
          dispatch(getAllRestaurantById({ jwt, restaurantId: id }));
          dispatch(getRestaurantCategory({ jwt, restaurantId: id }));
         
      }
  }, [jwt, id, dispatch]);

useEffect(()=>{
dispatch(
  getMenuItemsByRestaurant({
    jwt,
    restaurantId: id,
    vegetarian: foodType==="vegetarian",
    seasonal: foodType==="seasonal",
    nonVeg: foodType==="non_vegetarian",
    foodCategory: selectedCategory,
}));
},[selectedCategory,foodType]);
  
    
    

  return (
    <div className='px-5 lg:px-20'>

        <section>
            <h3 className='text-black py-2 mt-10'>Home/india/indian fast food/3</h3>
       <div>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>

            <img className='w-full h-[40vh] object-cover'
 src={restaurant.restaurant?.images?.[0] ?? "https://via.placeholder.com/300"}
  alt="Restaurant Image"/>

            </Grid>
            <Grid item xs={12} lg={6}>

            <img className='w-full h-[40vh] object-cover'
 src={restaurant.restaurant?.images?.[0] ?? "https://via.placeholder.com/300"}
  alt="Restaurant Image"/>

            </Grid>
        

        <Grid item xs={12} lg={6}>

<img className='w-full h-[40vh] object-cover'
 src={restaurant.restaurant?.images?.[1] ?? "https://via.placeholder.com/300"}
  alt="Restaurant Image"/>

</Grid>

        <Grid item xs={12} lg={6}>

<img className='w-full h-[40vh] object-cover'
 src={restaurant.restaurant?.images?.[1] ?? "https://via.placeholder.com/300"}
  alt="Restaurant Image"/>

</Grid>



</Grid>
</div>

<div className='pt-3 pb-5'>
    <h1 className='text-4xl text-black font-semibold'> {restaurant.restaurant?.name}</h1>
    <p className='text-black mt-1'>
        
        
        {restaurant.restaurant?.description}
        </p>
<div className='space-y-5 mt-5'>
        <p className='text-black flex items-center gap-3'>
        <LocationOnIcon/>
        
        <span>Palladuim mall ,Ahmedabad</span>
        </p>

        </div>

        <div className='space-y-2 mt-2'>
        <p className='text-black flex items-center gap-3'>
        <CalendarTodayIcon className='text-black'/>
        
        <span cla>Mon-Sun 9:00AM-11:00PM(Today)</span>
        </p>
        </div>

</div>

</section>
<Divider className='bg-black'/>


<section className="pt-[2rem] lg:flex relative">


    
    <div className='space-y-10 lg:w-[20%] filter p-5 shadow-md'>
        <div className='box space-y-5 lg:sticky top-28'>

        </div>
        <div>
        <Typography className='text-black' variant='h5' sx={{paddingBottom:"1rem"}}> 
          Food Types
            </Typography>
             <FormControl className=' text-black py-10 space-y-5' component={"fieldset"}>
                <RadioGroup onChange={handleFilterCategory} name='food_Type'

                 value={foodType}
                 >

                
                      {/* {foodTypes.map((item) => (
                        <FormControlLabel className='text-black'
                    key={item.value}
                   value={item.value}
                    control={<Radio sx={ {border: "0.1px solid black",
                      padding: "0.11px",
                      "&Mui-checked": {
                        borderColor: "black",
                      }
                     }}/>}
                    label={item.label}
    />
))} */}

{foodTypes.map((item) => (
  <FormControlLabel
    className="text-black"
    key={item.value}
    value={item.value}
    control={
      <Radio
        sx={{
          "&.MuiButtonBase-root": {
            border: "2px solid black",
            margin: "10px",
            borderColor: "black", // Proper border inside the radio box
            borderRadius: "50%", // Keeps it circular
            width: "20px", // Adjust size to fit perfectly
            height: "20px",
            padding: "2px", // Adjust padding so the border doesn't overflow
          },
          "&.Mui-checked": {
            border: "2px solid black", // Ensures border remains black when selected
          },
        }}
      />
    }
    label={item.label}
  />
))}


         
                </RadioGroup>
             </FormControl>



    <div>
      
    <Divider className='bg-black'/>
        <Typography  className="text-black"variant='h5' sx={{paddingBottom:"1rem"}}> 
          Food Category
            </Typography>
            <FormControl className='text-black py-10 space-y-5' component={"fieldset"}>
    <RadioGroup onChange={handleFilter} name='food_category' 
     value={selectedCategory}
    >
        {/* ✅ Ensure category is an array before mapping
        {category && category.length > 0 ? ( */}
            {restaurant.category.map((item) => (
                <FormControlLabel
                    className='border-black'
                    key={item.id}
                    value={item.name}
                    control={
                        <Radio
                            sx={{
                                "&.MuiButtonBase-root": {
                                    border: "2px solid black",
                                    margin: "10px",
                                    borderColor: "black",
                                    borderRadius: "50%",
                                    width: "20px",
                                    height: "20px",
                                    padding: "2px",
                                },
                                "&.Mui-checked": {
                                    border: "2px solid black",
                                },
                            }}
                        />
                    }
                    label={item.name}
                />
            ))
        // ) : (
        //     <p className="text-black">No categories available</p> // ✅ Fallback message
        // )}
          }
    </RadioGroup>
</FormControl>

    </div>
    </div>
    </div>

    <div className='text-black space-y-5 lg:w-[80%] lg:pl-10'>
    {menu.menuItems && menu.menuItems.length > 0 ? (
        menu.menuItems.map((item) => <MenuCard key={item.id} item={item} />)
    ) : (
        <p className="text-black">❌ No menu items available.</p>
    )}
</div>

</section>

    





    </div>
    
  )
}

export default RestaurantDetails