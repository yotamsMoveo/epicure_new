const restaurentsPageReducer = (state = null, action: any) => {
  switch (action.type) {
    case "GET_RESTAURANTS_PAGE_DATA":
      return "restaurants data";
    default:
      return "";
  }
};
export default restaurentsPageReducer;
