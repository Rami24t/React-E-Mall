import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import mall2 from '../../assets/mall2.jpeg';

const EShop = () => {
  return (
    <>
    <Navbar title={"Shop"} />
    <main className="animate-pulse  flex items-center justify-center h-[50vh]  text-yellow-200 text-4xl" style = {{ backgroundImage:`url(${mall2}`}} >
     <div className="animate-bounce text-[3rem] min-h-[180px]">Our E-Shop is Under Construction !!!</div>
    </main>
    
    
    <Footer />
    </>
  )
}

export default EShop