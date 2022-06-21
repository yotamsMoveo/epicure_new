import chefDataReducer from "./chefsData";
import homePageReducer from "./homePageData";
import restaurentsPageReducer from "./restaurantsPageData";
import dishesPageReducer from "./dishesPageData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  chefData: chefDataReducer,
  homePageData: homePageReducer,
  restaurentsPageData: restaurentsPageReducer,
  dishesPageData: dishesPageReducer,
});

export default allReducers;
