import React from 'react';
import './Home.css'
import Merle from '../../../img/pups2.jpg'
// import TwoDogs from '../../../img/IMG_7224.heic'
import AKC from '../../../img/akc.svg'


function Home() {
    return (
        <section className="home-section">

           <div className='container-box'>
           <img className='merle-dog' alt='' src={Merle}/>
           <div className="centered-text"> #LivingTheFrenchieLife </div>
           </div>

           <div className='about-us'>
           <h2 className="headline">Welcome to Go Frenchie</h2>
           <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p1>
           </div>

           <div className='akc-section'>
           <img className='akc-svg' alt='' src={AKC} width='100px'/>
           <h3 className="headline akc-title">Quality AKC DNA Pups</h3>
           <p className='akc-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>

          <div className='payment-sec'>
          <h2 className='pnd'>Payments & Deposits</h2>
          <p className='pnd-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
          
          
          </div>
         
        </section>
    );
}

export default Home;