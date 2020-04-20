export const addItemToCart = (cartItems, candidate) => {
    const cartItemExists = cartItems.find(item => item.id === candidate.id);

    if ( !cartItemExists ) {
        return [...cartItems, {...candidate, quantity: 1}]
    }

    return cartItems.map(cartItem => {
        if ( cartItem.id === candidate.id ) {
            return {...cartItem, quantity: cartItem.quantity + 1}
        }
        else {
            return cartItem;
        }
    });
};

export const clearItemFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
};

export const removeItemFromCart = (cartItems, candidate) => {
    const existing = cartItems.find(cartItem => cartItem.id === candidate.id);

    if ( existing.quantity === 1 ) {
        //TODO maybe don't need to remove
        return clearItemFromCart(cartItems, candidate);
    }

    return cartItems.map(
        cartItem => cartItem.id === candidate.id ?
            {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );
};