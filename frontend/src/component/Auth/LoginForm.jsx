import { Password } from '@mui/icons-material'
import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const initialValues={
    email:"",
    Password:""
}
const LoginForm = () => {

const navigate=useNavigate()
    const handleSubmit=(values)=>{
        console.log("form values",values)

    }
  return (
    <div >
<Typography className="text-black , text-center" variant='h5' >
    Login
</Typography>

<Formik  onSubmit={handleSubmit} initialValues={initialValues}>

<Form>
     <Field 
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
             className= "custom-textfield"
              margin="normal"
              type="email"
            
            >
                
            </Field>

             <Field 
                    as={TextField}
                    name="password"
                    label="password"
                    fullWidth
                    variant="outlined"
                     className= "custom-textfield"
                     margin="normal"
                     type="password"
                    
                    >
                        
                    </Field>

                    <Button sx={{mt:2 , padding:"1rem"}} fullWidth type='submit' variant='contained'>Login</Button>
                
        
</Form>
</Formik>

<Typography  className="text-black"variant='body2' align='center' sx={{mt:3}}>
    Don't have an account? 

    <Button size='small' onClick={()=>navigate("/account/register")}>
        register
    </Button>
</Typography>

    </div>
  )
}

export default LoginForm