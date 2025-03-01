import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registeruser } from '../State/Authentication/Action.jsx' // Import registerUser correctly
import { BorderColor } from '@mui/icons-material'

const initialValues = {
    fullName: "",
    email: "",
    password: "", // Fix casing from "Password" to "password"
    role: "" // Ensure role is properly initialized
};

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        console.log("form values", values);
        dispatch(registeruser({ userData: values, navigate }));
    };

    return (
        <div>
            <Typography className="text-black text-center" variant='h5'>
                Register
            </Typography>

            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                {({ values }) => (
                    <Form>
                        <Field 
                            as={TextField}
                            name="fullName"
                            label="Full Name"
                            required
                            fullWidth
                            variant="outlined"
                            className="custom-textfield"
                            margin="normal"
                          
                        />

                        <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            required
                            fullWidth
                            variant="outlined"
                            className="custom-textfield"
                            margin="normal"
                            type="email"
                        />

                        <Field
                            as={TextField}
                            name="password"
                            label="Password"
                            required
                            fullWidth
                            variant="outlined"
                            className="custom-textfield"
                            margin="normal"
                            type="password"
                        />

                        <FormControl className='custom-textfield' fullWidth margin="normal">
                            <InputLabel sx={{ color: "Black" , fontWeight: "bold" }}>Role</InputLabel>
                            <Field sx={{ color: "Black", }} as={Select} name="role" label="Role">
                                <MenuItem sx={{ color: "Black" }} value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                                <MenuItem sx={{ color: "Black"}} value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                            </Field>
                        </FormControl>

                        <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant='contained'>
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>

            <Typography className="text-black" variant='body2' align='center' sx={{ mt: 3 }}>
                Already have an account? 
                <Button size='small' onClick={() => navigate("/account/login")}>
                    Login
                </Button>
            </Typography>
        </div>
    );
};

export default RegisterForm;
