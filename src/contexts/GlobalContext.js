import React, { Component } from 'react';
import { ThemeContext, themes, toggleTheme } from './ThemeContext';
import { AuthContext, signIn, signOut } from './AuthContext';
import { ShopContext, fetchProducts, fetchProduct } from './ShopContext';

class GlobalContext extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: {
                theme: themes.light,
                toggleTheme: toggleTheme.bind(this),
            },
            auth: {
                userId: '',
                token: '',
                isUserLoggedIn: false,
                authType: '',
                signIn: signIn.bind(this),
                signOut: signOut.bind(this)
            },
            shop: {
                productsList: [],
                cartList: [],
                isLoading: true,
                fetchProducts: fetchProducts.bind(this),
                fetchProduct: fetchProduct.bind(this),
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