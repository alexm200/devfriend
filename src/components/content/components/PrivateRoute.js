import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { utils } from '../../../utils';

export const PrivateRoute = ({ component: Component, ...rest }) => {    
    return <Route {...rest} render={props => {        
        return utils.isUserLoggedIn()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }} />
}