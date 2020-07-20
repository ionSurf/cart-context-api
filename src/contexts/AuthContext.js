import React from "react";
import { history } from '../helpers';

/** AuthContext API dependencies */
import * as authService from '../services/serviceMockJWTAuth';

export const AuthContext = React.createContext({
  authType: "",
  userId: "",
  token: "",
  isUserLoggedIn: false,
  signIn: () => {},
  signOut: () => {},
});

export function signIn(username, password) {
  //console.log('signing in', username, password)
  let response = JSON.parse(authService.login(username, password));
  if (response.error === undefined) {
    //console.log('signed in!', response)
    this.setState({
      auth: {
        userId: response.userId,
        token: response.token,
        isUserLoggedIn: true,
        authType: "JWT",
      },
    });
    history.push("/");
  } else {
    console.log("error signing in");
    // Could not log user. Refresh and update alerts
    this.setState({
      alerts: [
        ...this.state.alerts,
        {
          type: "warning",
          text: response.error,
        },
      ],
    });
  }
};

export function signOut() {
  authService.logout();
};
