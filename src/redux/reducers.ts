import {combineReducers} from "@reduxjs/toolkit";
import {pizzaReducer} from "./pizza/pizzaSlice";
import {cartReducer} from "./cart/cartSlice";
import {filterReducer} from "./filter/filterSlice";
import {commentReducer} from "./comment/commentSlice";
import {drinksReducer} from "./drinks/drinksSlice";
import {foodReducer} from "./food/foodSlice";

export const rootReducer = combineReducers({
  food: foodReducer,
  pizza: pizzaReducer,
  drink: drinksReducer,
  cart: cartReducer,
  filter: filterReducer,
  comment: commentReducer
})