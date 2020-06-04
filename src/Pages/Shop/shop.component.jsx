import React from 'react';
import ShopData from './Shop.Data.js'; 
import '../../Components/colletction-preview/collection-preview.component.jsx'
import CollectionPreview from '../../Components/colletction-preview/collection-preview.component.jsx';

class ShopPage extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state={ 
            collections:ShopData
        }
    }

    render()
    {
        const {collections}=this.state;
        return (
        <div className='shop-page'>
            {
                collections.map(({id ,...othercollectionprops})=>(
                    <CollectionPreview key={id} {...othercollectionprops}>

                    </CollectionPreview>
                ))
            }
        </div>
        );
    }
}


export default ShopPage;
