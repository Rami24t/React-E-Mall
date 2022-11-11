import React from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const EMall = () => {



  return (
    <div className='all p-1'>
    <Navbar title={'E-Mall'} />
      <header>
        <h1> IRT E-Mall </h1>
        <p> Welcome to our E-Mall! </p>
        <p> Look around and have fun </p>
      </header>
      <main>
        <div>
          <p> <Link to={'/eshop'}>Buy some clothes!</Link> </p>
        </div>
        <div>
          <p> <Link to={'/restaurant'}>Enter the Restaurant.</Link> </p>
        </div>
        <div>
          <p><a href="#rs"> to the Records Store </a></p>
        </div>
      </main>
      <Footer page={'E-Mall Landing '} />
    </div>
  )
}

export default EMall