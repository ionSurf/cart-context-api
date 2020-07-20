import React from 'react';

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