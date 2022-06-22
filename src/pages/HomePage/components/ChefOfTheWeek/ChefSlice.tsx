import { useSelector } from "react-redux";
import { Restaurants } from "../../../../assets/interfaces/Restaurants";
import { SingleRestaurant } from "../../../../assets/interfaces/SingleRestaurant";

let chefRestaurants: Restaurants = {
  resturants: [],
  chef_id: "",
};

export function getChefRestaurants(restauran_page_data:any,chefOfTheWeek:any) {
  restauran_page_data.forEach((restaurant: SingleRestaurant) => {
    if (restaurant.chef_id == chefOfTheWeek._id) {
      chefRestaurants.resturants.push(restaurant);
    }
  });
  return chefRestaurants.resturants;
}
