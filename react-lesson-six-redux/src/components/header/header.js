import React from "react";
import {useSelector} from "react-redux";

const Header = (props) => {

    const cart = useSelector(({cart}) => cart);
    const wishList = useSelector(({wishList}) => wishList);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">Shop</a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link">Wishlist {wishList.length}</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link">Cart {cart.length}</a>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default Header;