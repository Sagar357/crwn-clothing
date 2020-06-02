import React from 'react';
import '../menu-item/menu-item.styles.scss'

const MenuItem =(props)=> {
    return  ( <div 
     className={`${props.size} menu-items`}>
    <div className='background-image'
     style=
     {{
        backgroundImage:`url(${props.url})`,
     }}
     />
    <div className='content' >
        <h1 className='title'>{props.name}</h1>
        <span className='subtitles'>{props.text}</span>
    </div>
</div>
    );
}

export default MenuItem;