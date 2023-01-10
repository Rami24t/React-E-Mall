import React from "react";
import DishCard from "../../components/DishCard/DishCard";
import { MDBRow } from "mdb-react-ui-kit";

const FoodCategories = ({clicked, mini}) => {
  const categories = [
    {
      idCategory: "12",
      strCategory: "Vegetarian",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/vegetarian.png",
      strCategoryDescription:
        "Vegetarian cuisine is based on food that meets vegetarian standards by not including meat and animal tissue products...",
    },
    {
      idCategory: "11",
      strCategory: "Vegan",
      strCategoryThumb: "https://www.themealdb.com/images/category/vegan.png",
      strCategoryDescription:
        "Vegan products are products that are free from any animal products, including dairy, honey, and some refined sugars...",
    },
    {
      idCategory: "9",
      strCategory: "Side",
      strCategoryThumb: "https://www.themealdb.com/images/category/side.png",
      strCategoryDescription:
        "Complete your  meal with a great selection of high quality and very tasty side dishes...",
    },
    {
      idCategory: "6",
      strCategory: "Pasta",
      strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
      strCategoryDescription:
        "Tastiest Pastas. Usually made from an unleavened dough of wheat flour mixed with water or eggs...",
    },
    {
      idCategory: "10",
      strCategory: "Starter",
      strCategoryThumb: "https://www.themealdb.com/images/category/starter.png",
      strCategoryDescription:
        "Appetizing side dishes that can you can enjoy before or along the main course of a meal or after having soup or other small dishes...",
    },
    {
      idCategory: "13",
      strCategory: "Breakfast",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/breakfast.png",
      strCategoryDescription: "Great options to breaking the fasting period of the previous night. Our breakfast menu offers a composition of graet variety... "
    },
    {
      idCategory: "3",
      strCategory: "Dessert",
      strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
      strCategoryDescription:
        "Tasty desserts is to conclude a meal. The course usually consists of sweet foods, such as confections dishes or fruit..."
    },
    {
      idCategory: "5",
      strCategory: "Miscellaneous",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/miscellaneous.png",
      strCategoryDescription:
        "A varaiety of more great dishes...",
    }
  ];

  return (
    <MDBRow className={"row-cols-2 "+ (mini ? 'row-cols-md-4 ' : ' row-cols-md-3 ') +" g-4"}>
      {categories.map((cat, idx) => (
        <DishCard
           clicked={()=>clicked(cat.strCategory)}
          key={idx*Math.random()*999999}
          title={cat.strCategory}
          img={cat.strCategoryThumb}
          p={!mini ? cat.strCategoryDescription : null}
          mini={mini}
          cat={true}
        />
      ))}
    </MDBRow>
  );
};

export default FoodCategories;
