import React from 'react';

export const AuthContext = React.createContext({
    authType: '',
    userId: '',
    token: '',
    isUserLoggedIn: false,
    signIn: () => {},
    signOut: () => {},
});