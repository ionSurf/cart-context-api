import React, { Component } from 'react'
import { ShopContext } from '../../contexts'

class ShopPage extends Component {
    static contextType = ShopContext;

    render() {
        return (
            <div>
            hello!
            </div>
        );
    }
}

export default ShopPage;