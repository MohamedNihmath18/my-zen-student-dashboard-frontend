import React, { useContext } from 'react';
import LOGO from "../../assets/logo.png";
import BANNER from "../../assets/banner.png";
import { Link } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Formik, Form } from 'formik';
import TextField from '../../components/textField/TextField';
import * as Yup from "yup";
import "./signup.css"

const Signup = () => {
    const { isLoading,handleSignUp} = useContext(DataContext);

   


    const validate = Yup.object({
        firstname: Yup.string()
            .max(15, "Must be less than 15 Characters")
            .min(4, "Must be at least 6 Characters")
            .required("Required"),
        lastname: Yup.string()
            .max(15, "Must be less than 15 Characters")
            .min(4, "Must be at least 6 Characters")
            .required("Required"),
        email: Yup.string()
            .email("Email is Invalid")
            .required("Required"),
        contactNo: Yup.string()
            .max(15, "Must be less than 15 Characters")
            .min(10, "Must be at least 10 Characters")
            .required("Required"),
        experience: Yup.string() 
            .max(10, "Must be less than 10 Characters")
            .min(1, "Must be at least 1 Characters")
            .required("Required"),
        qualification: Yup.string()
            .max(35, "Must be less than 35 Characters")
            .min(2, "Must be at least 2 Characters")
            .required("Required"),
        password: Yup.string()
            .max(15, "Must be less than 15 Characters")
            .min(6, "Must be at least 6 Characters")
            .required("Required"),
        cPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password Must Match")
            .required("Required"),

    })

    return (
        <div className="loginPage">
            <div className="row m-0">
                <div className="col-md-8">
                    <div className="row img__container">
                        <img src={LOGO} alt=".." className='logo' />
                    </div>
                
                    <div className="row">
                        <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                            <div className="col-10 col-md-8 col-lg-6">
                                <Formik
                                    initialValues={{
                                     
                                        email: "",
                                        firstname: "",
                                        lastname: "",
                                        contactNo: "",
                                        experience: "",
                                        qualification: "",
                                        password: "",
                                        cPassword: ""
                                    }}
                                    
                                    validationSchema={validate}
                                    onSubmit={(values, { resetForm }) => {
                                        handleSignUp(values);
                                        resetForm({ values: "" });
                                    }}
                                >
                                    {
                                        formik => (
                                            <Form>
                                                <TextField
                                                    label="First Name"
                                                    name="firstname"
                                                    id="fristname"
                                                    type="text"
                                                    placeholder="Enter Your First Name"
                                                />
                                                <TextField
                                                    label="Last Name"
                                                    name="lastname"
                                                    id="lastName"
                                                    type="text"
                                                    placeholder="Enter Your Last Name"
                                                />
                                                <TextField
                                                    label="Email"
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    placeholder="Enter Your Email"
                                                />
                                                <TextField
                                                    label="Contact No"
                                                    name="contactNo"
                                                    id="contactNo"
                                                    type="text"
                                                    placeholder="Enter Your Contact"
                                                />
                                                <TextField
                                                    label="Experience"
                                                    name="experience"
                                                    id="experience"
                                                    type="text"
                                                    placeholder="Enter Your Experience in Years"
                                                />
                                                <TextField
                                                    label="Qualification"
                                                    name="qualification"
                                                    id="qualification"
                                                    type="text"
                                                    placeholder="Enter Your Qualification"
                                                />
                                                <TextField
                                                    label="Password"
                                                    name="password"
                                                    id="password"
                                                    type="password"
                                                    placeholder="Enter Password"
                                                />
                                                <TextField
                                                    label="Confirm Password"
                                                    name="cPassword"
                                                    id="cPassword"
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                />
                                                <button type="submit" className="col-12 btn btn-lg btn-block login__btn mt-4 mb-4 d-flex justify-content-center">
                                                    {
                                                        isLoading ? (<span className="spinner-border text-white"></span>) : "Register"
                                                    }
                                                </button>
                                            </Form>
                                        )
                                    }
                                </Formik>
                            </div>
                            <Link to="/" className="forgot ">Go to Login</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-right banner__right pr-0">
                    <img src={BANNER} className="banner" alt=".." />
                </div>
            </div>
            {/* <ToastContainer/> */}

            
        </div>
    )
}

export default Signup;
