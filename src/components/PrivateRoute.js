import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <AuthContext.Consumer>
        {({ isUserLoggedIn }) => (
            <Route
                render={(props) => {
                    console.log(props, rest)
                    return isUserLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
                }}
                {...rest}
            />
        )}
    </AuthContext.Consumer>
  
);