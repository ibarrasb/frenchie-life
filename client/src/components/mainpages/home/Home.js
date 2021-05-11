import React from 'react';
import './Home.css'
import Merle from '../../../img/merle2.jpg'

function Home() {
    return (
        <section className="home-section">
           <div className='container-box'>
           <img className='merle-dog' src={Merle}/>
           <div className="centered"> Hello </div>
           
           </div>
        </section>
    );
}

export default Home;