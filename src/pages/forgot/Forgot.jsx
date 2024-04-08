import React, { useContext } from 'react';
import LOGO from "../../assets/logo.png";
import BANNER from "../../assets/banner.png";
import { Link } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import { Formik, Form } from 'formik';
import TextField from '../../components/textField/TextField';
import * as Yup from "yup";

const Forgot = () => {
    const {  isLoading,handleForgot } = useContext(DataContext);
    const validate = Yup.object({
        email: Yup.string()
            .email("Email is Invalid")
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
                                        email: ""
                                    }}
                                    validationSchema={validate}
                                    onSubmit={(values, { resetForm }) => {
                                        handleForgot(values);
                                        resetForm({ values: "" });
                                    }}
                                >
                                    {
                                        formik => (
                                            <Form>
                                                <TextField
                                                    label="Registered Email"
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    placeholder="Enter Register Email Id"
                                                />
                                                <button type="submit" className="col-12 btn btn-lg btn-block login__btn mt-4 mb-4 d-flex justify-content-center">
                                                    {
                                                        isLoading ? (<span className="spinner-border text-white"></span>) : "Sumbit"
                                                    }
                                                </button>
                                            </Form>
                                        )
                                    }
                                </Formik>
                            </div>
                            <Link to="/" className="btn forgot btn-outline-success ">Go to Login</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-right banner__right pr-0">
                    <img src={BANNER} className="banner" alt=".." />
                </div>
            </div>
            
        </div>
    )
}

export default Forgot
