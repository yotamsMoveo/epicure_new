import { Restaurants } from "../../assets/interfaces/Restaurants";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";


let newRestaurants: Restaurants = {
    resturants: [],
    chef_id: ''
  };
  let popularRestaurants: Restaurants = {
    resturants: [],
    chef_id: ''
  };
  let openRestaurants: Restaurants = {
    resturants: [],
    chef_id: ''
  };
export function setNewRestaurants(allRestaurants:SingleRestaurant[],currentNewRestaurant:SingleRestaurant[]){
    currentNewRestaurant.splice(0,currentNewRestaurant.length-1);
    newRestaurants.resturants=currentNewRestaurant;
    const oldDate = new Date("01/01/2021");
    allRestaurants.forEach((restaurantItem:SingleRestaurant) => {
        const restaurantDateString = restaurantItem.open_date;
        const restaurantDate = new Date(restaurantDateString);
        if (oldDate.getFullYear() < restaurantDate.getFullYear()) {
          newRestaurants.resturants.push(restaurantItem);
        }
      });
      return newRestaurants.resturants;
}

export function setPopularRestaurants(allRestaurants:SingleRestaurant[],currentPopularRestaurant:SingleRestaurant[]){
    currentPopularRestaurant.splice(0,currentPopularRestaurant.length-1);
    popularRestaurants.resturants=currentPopularRestaurant;
    allRestaurants.forEach((restaurantItem:SingleRestaurant) => {
        if (restaurantItem.rating > 5) {
          popularRestaurants.resturants.push(restaurantItem);
        }
      });
      return popularRestaurants.resturants;
}

export function setOpenRestaurants(allRestaurants:SingleRestaurant[],currentOpenRestaurant:SingleRestaurant[]){
    currentOpenRestaurant.splice(0,currentOpenRestaurant.length-1);
    openRestaurants.resturants=currentOpenRestaurant;
    const localDate = new Date();
    const localHour = localDate.getHours();
    allRestaurants.forEach((restaurantItem:SingleRestaurant) => {
      if (restaurantItem.open_hour <= localHour) {
        openRestaurants.resturants.push(restaurantItem);
      }
    });
      return openRestaurants.resturants;
}



