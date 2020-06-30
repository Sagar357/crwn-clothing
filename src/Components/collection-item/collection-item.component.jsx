import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItems} from '../../Redux/cart/cart.action' 

const CollectionItem= ( {item ,addItems} )=> {
    const {name ,imageUrl ,price}=item;
    return(
    <div className='collection-item'>
        <div
        className='image'
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>
                {name}
            </span>

            <span className='price'>
                {price}
            </span>
        </div>
        <CustomButton onClick={()=>addItems(item)} inverted> 
        Add to cart 
        </CustomButton>
    </div>
)}

const mapDispatchToProps=dispatch=>({
    addItems:item=>dispatch(addItems(item))
})

export default connect(null ,mapDispatchToProps)(CollectionItem);