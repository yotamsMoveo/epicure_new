import {createSlice,configureStore, PayloadAction} from '@reduxjs/toolkit'
import restaurantsMock from "../../assets/mock-data/mock-restaurants.json";
import chef from "../../assets/mock-data/mock-chefs.json";
import { Restaurants } from '../../assets/interfaces/Restaurants';
import { SingleRestaurant } from '../../assets/interfaces/SingleRestaurant';

let chefRestaurants: Restaurants = {
    resturants: [],
    chef_id: "",
  };
  
export const chefSlice = createSlice({
    name: 'chefOfTheWeekData',
    initialState: {
      chefRest: chefRestaurants.resturants,
      chefData: chef,
    },
    reducers: {
      getChefRestaurants: (state) => {
        state.chefRest=restaurantsMock;
      },
    },
  });
  
  export const { getChefRestaurants } = chefSlice.actions;
  export default chefSlice.reducer;



