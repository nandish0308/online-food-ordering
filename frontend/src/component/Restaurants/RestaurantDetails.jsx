import React, { useState } from 'react'
import { Divider , FormControl, FormControlLabel, Grid, RadioGroup, Radio, Typography, Checkbox } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';
import { CheckBox } from '@mui/icons-material';


const Category=[
  "All",
    "pizza",
    "Rice",
    "Biryani",
    "Chinese",
    "Burger"
]
const foodTypes=[
    {label:"All",value:"all"},
    {label:"Veg only",value:"vegS"},
    {label:"Non-veg",value:"non-veg"},
    {label:"Seasonal",value:"seasonal"}
]
const menu=[1,1,1,1,1,1]

const RestaurantDetails = () => {

    const[foodType, setFoodType]=useState("all")
    const handleFilter=(e)=>{
        setFoodType(e.target.value)
        console.log(e.target.value,e.target.name)
    }

  return (
    <div className='px-5 lg:px-20'>

        <section>
            <h3 className='text-black py-2 mt-10'>Home/india/indian fast food/3</h3>
       <div>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>

            <img className='w-full h-[40vh] object-cover'
             src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""/>
            </Grid>
            <Grid item xs={12} lg={6}>

            <img className='w-full h-[40vh] object-cover'
             src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""/>
            </Grid>
        

        <Grid item xs={12} lg={6}>

<img className='w-full h-[40vh] object-cover'
 src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt=""/>
</Grid>

        <Grid item xs={12} lg={6}>

<img className='w-full h-[40vh] object-cover'
 src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt=""/>
</Grid>



</Grid>
</div>

<div className='pt-3 pb-5'>
    <h1 className='text-4xl text-black font-semibold'> Foo Palladium Ahmedabad</h1>
    <p className='text-black mt-1'>
        
        
        Chinese, Sushi, Asian, Japanese, Desserts
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
                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>

                
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
             <FormControl className=' text-black py-10 space-y-5' component={"fieldset"}>
                <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>

                
                      {Category.map((item) => (
                        <FormControlLabel className='border-black '
                    key={item}
                    value={item}
                    control={<Radio  sx={{
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
                    }} />}
                    label={item}
    />
))}

         
                </RadioGroup>
             </FormControl>

    </div>
    </div>
    </div>

    <div className=' text-black space-y-5 lg:w-[80%] lg:pl-10'>
menu {menu.map((item)=><MenuCard/>)}
    </div>
</section>




    </div>
    
  )
}

export default RestaurantDetails