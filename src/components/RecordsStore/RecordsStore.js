import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import recImg from '../../assets/records1.jpeg';

const RecordsStore = () => {
  return (
    <>
    <Navbar />
    <main className="animate-pulse flex items-center justify-evenly h-[50vh] text-yellow-200 text-4xl" style = {{ backgroundImage:`url(${recImg}`, backgroundSize: 'cover', backgroundPosition: 'center center'}} >
    <a href='https://irtemallrecords.netlify.app/' title='Records Store by Izabela' className='text-reset text-center'>
      <h1 className='animate-bounce'>Our Records Store</h1>
      <p className='animate-ping'>Welcome! Please Come In!!!</p>
    </a>
    <a href='https://irtemallrecords.netlify.app/' title='Album search by Thili' className='text-reset text-center'>
      <h1 className='animate-bounce'>Search our Albums</h1>
      <p className='animate-ping'>Start Searching!!!</p>
    </a>
    </main>
    <a href=""></a>
    <Footer page="Landing" />
    </>
  )
}

export default RecordsStore