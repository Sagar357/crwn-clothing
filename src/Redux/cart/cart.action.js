import CartActionTypes from '../cart/cart.type';

export const  toggleCartHidden=()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItems=item=>({

    type: CartActionTypes.ADD_ITEMS,
    payload:item
});

export const clearItemFromCart = item => ({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
});

export const removeItem = item =>({
    type:CartActionTypes.REMOVE_ITEM,
    payload:item
});