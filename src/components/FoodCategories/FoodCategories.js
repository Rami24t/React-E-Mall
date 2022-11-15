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
        "Vegetarian products are free from the practices of slaughtering or turturing animals.\r\n\r\nVegetarian cuisine is based on food that meets vegetarian standards by not including meat and animal tissue products (such as gelatin or animal-derived rennet).Lacto-ovo vegetarianism includes eggs and dairy products (such as milk and cheese without rennet). Lacto vegetarianism includes dairy products but not eggs, and ovo vegetarianism encompasses eggs but not dairy products.",
    },
    {
      idCategory: "11",
      strCategory: "Vegan",
      strCategoryThumb: "https://www.themealdb.com/images/category/vegan.png",
      strCategoryDescription:
        "Vegan products are products that are free from any products that come from animals' bodies or secretions. Veganism is a strict form of vegetarianism, it excludes all animal products, including dairy, honey, and some refined sugars if filtered and whitened with bone char. The term ethical vegan is often applied to those who not only follow a vegan diet but extend the philosophy into other areas of their lives, and oppose the exploitation of animals for any purpose. ",
    },
    {
      idCategory: "9",
      strCategory: "Side",
      strCategoryThumb: "https://www.themealdb.com/images/category/side.png",
      strCategoryDescription:
        "Complete your  meal with a great selection of high quality and very tasty side dishes. A side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade, such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions.",
    },
    {
      idCategory: "6",
      strCategory: "Pasta",
      strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
      strCategoryDescription:
        "Tastiest Pastas. Usually made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking. Rice flour, or legumes such as beans or lentils, are sometimes used in place of wheat flour to yield a different taste and texture, or as a gluten-free alternative. Pasta is a staple food of Italian cuisine. Pastas are divided into two broad categories: dried (pasta secca) and fresh (pasta fresca). ",
    },
    {
      idCategory: "10",
      strCategory: "Starter",
      strCategoryThumb: "https://www.themealdb.com/images/category/starter.png",
      strCategoryDescription:
        "Appetizing side dishes that can you can enjoy before or along the main course of a meal or after having soup or other small dishes.\r\n\r\nAn appetizer or starter is a small dish served before a meal in European cuisine. Some are served cold, others hot. Hors d'oeuvres may be served at the dinner table as a part of the meal, or they may be served before seating, such as at a reception or cocktail party. Formerly, hors d'oeuvres were also served between courses. Typically smaller than a main dish, an hors d'oeuvre is often designed to be eaten by hand. ",
    },
    {
      idCategory: "13",
      strCategory: "Breakfast",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/breakfast.png",
      strCategoryDescription: "Great options to breaking the fasting period of the previous night. Our breakfast menu offers a composition of graet variety that suits all tastes with a very wide range of preparations and ingredients to enjoy after rising from a good sleep before undertaking a day's work. Including your favourite traditional breakfast foods such as eggs and much more. Breakfast foods are prepared with a multitude of ingredients, including oats, wheat, maize, barley, noodles, starches, eggs, meats, and many more. "
    },
    {
      idCategory: "3",
      strCategory: "Dessert",
      strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
      strCategoryDescription:
        "Tasty desserts is to conclude a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts",
    },
    {
      idCategory: "5",
      strCategory: "Miscellaneous",
      strCategoryThumb:
        "https://www.themealdb.com/images/category/miscellaneous.png",
      strCategoryDescription:
        "A varaiety of more great dishes",
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
