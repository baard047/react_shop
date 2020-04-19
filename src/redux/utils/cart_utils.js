export const addItemToCart = (cartItems, candidate) => {
    const cartItemExists = cartItems.find(item => item.id === candidate.id);

    if (!cartItemExists) {
        return [...cartItems, {...candidate, quantity: 1}]
    }

    return cartItems.map(cartItem => {
        if (cartItem.id === candidate.id) {
            return {...cartItem, quantity: cartItem.quantity + 1}
        } else {
            return cartItem;
        }
    });
};