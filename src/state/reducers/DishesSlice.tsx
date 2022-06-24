import {createSlice} from '@reduxjs/toolkit'
import dishes from "../../assets/mock-data/mock-dishes.json";

export const dishesSlice = createSlice({
    name: 'chefOfTheWeekData',
    initialState: {
      allDishes:dishes 
    },
    reducers: {
    },
  });
  
  export const {  } = dishesSlice.actions;
  export default dishesSlice.reducer;



