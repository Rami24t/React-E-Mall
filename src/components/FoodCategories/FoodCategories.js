import React from "react";
import DishCard from "../../components/DishCard/DishCard";
import { MDBRow } from "mdb-react-ui-kit";
import { CATEGORIES } from "./categories";

const FoodCategories = ({ clicked, mini }) => {
  return (
    <MDBRow className={(mini ? 'row-cols-md-4 row-cols-4' : ' row-cols-md-3 row-cols-2') +" g-4"}>
      {CATEGORIES.map((cat, idx) => (
        <DishCard
          clicked={() => clicked(cat.strCategory)}
          key={idx * Math.random() * 999999}
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
