import React from 'react'
import '../cart-icon/cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping_bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../Redux/cart/cart.action';
import {selectCartItemsCount} from '../../Redux/cart/cart.selectors';


const CartIcon=({toggleCartHidden ,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = state => ({
    itemCount:selectCartItemsCount(state)
});

const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});
export default connect(mapStateToProps ,mapDispatchToProps)(CartIcon);