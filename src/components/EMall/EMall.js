import React from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import mVid from '../../assets/videoMall.mp4';
import restVid from '../../assets/videoRest.mp4';
import recordsVid from '../../assets/videoRecords.mp4';


const EMall = () => {

  return (
    <div className='all'>
    <Navbar title={'E-Mall'} />
    <div className='relative z-[-99]'>
    {/* style={{ backgroundImage:`url(${mImg1})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
    backgroundPosition: 'center bottom', backgroundBlendMode: 'difference'}} */}
      <p className='bg-[#72827ff0] text-[#f3efa3]  absolute top-[240px] left-[46%] rotate-[1.8deg] text-[2.5rem] rounded'> IRT E-Mall </p>
      <video src={mVid} autoPlay loop muted className='px-1 blur-[1.5px] absolute top-[50px] w-100  opacity-70' ></video>
      </div>  {/* <div> */}
      <header className='px-1 text-[#f3efa3] text-center font-bold'>
        <h1 className='bg-[#5a6966de] text-[#f3efa3] text-[2.5rem]  min-h-[50px] text-center'> IRT E-Mall </h1>
        <p className='text-2xl bg-[#5a6966de]'> Welcome to our E-Mall! </p>
        <p className='text-xl bg-[#5a6966de]'> Look around and have fun </p>
      </header>
      <main className='min-h-[380px] flex flex-wrap items-end justify-between p-1' >
          {/* <p> <Link to={'/eshop'}>Buy some clothes!</Link> </p> */}
        {/* </div> */}
        <div className=' min-w-[40%] font-bold relative p-[1px] rounded' 
        // style={{ backgroundImage:`url(${mImg1})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
    // backgroundPosition: 'center bottom', backgroundBlendMode: 'multiply'
    // }}
    >
          <Link to={'/restaurant'} className='text-center transition duration-200  blur-[0.1vw] hover:blur-0'>
          <video className='rounded w-[100%]' src={restVid} muted autoPlay loop>
          </video>
          <p className='pointer-events-none font-bold absolute top-16 opacity-80 text-[150%] left-36 text-[#f3efa3] z-10 text-center'>Enter Restaurant</p>
          </Link>
        </div>
        <div className='relative p-[1px]  min-w-[40%]  rounded' 
        // style={{ backgroundImage:`url(${mImg1})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
    // backgroundPosition: 'center bottom', backgroundBlendMode: 'multiply'
    // }}
    >
          <a href="#rs" className='w-[100%] inline-block text-center hover:opacity-90 blur-[0.1vw] hover:blur-0 transition duration-200'>
         <video className='rounded w-[100%]' src={recordsVid} muted autoPlay loop></video>
         <p className='font-bold pointer-events-none absolute top-16 opacity-80 text-[150%] left-36 text-[#f3efa3] z-10 text-center'>Records Store </p>
        </a>
        </div>
      </main>
      <Footer page={'E-Mall Landing '} />
    </div>
  )
}

export default EMall