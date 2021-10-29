import React, { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import logo from './../../images/signin-signup.svg'

const SignIn = () => {
    const { signInUsingGoogle, setIsLoading,
        setError, error, manualSignIn } = useAuth()
    const prevLocation = useLocation();
    const redirect_url = prevLocation.state?.from || '/';
    const history = useHistory()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        setError('')
    }, [])

    const handleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)

            })
            .finally(() => setIsLoading(false))
    }

    const onManualSignIn = (data) => {
        manualSignIn(data.email, data.password)
            .then(result => {
                history.push(redirect_url)
                reset();
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div className='container mt-1'>
            <Row>
                <div className='bg p-2 text-white'>
                    <h3>Please Sign</h3>
                </div>
            </Row>
            <Row className='shadow-lg p-3 mb-5 bg-body rounded'>
                <Col xs={12} md={6}>
                    <img style={{ maxHeight: '500px' }} className='img-fluid' src={logo} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <div className='mb-2'>
                        <form onSubmit={handleSubmit(onManualSignIn)}>
                            {error !== '' && <span className='text-danger'>{error}</span>}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input {...register("email", { required: true })}
                                    type="email" className="form-control" id="email" />
                                {errors.email && <span className='text-danger'>Email is required</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input {...register("password", { required: true })}
                                    type="password" className="form-control" id="password" />
                                {errors.password && <span className='text-danger'>Password is required</span>}
                            </div>
                            <div className="mb-3">
                                <input className='btn btn-outline-danger' type="submit" value="Sign-In" />
                            </div>
                        </form>
                    </div>

                    <div className='d-inline'>
                        <Button onClick={handleSignIn} variant='outline-danger'>
                            <i className="fab fa-google me-1"></i>Sign-In Using Google
                        </Button>
                    </div>
                    <span className='ms-2'>
                        New To NFam?
                        <Link className='ms-1' to='/signup'>Sign-Up</Link>
                    </span>
                </Col>
            </Row>

        </div>
    );
};

export default SignIn;