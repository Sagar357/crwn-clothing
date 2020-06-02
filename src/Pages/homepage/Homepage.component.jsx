import React from 'react'
import './HomePage.styles.scss';
import '../directory/directory.component.jsx';
import Directory from  '../directory/directory.component.jsx';

const HomePage=() =>{
    return(
        <div className="homepage">
            <Directory></Directory>
        </div>
    );
}

export default HomePage;