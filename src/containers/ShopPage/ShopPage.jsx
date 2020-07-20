import React, { Component } from 'react'
import { ShopContext } from '../../contexts'
import { Header, ProductListItem } from '../../components'

class ShopPage extends Component {
    static contextType = ShopContext;
    constructor(props) {
        super(props);

        this.state = {
            productList: []
        }
    }

    componentDidMount() {
        this.context.fetchProducts();
    }

    renderList() {
        return this.state.productList.map( (product, i) => 
        <ProductListItem
            key={i}
            keyIndex={i}
            product={product}
            handleAddToCart={this.context.addToCart}
            handleRemoveFromCart={this.context.removeFromCart}
        />
        );
    }

    render() {
        return (
            <div>
            <Header />
                <div className="ProductList row"> 
                {this.renderList()}
                </div>
            </div>
        );
    }
}

export default ShopPage;