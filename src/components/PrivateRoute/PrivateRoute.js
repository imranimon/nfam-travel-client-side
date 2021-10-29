import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <Spinner className='m-5' animation='border' variant='danger' />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/signin",
                    state: { from: location }
                }}></Redirect>
            }
        ></Route>
    );
};

export default PrivateRoute;