import React from 'react';
import './productItem.css';

const ProductItem = ({product, actionCartHandler, actionWishListHandler}) => {

    const {title, price, category, description} = product;
    return (

            <div className="card text-white bg-primary mb-3 d-inline-block">
                <div className="card-header">{title} - {price}</div>
                <div className="card-body">
                    <h4 className="card-title">{category}</h4>
                    <p className="card-text">{description}</p>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => actionCartHandler(product)}
                    >Add to cart
                    </button>
                    <button
                        type="button"
                        className="btn bg-warning text-white"
                        onClick={() => actionWishListHandler(product)}
                    >Add to Wishlist
                    </button>
                </div>
            </div>

    )
}

export default ProductItem;