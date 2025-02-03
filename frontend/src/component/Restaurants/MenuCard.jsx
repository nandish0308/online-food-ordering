import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
const demo=[
  {
    category : "Nuts & seeds",
    ingedient : ["cashews"]
  },
  
  {
    category : "Protein",
    ingedient : ["Ground beef", "Bacon strips"]
  },

]
const MenuCard = () => {
  const handleCheckBoxChange=(value)=>{
    console.log("value")
  }
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <div className='lg:flex items-center justify-between'>
        <div className='lg:flex items-center lg:gap-5'>
          <img className='w-[7rem] h-[7rem] object-cover' src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
          <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
            <p className='font-semibold text-xl text-black'>Pizza</p>
            <p>$8</p>
            <p className='text-black'> Delicious to have it with different layers and toppings of your choice.</p>

          </div>
        </div>

      </div>
      <Typography  className="text-black"component="span">Add Toppings </Typography>
    </AccordionSummary>
    <AccordionDetails>
     <form >
      <div className=' text-black flex gap-5 flex-wrap '>
      {demo.map((item) =>(
      <div >
        
          <p>{item.category}</p>
       
<FormGroup className='text-black'>
  
{item.ingedient.map((item)=>(
  <FormControlLabel className='text-black' control={<Checkbox sx={{
  
      "&.MuiButtonBase-root": {
        border: "2px solid black", // Adds a border inside the checkbox
        borderRadius: "4px", // Keeps square shape with slight rounding
        width: "20px", // Ensures proper sizing
        height: "20px",
        padding: "2px", // Prevents border from overflowing
      },
      "&.Mui-checked": {
        borderColor: "black", // Keeps the border black when selected
      },
  }} onChange={()=>handleCheckBoxChang(item)}/>} label={item} />
))}

</FormGroup>


        </div>
      ))}

      
      </div>
      <div className=' text-black pt-5'>
        <Button className='text-black' variant="contained" disabled={false} type="submit">
          {true?"Add to Cart":"Out of Stock"}

        </Button>
      </div>
      </form>
    </AccordionDetails>
  </Accordion>
  )
}

export default MenuCard