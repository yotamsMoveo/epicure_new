import DishesData from "../../assets/mock-data/mock-dishes.json";

const dishesPageReducer = (state = null, action: any) => {
  switch (action.type) {
    case "GET_DISHES_PAGE_DATA":
      return "dishes data";
    default:
      return DishesData;
  }
};
export default dishesPageReducer;
