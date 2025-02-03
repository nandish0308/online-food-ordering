import { Button, FormControl, InputLabel, MenuItem,  Select,  TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues={
    fullName:"",
    email:"",
    Password:"",
    role:""
}
const RegisterForm = () => {
    const navigate=useNavigate()
    const handleSubmit=(values)=>{
        console.log("form values",values)

    }
  return (
    <div >
    <Typography className="text-black , text-center" variant='h5' >
        register
    </Typography>
    
    <Formik  onSubmit={handleSubmit} initialValues={initialValues}>
    
    <Form>

    <Field 
                as={TextField}
                name="fullname"
                label="fullname"
                required="true"
                fullWidth
                variant="outlined"
                 className= "custom-textfield"
                  margin="normal"
                  
                
                >
                    
                </Field>
         <Field 
                as={TextField}
                name="email"
                label="email"
                required="true"
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
                        <FormControl   fullWidth>
  <InputLabel sx={{color: "Black", fontWeight: "bold"}} id="demo-simple-select-label">Role</InputLabel>
  <Field sx={{color: "Black"}}

  as={Select}
  labelId="demo-simple-select-label"
    id="demo-simple-select"
   name="Role"
    label="Role"
    // onChange={handleChange}
  >
    <MenuItem sx={{color: "Black"}} value={"ROLE_CUSTOMER"}>CUSTOMER</MenuItem>
    <MenuItem sx={{color: "Black"}} value={"ROLE_RESTAURANT_OWNER"}>RESTAURANT</MenuItem>

  </Field>
</FormControl>
                        <Button sx={{mt:2 , padding:"1rem"}} fullWidth type='submit' variant='contained'>register</Button>
                    
            
    </Form>
    </Formik>
    
    <Typography  className="text-black"variant='body2' align='center' sx={{mt:3}}>
        if have an account already? 
    
        <Button size='small' onClick={()=>navigate("/account/login")}>
           login
        </Button>
    </Typography>
    
        </div>
  )
}

export default RegisterForm