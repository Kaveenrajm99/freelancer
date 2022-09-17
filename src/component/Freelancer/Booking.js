import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Booking = () => {
    let navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            email_: "",
            name_: "",
            project: "",
            phone: 0

        },
        validate: values => {
            const errors = {};

            if (!values.email_) {
                errors.email_ = 'Email Please';
            }
            else if (!values.name_) {
                errors.name_ = 'Enter  the Name';
            }
            if (!values.project) {
                errors.project = 'Enter the Name of Project ';
            }
            if (!values.phone) {
                errors.phone = 'Please Enter Phone Number';
            }

            return errors;
        },
        onSubmit: async values => {
            try {
                await axios.post("https://servicebookingapp.herokuapp.com/bookingdetail", values)
                alert("Project Conformed ")
                navigate('/email')
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (

        <div className='container'>
            <h1 className='text-center fw-bold'>Freelancer Apply for Project</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <label className='fw-bold'>Email</label>
                        <input type={"email"} name="email_" onChange={formik.handleChange}
                            value={formik.values.email_} className="form-control" />
                        <span className='text-primary'> {formik.errors.email_}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label className='fw-bold'>Name</label>
                        <input type={"text"} name="name_" onChange={formik.handleChange}
                            value={formik.values.name_} className="form-control" />
                        <span className='text-primary'> {formik.errors.name_}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label className='fw-bold'>Project</label>
                        <input type={"text"} name="project" onChange={formik.handleChange}
                            value={formik.values.project} className="form-control" />
                        <span className='text-primary'> {formik.errors.project}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label className='fw-bold'>Phone</label>
                        <input type={"tel"} name="phone" onChange={formik.handleChange}
                            value={formik.values.phone} className="form-control" maxlength="10" />
                        <span className='text-primary'> {formik.errors.phone}</span>
                    </div>
                </div>
                <div className='col fw-bold text-center'>
                    <input disabled={formik.errors.values} type={"submit"} className="btn btn-primary mt-4" />
                </div>
                <br></br>
            </form>
        </div>
    )
}

export default Booking