import React, { createContext, useReducer } from "react";

export const EMallContext = createContext();

export default function ContextProvider({ children }) {
  function reducer(prev, action) {
    switch (action.type) {
      case "placeOrder":
        if (!prev.placedOrders) prev.placedOrders = [];
        prev?.placedOrders?.push({
          Information: action.payload,
          Order: prev.rOrders,
        });
        alert("We have successfully received your order!!!\n");
        prev = {...prev, rOrders: [], cart: 0, totalAmount: 0};
        localStorage.setItem("state", JSON.stringify(prev));
        return { ...prev};
      case "addOrder":
        let exists = prev.rOrders.findIndex(
          (order) => order.idMeal === action.payload.idMeal
        );
        if (exists >= 0) prev.rOrders[exists].amount++;
        else {
          const newOrder = action.payload;
          newOrder.amount = 1;
          for (const key in newOrder) {
            if (
              newOrder[key] == "" ||
              newOrder[key] == " " ||
              newOrder[key] == null ||
              key.startsWith("strInstructions") ||
              key == null
            ) {
              delete newOrder[key];
              delete action.payload[key];
            }
          }
          prev.rOrders.push(newOrder);
        }
        prev.totalAmount++;
        localStorage.setItem("state", JSON.stringify(prev));
        return { ...prev };
      case "decreaseAmount":
        let exists2 = prev.rOrders.findIndex(
          (order) => order.idMeal === action.payload.idMeal
        );
        if (exists2 >= 0 && prev.rOrders[exists2].amount > 1)
          prev.rOrders[exists2].amount--;
        else if (exists2 >= 0 && prev.rOrders[exists2].amount === 1)
          prev.rOrders.splice(exists2, 1);
        if (prev.totalAmount >= 1) prev.totalAmount--;
        localStorage.setItem("state", JSON.stringify(prev));
        return { ...prev };
      case "setState":
        if (action.payload) return { ...action.payload };
        break;
      default:
        break;
    }
    return prev;
  }

  const [state, dispatch] = useReducer(reducer, {
    rOrders: [],
    cart: 0,
    totalAmount: 0,
    placedOrders: [],
  });

  return (
    <EMallContext.Provider value={{ state, dispatch }}>
      {children}
    </EMallContext.Provider>
  );
}
