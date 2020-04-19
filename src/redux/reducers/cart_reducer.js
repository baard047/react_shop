import {cartTypes} from "../types";
import {addItemToCart} from "../utils/cart_utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_CART_HIDDEN:
            return { ...state, hidden: !state.hidden };
        case cartTypes.ADD_ITEM:
            return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };

        default: return state;
    }
};
