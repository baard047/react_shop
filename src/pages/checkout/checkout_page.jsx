import React from 'react';

import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectTotalCost } from "../../redux/selectors/cart_selectors";


import './checkout_page.scss'
import CheckoutItem from "../../components/checkout_item/checkout_item";

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/> )
        }
        <div className="total">
            <span>Total: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotalCost
});

export default connect(mapStateToProps)(CheckoutPage);