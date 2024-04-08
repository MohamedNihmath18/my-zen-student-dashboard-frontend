import React, { useContext } from "react";
import "./login.css";
import LOGO from "../../assets/logo.png";
import BANNER from "../../assets/banner.png";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { Formik, Form } from "formik";
import TextField from "../../components/textField/TextField";




import * as Yup from "yup";

const Login = () => {
    const { isLoading, handleSignIn } = useContext(DataContext);

    const validate = Yup.object({
        email: Yup.string().email("Email is Invalid").required("Required"),
        password: Yup.string().required("Required"),
    });

    return (

        <div className='loginPage'>

            <div className='row m-0'>
                <div className='col-md-8'>
                    <div className='row img__container'>
                        <img
                            src={LOGO}
                            alt='..'
                            className='logo'
                        />
                    </div>
                    <div className='row'>
                        <div className='col-md-12 d-flex flex-column justify-content-center align-items-center'>
                            <div className='col-10 col-md-8 col-lg-6'>

                                <Formik
                                    initialValues={{
                                        email: "",
                                        password: "",
                                    }}
                                    validationSchema={validate}
                                    onSubmit={(values) => {
                                        handleSignIn(values);
                                    }}
                                >
                                    {(formik) => (
                                        <Form>
                                            <TextField
                                                label='Email'
                                                name='email'
                                                id='email'
                                                type='email'
                                                placeholder='Enter Register Email'
                                            />
                                            <TextField
                                                label='Password'
                                                name='password'
                                                id='password'
                                                type='password'
                                                placeholder='Enter Password'
                                            />
                                            <button
                                                type='submit'
                                                className='col-12 btn btn-lg btn-block login__btn mt-4 mb-4 d-flex justify-content-center'
                                            >
                                                {isLoading ? (
                                                    <span className='spinner-border text-white'></span>
                                                ) : (
                                                    "Login"
                                                )}
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                            <div>
                                <Link
                                    to='/forgot'
                                    className=' forgot mb-2'
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to='/signup'
                                    className=' forgot '
                                >
                                    Not Register? Sign up
                                </Link>
                            </div>
                            <Link className='forgot' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Demo Credentials
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 text-right banner__right pr-0'>
                    <img
                        src={BANNER}
                        className='banner'
                        alt='..'
                    />
                </div>
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className='modal-title'>Welcome to Zen Student Dashboard</h4>                            
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5>Demo student login ID</h5>
                            <h6 className='mx-5 text-center'> Email : mdnihmath21@gmail.com</h6>
                           <h6 span className='mx-5 text-center'> password :123456</h6> 
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Login;