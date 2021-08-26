import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute(props) {
    const user = JSON.parse(sessionStorage.getItem('user'));

    return user ? (
        <Route {...props} />
    ) : (
        <Redirect
            to={{
                pathname: "/login",
            }}
        />
    );
}

export default PrivateRoute;