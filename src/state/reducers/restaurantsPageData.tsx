import ResturantsMock from "../../assets/mock-data/mock-restaurants.json";

const restaurentsPageReducer = (state = null, action: any) => {
  switch (action.type) {
    case "GET_RESTAURANTS_PAGE_DATA":
      return "restaurants data";
    default:
      return ResturantsMock;
  }
};
export default restaurentsPageReducer;
