import React, { Component } from 'react';
import { ThemeContext, themes } from './ThemeContext';
import { AuthContext } from './AuthContext';
import { ShopContext } from './ShopContext';
import { history } from '../helpers';

/** AuthContext API dependencies */
import * as authService from '../services/serviceMockJWTAuth';

/** ShopContext API dependencies */
import * as shopAPIService from '../services/serviceShopAPI';

class GlobalContext extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: {
                theme: themes.light,
                toggleTheme: this.toggleTheme,
            },
            auth: {
                userId: '',
                token: '',
                isUserLoggedIn: false,
                authType: '',
                signIn: this.signIn,
                signOut: this.signOut
            },
            shop: {
                productsList: [],
                cartList: [],
                isLoading: true,
                fetchProducts: this.fetchProducts,
                fetchProduct: this.fetchProduct,
                //addToCart: this.addToCart,
                //removeFromCart: this.removeFromCart,
                //setCartProductQuantity: this.setCartProductQuantity,
                //clearCart: this.clearCart
            },
            alerts: []
        }
    }

    componentDidMount() {
        // Check if user is already logged in
    }

    componentDidUpdate() {
        // Display any alerts
    }

    toggleTheme = () => {
        this.setState({
            theme: this.state.theme === themes.dark ? themes.light : themes.dark,
        });
    }

    signIn = (username, password) => { //console.log('signing in', username, password)
        let response = JSON.parse(authService.login(username, password));
        if (response.error === undefined) { //console.log('signed in!', response)
            this.setState({
                auth: {
                    userId: response.userId,
                    token: response.token,
                    isUserLoggedIn: true,
                    authType: 'JWT'
                }
            });
            history.push('/');
        } else {
            console.log('error signing in')
            // Could not log user. Refresh and update alerts
            this.setState({
                alerts: [...this.state.alerts, {
                    type: 'warning',
                    text: response.error
                }]
            });
        }
    }

    signOut = () => {
        authService.logout();
    }

    fetchProducts = () => {
        let response = shopAPIService.getAll();
        if ( response.error !== undefined ) {
            this.setState({
                productsList: response.products,
            });
        } else {
            this.setState({
                alerts: [...this.state.alerts, {
                    type: 'warning',
                    text: response.error
                }]
            })
        }
    }

    fetchProduct = id => {
        let response = shopAPIService.getById(id);
        if ( response.error !== undefined ) {
            this.setState({
                productsList: response.products,
            });
        } else {
            this.setState({
                alerts: [...this.state.alerts, {
                    type: 'warning',
                    text: response.error
                }]
            })
        }
    }

    render = () => (
        <ThemeContext.Provider value={this.state.theme}>
            <AuthContext.Provider value={this.state.auth}>
                <ShopContext.Provider value={this.state.shop}>
                    {this.props.children}
                </ShopContext.Provider>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    )
}

export default GlobalContext