import React from 'react';
import './checkout-item.styles.scss';
import {clearItemFromCart ,removeItem ,addItems} from '../../Redux/cart/cart.action'
import {connect} from 'react-redux'

const CheckoutItem = ({cartItem ,clearItem ,removeItem ,addItems}) =>{

    const {imageUrl ,name ,price ,quantity }=cartItem;

    return(
    <div className="checkout-item">
        <div className="image-container">
            <img 

            alt="Item"  
            src={imageUrl}
            />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
            <div className="arrow"  onClick={() => addItems(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</span>

    </div>);
};

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItemFromCart(item)) ,
    removeItem : item => dispatch(removeItem(item)),
    addItems: item => dispatch(addItems(item))
})

export default  connect(null ,mapDispatchToProps)(CheckoutItem);