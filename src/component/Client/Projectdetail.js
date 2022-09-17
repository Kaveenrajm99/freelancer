import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



const Projectdetail = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);


    const fetchData = async () => {
        const { data } = await axios.get('https://servicebookingapp.herokuapp.com/servicedetail', {
            headers: {
                Authorization: window.localStorage.getItem("loginsecretkey")
            }
        })
        setPosts(data);

    };


    useEffect(() => {
        fetchData();
    }, []);


    const formik = useFormik({

        initialValues: {
            project: "",
            techonology: "",
            timeperiod: ""

        },
        validate: values => {
            const errors = {};

            if (!values.project) {
                errors.project = 'Title Please';
            }
            else if (!values.techonology) {
                errors.techonology = 'Enter the Techonology';
            }
            else if (!values.timeperiod) {
                errors.timeperiod = 'Enter the Time Period';
            }
            return errors;
        },
        onSubmit: async values => {
            try {
                await axios.post('https://servicebookingapp.herokuapp.com/service-detail', values)
                alert("Project generated:)")
                navigate('/freelancerview')


            } catch (error) {
                console.log(error);
            }

        },
    })

    // useEffect(() => {
    //     if (!window.localStorage.getItem("loginsecretkey")) {
    //         navigate('/adminlogin')
    //     }
    // }, [])


    return (

        <div className='container'>
            <h3 className='mt-3 fw-bold'>Add Project</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className='row mt-2'>
                    <div className='col-lg-6'>
                        <label>Project</label>
                        <input type={"text"} name="project" onChange={formik.handleChange}
                            value={formik.values.project} className="form-control" />
                        <span className='text-warning'> {formik.errors.project}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Techonology</label>
                        <input type={"text"} name="techonology" onChange={formik.handleChange}
                            value={formik.values.techonology} className="form-control" />
                        <span className='text-warning'> {formik.errors.techonology}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Time Period</label>
                        <input type={"text"} name="timeperiod" onChange={formik.handleChange}
                            value={formik.values.timeperiod} className="form-control" />
                        <span className='text-warning'> {formik.errors.timeperiod}</span>
                    </div>
                    <div >
                        <button disabled={formik.errors.values} type={"submit"} className="btn btn-primary m-3">submit</button>
                        <Link to='/customerview' className="btn btn-primary m-3">Go Back</Link>
                    </div>
                </div>
            </form><br />
            <div >
                <h1 className='text-center fw-bold mb-2'>Project List </h1>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr className='text-center fs-3'>

                                    <th>Project</th>
                                    <th>Techonology</th>
                                    <th>Time Period</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    posts.map((post) => {
                                        return <tr className='fw-bold text-center mt-5'>
                                            <td>{post.project}</td>
                                            <td>{post.techonology}</td>
                                            <td>{post.timeperiod}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projectdetail;