import React, { useState, useEffect, useContext } from 'react';
import Footer from '../Footer/Footer';
import DishCard from '../DishCard/DishCard';
import Navbar from '../Navbar/Navbar';
import FoodCategories from '../FoodCategories/FoodCategories';
import { MDBRow } from 'mdb-react-ui-kit';
import { EMallContext } from '../EMallContext'

const Restaurant = () => {
const [filter, setFilter] = useState([]);
const [meals, setMeals] = useState([]);

const { state , dispatch } = useContext(EMallContext);


useEffect(() => {
    if(state?.totalAmount===0 && state?.rOrders?.length===0)
        {
            try {
                const get = JSON.parse(localStorage?.getItem('state'));
                if(get)
                    dispatch({type:'setState', payload: get})
            } catch (error) {
                console.log('error in loading data', error);
            }
        }
}, [])

useEffect(() => {    

    // const optionsC = {
    //     method: 'GET',
    //     params: {i: filter},
    //     headers: {
    //       'X-RapidAPI-Key': '5f10b51219msha63355e07f43b4ap16df82jsn9a16319e215f',
    //       'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    //     }
    //   };
    if(filter.length>1){
        // let prc = (fetch('https://the-cocktail-db.p.rapidapi.com/filter.php',optionsC).then(prc=>prc.json()).then(console.log));
        let pr1= (fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+filter).then(pr1=>pr1.json()));
        let pr1b= (fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+filter).then(pr1b=>pr1b.json()));
        let pr2= fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr="+filter, {
        method : 'GET',
        headers :
        { 
            "x-rapidapi-host" : "edamam-food-and-grocery-database.p.rapidapi.com",
            "x-rapidapi-key": "5f10b51219msha63355e07f43b4ap16df82jsn9a16319e215f"
        }
    }).then(pr2=>pr2.json());
    Promise.all([pr1,pr2, pr1b])
    .then(values=>{
        // console.log(values[1]?.hints);
        // console.log(values[0]?.meals?.length, values[1]?.hints[0]);
        if(!values[0]?.meals?.length)
        {
            values[0].meals = [];
        }
        if(!values[2]?.meals?.length)
        {
            values[2].meals = [];
        }
                if(values[0]?.meals?.length && values[2]?.meals?.length)
                   for(const element of values[0]?.meals)
                     for(let idx in values[2]?.meals)
                      if(element?.idMeal && element?.idMeal === values[2]?.meals[idx]?.idMeal)
                        {
                        values[2].meals.splice(idx,1);
                        if(idx>1)
                        idx--;
                        }

                   // console.log(values[0]?.meals?.length, values[1].hints.length);
                   if(values[1]?.hints?.length)
                   for(const h of values[1]?.hints)
                   {
                       if(h?.food?.image)
                       {
                            const hint = {idMeal: h?.food?.foodId,strMeal: h?.food?.label, strMealThumb: h?.food?.image, strCategory: h?.food?.category};
                            // console.log(h?.food);
                            values[0].meals.push(hint);
                        }
                    }
                    // console.log(values);
                    const newMeals = [...values[2].meals,...values[0].meals]
                    if(newMeals.length)
                    for(const meal of newMeals)
                    {
                        meal.price = Math.floor(Math.random()*20)+5;
                        // console.log(meal);
                    }
                    setMeals(newMeals);
                });
            }}, [filter])

            function clicked(cat){
    setFilter(cat)
    // console.log(cat);
}

return (
    <div className="restaurant bg-[#8787878c]">
    <Navbar title={'Restaurant'} withSearch={true} filter={filter} setFilter={setFilter} orders={state.totalAmount} cartLink={'/orders'}/>
    <header className='p-2  text-yellow-300'>
        <h2> Welcome to our online Restaurant </h2>
        <p> What would you like to have ? </p>
    </header>
    <main className='text-slate-700 pb-2'>
    
    {!filter?.length || !meals?.length ?
    <FoodCategories clicked={clicked} />
    :
    <>
    <FoodCategories mini={true} clicked={clicked} />
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
            meals?.map
            (
                (meal,idx)=>(
                    
                    <DishCard key={meal?.idMeal+Math.random()} title={meal?.strMeal} img={meal?.strMealThumb} p={meal?.strCategory} price={meal.price} addOrder={()=>dispatch({type:'addOrder', payload: meal})}/>
                    
                    )
            )
        }
    </MDBRow>
    </>
    }
    </main>
    <Footer page={'Restaurant site and Ordering'} />
    </div>
  )
}

export default Restaurant