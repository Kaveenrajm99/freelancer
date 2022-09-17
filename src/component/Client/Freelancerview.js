// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Freelancerview = () => {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);


    const fetchData = async () => {
        const { data } = await axios.get('https://servicebookingapp.herokuapp.com/bookingdetail', {
            headers: {
                Authorization: window.localStorage.getItem("loginsecretkey")
            }
        });
        setPosts(data);
    };


    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!window.localStorage.getItem("loginsecretkey")) {
            navigate('/clientlogin')
        }
    }, [])

    const handleLogout = () => {
        window.localStorage.removeItem('loginsecretkey')
        navigate('/')
    }

    return (
        <div >
            <h1 className='fw-bold text-center'>Freelance Who Applied</h1>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to={'/projectdetail'} class="btn btn-dark m-2" type="button" >Add Services</Link>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr className='text-center'>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Project</th>
                                <th>Phone</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                posts.map((post) => {
                                    return <tr className='text-center'>
                                        <td>{post.name_}</td>
                                        <td>{post.email_}</td>
                                        <td>{post.project}</td>
                                        <td>{post.phone}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-dark m-2" type="button" onClick={handleLogout}>Logout</button>
                </div>
            </div>

        </div>

    );
};

export default Freelancerview