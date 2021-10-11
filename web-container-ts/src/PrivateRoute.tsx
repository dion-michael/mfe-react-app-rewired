import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom';

interface privateRouteProps {
    component: React.ComponentType,
    path: string,
}

const PrivateRoute: React.FC<privateRouteProps> = ({component: Component, path, ...rest}) => {
    const token = localStorage.getItem('token');
    return <Route path={path} render={({location}) => {
        return token 
            ? <Component/>
            : <Redirect to={{
                pathname: "/login",
                state: { from: location }
            }}/>
    }}/>
};

export default PrivateRoute;
