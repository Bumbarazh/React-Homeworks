import React from "react";

import ProductItem from "../productItem/productItem";

const ProductsList = ({products, actionCartHandler, actionWishListHandler}) => {
    return (
        <div>
            {products.map(product => {
                return (
                    <ProductItem
                        product={product}
                        key={product.id}
                        actionCartHandler={actionCartHandler}
                        actionWishListHandler={actionWishListHandler}
                    />
                )
            })}
        </div>
    )
}

export default ProductsList;