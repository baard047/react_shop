import React from "react";
import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";

import Button from "../button/button";
import CartItem from "../cart_item/cart_item";

import './cart_dropdown.scss'
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/selectors/cart_selectors";
import { toggleCartHidden } from "../../redux/actions/cart_actions";

//NOTE dispatch contains in props because null didn't pass in a connect function below
const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map(item => <CartItem key={ item.id } item={ item }/>)
                    : <span className="empty-message">Cart is empty</span>
            }
        </div>
        <Button onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </Button>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));