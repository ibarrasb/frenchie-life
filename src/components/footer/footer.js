import './footer.css'

import React from 'react';

import InstaSVG from '../../img/instagram-brands.svg'


const footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='copyright-box'>
                        <a href="https://instagram.com/frenchielife_llc?igshid=144jm8v95pdvi" target="_blank">
                        <img className='insta-svg' src={InstaSVG}  alt ="" width="30"/>
                        </a>
                        <p> © Copyright 2021 Go Frenchie</p>
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
            
        </footer>
    );
};

export default footer;