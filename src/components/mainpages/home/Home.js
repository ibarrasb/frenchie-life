import React from 'react';
import './Home.css'
import Merle from '../../../img/pups2.jpg'
// import TwoDogs from '../../../img/IMG_7224.heic'


function Home() {
    return (
        <section className="home-section">
           <div className='container-box'>
           
           <img className='merle-dog' src={Merle}/>

           <div className="centered-text"> #LivingTheFrenchieLife </div>
          
           </div>
          
         
        </section>
    );
}

export default Home;