import React from "react";
import { connect } from 'react-redux'

import { ReactComponent as Icon } from "../../assets/cart.svg";
import './cart_icon.scss'

import { toggleCartHidden } from '../../redux/actions/cart_actions'
import { selectCartItemsCount } from "../../redux/selectors/cart_selectors";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={ toggleCartHidden }>
        <Icon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);