import { configureStore } from "@reduxjs/toolkit";
import chefSlice from "./ChefSlice";
import restauarantsSlice from './RestaurantsSlice';
import dishesSlice from './DishesSlice';
export default configureStore({
    reducer:{
        chefData:chefSlice,
        restauarantsData:restauarantsSlice,
        dishesData:dishesSlice
    }
});