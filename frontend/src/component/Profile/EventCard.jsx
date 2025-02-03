import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return ( 
    
    <div> 
        
        <Card>
            <CardMedia 
            sx={{height:345}}
            image="https://b.zmtcdn.com/data/pictures/7/20816697/7e537f0c5bde3842904dabb96b6c08c5_featured_v2.jpg?output-format=webp"
            />

            <CardContent>
                <div className='text-black '>
                <Typography className='pb-4' variant="h5" component="h2">
                   Paladium Mall
                    </Typography>
                <Typography variant="h5" component="h2">
                   50% off on your first order
                   
                    </Typography>
                    </div>
                    <div className='py-2 space-y-2'>
                        <p>{"Ahmedabad"}</p>
                        <p className='text-sm text-blue-500'>February14, 2025 12:00 AM</p>
                        <p className='text-sm text-red-500'>February15, 2025 12:00 AM</p>
                    </div>
            </CardContent>
            
           {false && <CardActions>
            <IconButton>
                <DeleteIcon/>
            </IconButton>

            </CardActions>}

        </Card>
    </div>
  )
}

export default EventCard