import React,  { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { EMallContext } from '../EMallContext';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import AddPaymentAddress from '../AddPaymentAddress/AddPaymentAddress';
import CartContents from '../Cart/Cart';

const Orders = () => {
    const [optSmModal, setOptSmModal] = useState(false);
    const toggleShow = () => setOptSmModal(!optSmModal);
  
    useEffect(() => {
        if(state?.totalAmount===0)
        {
        const get = JSON.parse(localStorage?.getItem('state'));
        if(get)
        dispatch({type:'setState', payload: get})
        }
    }, [])

    const [time,setTime] = useState(new Date())
    const int = useRef();

    useEffect(() => {
      int.current=setInterval(() => setTime((prev)=> new Date(prev.getTime()+10000)), 10000)
      return () => ()=>clearInterval(int.current)
    }, [])
    

 const {state, dispatch} = useContext(EMallContext);

// console.log(state); interval log 1s
const addBtn = (meal) => (<button className='font-bold text-xl text-center p-1'  onClick={()=>dispatch({type:'decreaseAmount', payload: meal})}> - </button >);
const removeBtn = (meal) => (<button className='font-bold text-xl text-center p-1' onClick={()=>dispatch({type:'addOrder', payload: meal})}> + </button >);

  return (
    <div className='bg-[#8787878c]'>
    <Navbar title={'Order'} orders={state?.totalAmount}/>
    {    state.rOrders?.length ? <>
<p className='m-3 text-right'> Time Now: {((time).toLocaleString()).slice(0,-6) + (time).toLocaleString().slice(-3)}</p>
            <CartContents items={state?.rOrders?.map((meal) => [meal.strMeal, +meal.amount, +meal.price, addBtn(meal), removeBtn(meal) ])} />
        <ul className='flex flex-col gap-2 items-end justify-center sm:hidden'>
        <li className='flex gap-4 items-start'>
        <p>Ordered</p> <p>Amount</p> <p></p> <p>Price</p>
        </li>
            {state.rOrders?.map
            (
                (meal,idx)=>(
                    <li key={idx} className='flex gap-4 items-start'>
                     <p> {meal?.strMeal} </p>
                     <p>
                         {meal?.amount}
                     </p>
                     <button className='pb-1'  onClick={()=>dispatch({type:'decreaseAmount', payload: meal})}> - </button >
                     <button className='pb-1' onClick={()=>dispatch({type:'addOrder', payload: meal})}> + </button >
                     <p>
                         {meal?.amount*meal?.price} EUR
                     </p>
                    </li>
                )
            )
        }
        <li>Total Price: {state.rOrders?.reduce((acc,curr)=> acc + curr?.price*curr?.amount, 0).toFixed(2)} EUR</li>
        </ul>
        <button className='p-2 px-3 block hover:bg-yellow-200  hover:text-slate-400 text-yellow-300 bg-slate-400 font-bold rounded text-center my-2 mx-auto' onClick={toggleShow}> Confirm and Send Order</button >
        </>
        :
        <div className='flex flex-wrap flex-col h-[50vh] text-center justify-center'>
        <h2>Orders</h2>
        <p> You do not have any unsent orders!</p>
        <Link to="/restaurant"><button className=' text-yellow-200 '> Visit our restaurant and make some new orders now!</button ></Link>
        </div>
        }
        <AddPaymentAddress optSmModal={optSmModal} toggleShow={toggleShow} setOptSmModal={setOptSmModal} />
    <Footer page={'Restaurant Site and Orders'} />
    </div>
  )
}

export default Orders