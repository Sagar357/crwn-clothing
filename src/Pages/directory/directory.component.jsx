import React from 'react';
import '../../Components/menu-item/menu-item.component.jsx';
import '../directory/directory.styles.scss'
import MenuItem from  '../../Components/menu-item/menu-item.component.jsx';

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections:[{
                id:1,
            name:'HATS',
            text:'SHOP NOW',
            imageUrl:'https://i.pinimg.com/564x/18/52/5e/18525ed65ad6092aa747afe8209db239.jpg'
            ,linkUrl:''
        },

        {
            id:2,
            name:'JACKETS',
            text:'SHOP NOW',
            imageUrl:'https://ae01.alicdn.com/kf/HTB1wy2zQXXXXXctXVXXq6xXFXXXY/Winter-Women-Jacket-Solid-Women-Basic-Coats-Coat-Female-Down-Jacket-Slim-Women-s-Sexy-Biker.jpg',
            linkUrl:''
        },
        
        {
            id:3,
            name:'SNEAKERS',
            text:'SHOP NOW',
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTb-DWJz83yhby_VqbhaWReW6bsHm4EziGSvj6GnnEg4DwEc3M6&usqp=CAU',
            linkUrl:''
        },

        {
            id:4,
            name:'WOMENS',
            size:'large',
            text:'SHOP NOW',
            imageUrl:'https://static1.bigstockphoto.com/3/9/2/large1500/293204083.jpg',
            linkUrl:''
        },

        {
            id:5,
            name:'MENS',
            text:'SHOP NOW',
            size:'large' ,
            imageUrl:'data:image/jpeg;base64,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',
            linkUrl:''
        },
    ]}

    }

    render(){

        return (
            <div className='directory-menu'>
            {this.state.sections.map(({id ,name ,text ,imageUrl ,size ,linkUrl}) =>(
                
                <MenuItem key={id} name={name.toLowerCase()} text={text.toLowerCase()} url={imageUrl} size={size} linkUrl={linkUrl}></MenuItem>

            ))}
            </div>
        );
    }
}

export default Directory; 