import { createSlice, configureStore } from "@reduxjs/toolkit";
// import {setNewRestaurants,setOpenRestaurants,setPopularRestaurants} from './FuncFlieRSP'
import restaurants from "../../assets/mock-data/mock-restaurants.json";
import { Restaurants } from "../../assets/interfaces/Restaurants";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";


export const restauarantsSlice = createSlice({
  name: "restauarantsData",
  initialState: {
    allRestaurants: restaurants,
  },
  reducers: {},
});

export const {} = restauarantsSlice.actions;
export default restauarantsSlice.reducer;
