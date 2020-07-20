import React from 'react';
import { Link } from 'react-router-dom';
import { ProductListItemRating } from './';

export const ProductListItem = ({ product, keyIndex, handleAddToCart, handleRemoveFromCart }) => (
    <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100 item ui fluid">
            <Link to={`/products${product.id}`} className='title'>
                <img className="card-img-top" src={product.imageURL} alt={product.description} />
            </Link>
            <div className="card-body">
            <h4 className="card-title">
                <Link to={`/products${product.id}`} className='title'>
                    {product.title}
                </Link>
            </h4>
            <h5>{product.price}</h5>
            <p className="card-text">{product.description}</p>
            </div>
            <div className="card-footer">
                <ProductListItemRating
                    rating={product.rating} 
                />
            </div>
        </div>
    </div>
)