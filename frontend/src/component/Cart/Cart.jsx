import { Box, Button, Card, Divider , Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import Cartitem from './Cartitem'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddressCart from './AddressCart'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import './Cart.css';
import { Link, Links } from 'react-router-dom';
// import * as Yup from 'yup';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline:"none",
    
    boxShadow: 24,
    p: 4,
  };
  const initialValues={
    streetAddress:"",
    state:"",
    pincode:"",
    city:"",
  }

//   }
//    const validationSchema=Yup.object({
//     StreetAddress:Yup.string().required("street address is required"),
//     state:Yup.string().required("state is required"),
//     pincode:Yup.string().required("pincode is required"),
//     city:Yup.string().required("city  is required")

//   })

const Cart = (showButton) => {
    const items=[1,1]
    const createOrderUsingSelectedAddress=()=> {};
    const handleOpenAddressModel=()=>setOpen(true) ;
    const [open, setOpen] = React.useState(false);
     const handleClose = () => setOpen(false);
    const handlesubmit=(values)=>{
        console.log("form value",values)
    };
  

  return (
    
    <>
        <main className=' text-black lg:flex justify-start'>
            <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
           {items.map((item) =>(<Cartitem/>
        ))} 
         
            <Divider className='bg-black'/> 
            <div className='billDetails px-5 text-sm'>

                <p className='font-extralight py-5'> Bill Details</p>
                <div className='space-y-3'>
                    <div className='flex justify-between text-black'>
                        <p>Item Total</p>
                        <p> $81.92</p>
                    </div>
                    <div className='flex justify-between text-black'>
                        <p>Deliver Fee</p>
                        <p> $2</p>
                    </div>
                    <div className='flex justify-between text-black'>
                        <p>Platform fee</p>
                        <p> $.65</p>
                    </div>
                    <div className='flex justify-between text-black'>
                        <p>GST and Restaurant Charges</p>
                        <p> $1.89</p>
                    </div>
                    <Divider className='bg-black'/>
                </div>
                
                <div className='flex justify-between text-black'>
                        <p>Total Pay</p>
                        <p> $86.54</p>
                    </div>
                

            </div>
            </section>
            <Divider className='bg-black' orientation='vertical' flexItem/>
            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                <div>
                    <h1 className='text-center font-semibold text-2xl py-10'> 
                        Choose Delivery Address
                        </h1>
               
                <div className='flex gap-5 flex-wrap justify-center'>

                    {[1,1,1,1,1].map((item)=>(<AddressCart handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>
                ))}

                <Divider className='bg-black' orientation='vertical' fl/>

<Card className= " flex gap-5 w-64 p-5 ">
        <AddLocationIcon className='text-black'/>
        <div className='space-y-3 text-black-500'>

            <h1 className='font-semibold text-lg text-black'>Add new Address</h1>

           
           {showButton && ( <Button   variant="outlined" fullWidth onClick={handleOpenAddressModel}>Add</Button>)}
        </div>


    </Card>
    
                </div>
                </div>

            </section>
            
        </main>

        <Modal
        open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
       


  <Box sx={style}>
    <Formik   initialValues={initialValues}
    // validationSchema={validationSchema}
    
    onSubmit={handlesubmit}>
        <Form>
<Grid container spacing={2}>
    <Grid item xs={12}>
        
    
    
    <Field
    as={TextField  }
    name="streetAddress"
    label="streetAddress"
    fullWidth
    variant="outlined"
    className= "custom-textfield"
    
   
    >
        
    </Field>

    </Grid>
    <Grid item xs={12}>
        
    
    
        <Field 
        as={TextField}
        name="state"
        label="state"
        fullWidth
        variant="outlined"
         className= "custom-textfield"
        
        >
            
        </Field>
    
        </Grid>
        <Grid item xs={12}>
        
    
    
        <Field 
        as={TextField}
        name="city"
        label="city"
        fullWidth
        variant="outlined"
         className= "custom-textfield"
        // error={!ErrorMessage("streetAddress")}
        // helperText={
        //     <ErrorMessage>
        //         {(msg)=> <span className='text-red-600'>{msg}</span>}
        //     </ErrorMessage>
        // }
        >
            
        </Field>
    
        </Grid>
        <Grid item xs={12}>
        
    
    
        <Field 
        as={TextField}
        name="pincode"
        label="pincode"
        fullWidth
        variant="outlined"
         className= "custom-textfield"
        >
            
        </Field>
    
        </Grid >
<Link to="/my-profile/address" >
    <Grid item xs ={12}>
        <Button  fullWidth variant='contained' type='submit' color='primary'>
            Deliver Here

        </Button>


    </Grid>
    </Link>
</Grid>
</Form>


    </Formik>
 
  </Box>
  
        </Modal>
    </>
  )
}

export default Cart