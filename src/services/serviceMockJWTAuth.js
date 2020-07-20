export const login = (user,password) => {
    if(user === 'jprieto' && password === '1234') {
        user = JSON.stringify({
            userId: 'f676f920-fa42-47c8-aaf6-d7daf58432a6',
            userName: 'ionsurf',
            isLoggedIn: true,
            loggedInAt: '2020-20-01',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        });
        localStorage.setItem("user", user);
        return user;
    } else {
        return JSON.stringify({
            error: 'Wrong username and/or password'
        });
    }
};

export const logout = _ => {
    localStorage.removeItem("user");
}