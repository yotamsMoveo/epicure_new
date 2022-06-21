import ChefData from "../../assets/mock-data/mock-chefs.json";
import { Chef } from "../../assets/interfaces/Chef";

const chefDataReducer = (
  state: Chef = {
    image: "",
    name: "",
    description: "",
    chef_id: "",
  },
  action: any
) => {
  switch (action.type) {
    case "GET_CHEF_DATA":
      return state;
    default:
      return ChefData;
  }
};
export default chefDataReducer;
