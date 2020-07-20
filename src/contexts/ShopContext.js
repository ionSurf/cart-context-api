import React from 'react';
/** ShopContext API dependencies */
import * as shopAPIService from '../services/serviceMockShopAPI';

export const ShopContext = React.createContext({
    isLoading: true,
    productsList: [],
    cartList: [],
    fetchProducts: () => {},
    fetchProduct: id => {},
    addToCart: product => {},
    removeFromCart: id => {},
    setCartProductQuantity: q => {},
    clearCart: () => {}
})

export async function fetchProducts() {
    let response = await shopAPIService.getAll(); //console.log( response );
    // Invalid response error validation
    if ( response.error === undefined ) {
        this.setState({
            shop: {
                productsList: response,
            }
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

export async function fetchProduct(id) {
    let response = shopAPIService.getById(id);
    if ( response.error === undefined ) {
        this.setState({
            productsList: response,
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