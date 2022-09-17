import React from 'react'
import { Link } from "react-router-dom";

const Open = () => {
    return (
        <div className='container'><div className="row">
            <h1 className='text-center mt-5'>Welcome to Our Portal</h1>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Client</h3>
                        <h5 className="card-text">This is for Client use only not for a Freelancer </h5>
                        <Link to='/clientlogin' className="btn btn-primary mt-2">Login</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body ">
                        <h3 className="card-title fw-bold">Freelancer</h3>
                        <h5 className="card-text">Freelancer can use this for Project booking</h5>
                        <Link to='/freelancerlogin' className="btn btn-primary mt-2">Login</Link>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Open