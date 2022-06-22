import { Dishes } from "../../assets/interfaces/Dishes";
import { SingleDish } from "../../assets/interfaces/SingleDish";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";
let currentRestaurant: SingleRestaurant = {
  image: "",
  name: "",
  chef_name: "",
  chef_id: "",
  restaurant_id: "",
  open_date: new Date(),
  dishes: [],
  rating: 0,
  open_hour: 0,
};

let newDishesToShow: Dishes = {
  dishes: [],
  restaurant_id: "",
};
export function setCurrentRestaurant(
  allRestaurants: SingleRestaurant[],
  currentRestaurantId: string
) {
  allRestaurants.forEach((restaurant: SingleRestaurant) => {
    if (restaurant.restaurant_id == currentRestaurantId) {
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
    const dishTimeString = dish.dish_time;
    if (dishTimeString.localeCompare("b") == 0) {
      newDishesToShow.dishes.push(dish);
    }
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
    const dishTimeString = dish.dish_time;
    if (dishTimeString.localeCompare("l") == 0) {
      newDishesToShow.dishes.push(dish);
    }
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
      const dishTimeString = dish.dish_time;
      if (dishTimeString.localeCompare("d") == 0) {
        newDishesToShow.dishes.push(dish);
      }
    });
    return newDishesToShow.dishes;
  }

 export const goBack = () => {
    window.location.href = `/restaurants/`;
  };
