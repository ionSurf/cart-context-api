import React, { Component } from 'react'
import { ShopContext } from '../../contexts'
import { Header, ProductListItem } from '../../components'

class ShopPage extends Component {
    static contextType = ShopContext;
    constructor(props) {
        super(props);

        this.state = {
            productsList: [], //this.context.productsList
            isLoading: true,
        }
    }

    async componentDidMount() {
        await this.context.fetchProducts();
        this.setState({
            productsList: this.context.productsList,
            isLoading: false,
        }); console.log( this.state, this.context );
    }

    renderList() { //console.log(this.state);
        return this.state.productsList.map( (product, i) => 
        <ProductListItem
            key={i}
            keyIndex={i}
            product={product}
            handleAddToCart={this.context.addToCart}
            handleRemoveFromCart={this.context.removeFromCart}
        />
        );
    }

    renderLoading = () => (
        <div>
            Loading...
        </div>
    )

    renderLoaded = () => (
        <div>
            <Header />
                <div className="productsList row"> 
                    {this.renderList()}
                </div>
            </div>
    )

    render() {
        return this.state.isLoading ? this.renderLoading() : this.renderLoaded()
    }
}

export default ShopPage;