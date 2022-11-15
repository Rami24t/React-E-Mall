import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import recImg from '../../assets/records1.jpeg';

const RecordsStore = () => {
  return (
    <>
    <Navbar />
    <main className="animate-pulse flex items-center justify-center h-[50vh]  text-yellow-200 text-4xl" style = {{ backgroundImage:`url(${recImg}`, backgroundSize: 'cover', backgroundPosition: 'center center'}} >
    <a href='#!' className='text-reset text-center'>
      <h1 className='animate-bounce'>Our Records Store</h1>
      <p className='animate-ping'>Welcome! Please Come In!!!</p>
    </a>
    </main>
    <Footer />
    </>
  )
}

export default RecordsStore