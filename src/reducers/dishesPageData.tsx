const dishesPageReducer = (state = null, action: any) => {
  switch (action.type) {
    case "GET_DISHES_PAGE_DATA":
      return "dishes data";
    default:
      return "";
  }
};
export default dishesPageReducer;
