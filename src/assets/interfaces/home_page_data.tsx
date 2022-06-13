import { chef } from "./chef";
import { dishes } from "./dishes";
import { restaurants } from "./restaurants";
import { signature_dish_icons } from "./signature_dish_icons";

export interface home_page_data {
  bestRestaurants: restaurants;
  bestdishes: dishes;
  signature_dish_icons: signature_dish_icons;
  chef_of_the_week: chef;
}
