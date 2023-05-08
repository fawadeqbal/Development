import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function SignUp() {
    return (
        <div className="container mt-5" style={{marginBottom:'50px'}}>
            <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                <div className="card-header">
                    <h3><FontAwesomeIcon icon={faUser} /> Sign Up</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" style={{marginTop:'20px'}}>Sign Up</button>
                        <div className="mt-3 text-center">
                            Already have an account? <Link to="../signin">Sign in</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
