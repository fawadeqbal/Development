import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn() {
    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                <div className="card-header text-center">
                    <h4>Sign In</h4>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                required
                                autoFocus
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                <FontAwesomeIcon icon={faLock} className="me-2" />
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mt-4">
                            <FontAwesomeIcon icon={faUser} className="me-2" />
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-6">
                            <Link to="../forgotpassword" className="text-decoration-none">
                                Forgot password?
                            </Link>
                        </div>
                        <div className="col-6 text-end">
                            <Link to="../signup" className="text-decoration-none">
                                Don't have an account? Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
