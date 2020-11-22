import './App.css';
import React from "react";
import { connect } from 'react-redux';

import ProductsList from "./components/productsList/productsList";
import Header from "./components/header/header";
import { mapDispatchToProps } from './store/actions';


function App({
                 products,
                 cart,
                 wishList,
                 addProdToCart,
                 removeProdFromCart,
                 addProdToWishList,
                 removeProdFromWishList}) {

    const actionCartHandler = (product) => {
        if (cart.find(el => el.id === product.id)) {
            removeProdFromCart(product);
        } else {
            addProdToCart(product);
        }
    }

    const actionWishListHandler = (product) => {
        if (wishList.find(el => el.id === product.id)) {
            removeProdFromWishList(product);
        } else {
            addProdToWishList(product);
        }
    }

    return (
    <div>
      <Header/>
      <div>
          <ProductsList
              products={products}
              actionCartHandler={actionCartHandler}
              actionWishListHandler={actionWishListHandler}
          />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cart: state.cart,
        wishList: state.wishList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
