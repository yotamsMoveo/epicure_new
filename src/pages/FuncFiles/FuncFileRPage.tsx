import { Chef } from "../../assets/interfaces/Chef";
import { Dishes } from "../../assets/interfaces/dishes";
import { SingleDish } from "../../assets/interfaces/SingleDish";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";
import setRestaurantOpen from '../RestaurantPage/RestaurantPage';

/////////////////////interface
let tempChef:Chef={
  image: "string",
  name: "string",
  description: "string",
  active:false,
 _id: ""
}
let currentRestaurant: SingleRestaurant = {
  image: "",
  name: "",
  chef: tempChef,
  chef_id: "",
  _id: "",
  open_date: "",
  rating: 0,
  open_hour: 0,
};

let newDishesToShow: Dishes = {
  dishes: [],
  restaurant_id: "",
};

////////////////////////functions
export function setCurrentRestaurant(
  allRestaurants: SingleRestaurant[],
  currentRestaurantId: string
) {
  allRestaurants.forEach((restaurant: SingleRestaurant) => {
    if (restaurant._id == currentRestaurantId) {
      currentRestaurant = restaurant;
    }
  });
  return currentRestaurant;
}

export function setBreakfastDishes(
  allDishes: SingleDish[],
  currentBDidhes: SingleDish[]
) {
  currentBDidhes.splice(0, currentBDidhes.length - 1);
  newDishesToShow.dishes = currentBDidhes;
  allDishes.forEach((dish: SingleDish) => {
    dish.dish_time.forEach(element => {
      if(element=="b"){
        newDishesToShow.dishes.push(dish);
      }
    });
  });
  return newDishesToShow.dishes;
}

export function setLaunchDishes(
  allDishes: SingleDish[],
  currentLDidhes: SingleDish[]
) {
  currentLDidhes.splice(0, currentLDidhes.length - 1);
  newDishesToShow.dishes = currentLDidhes;
  allDishes.forEach((dish: SingleDish) => {
    dish.dish_time.forEach(element => {
      if(element=="l"){
        newDishesToShow.dishes.push(dish);
      }
    });
  });
  return newDishesToShow.dishes;
}

export function setDinnerDishes(
    allDishes: SingleDish[],
    currentDDidhes: SingleDish[]
  ) {
    currentDDidhes.splice(0, currentDDidhes.length - 1);
    newDishesToShow.dishes = currentDDidhes;
    allDishes.forEach((dish: SingleDish) => {
      dish.dish_time.forEach(element => {
        if(element=="d"){
          newDishesToShow.dishes.push(dish);
        }
      });
    });
    return newDishesToShow.dishes;
  }


export const setIsOpen=(currentRestaurant:SingleRestaurant)=>{
    const localDate = new Date();
    const localHour = localDate.getHours();
    if (currentRestaurant.open_hour <= localHour) {
      return true;
    }
    else{
        return false;
    }
}
