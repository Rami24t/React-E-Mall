import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import DishCard from '../DishCard/DishCard';
import Navbar from '../Navbar/Navbar';
import FoodCategories from '../FoodCategories/FoodCategories';
import { MDBRow } from 'mdb-react-ui-kit';



const Restaurant = () => {

const [filter, setFilter] = useState([]);
const [meals, setMeals] = useState([]);

useEffect(() => {

if(filter.length>1){

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
                    for(const idx in values[2]?.meals)
                       if(element?.idMeal && element?.idMeal === values[2]?.meals[idx]?.idMeal)
                              values[2].meals.splice(idx,1);
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
                setMeals(newMeals);
});
}}, [filter])

function clicked(cat){
    setFilter(cat)
    console.log(cat);
}

  return (
      <div className="restaurant">
    <Navbar title={'Restaurant'} withSearch={true} filter={filter} setFilter={setFilter}/>
    <header>
        <h2> Welcome to our online Restaurant </h2>
        <p> What would you like to have ? </p>
    </header>
    <main>
    
    {!filter?.length || !meals?.length ?
    <FoodCategories clicked={clicked} />
    :
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {meals?.map((meal,idx)=><DishCard key={idx} title={meal?.strMeal} img={meal?.strMealThumb} p={meal?.strCategory} /> )}
    </MDBRow>
    }
    </main>
    <Footer page={'Restaurant'} />
    </div>
  )
}

export default Restaurant