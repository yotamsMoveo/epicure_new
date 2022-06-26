import { SingleDish } from "../../../../assets/interfaces/SingleDish";
import { SingleOrder } from "../../../../assets/interfaces/SingleOrder";

let currentDish: SingleDish = {
    image: "",
    name: "",
    description: "",
    type: "",
    price: 0,
    restaurant_id: "",
    dish_id: 0,
    dish_time: "",
  };
  let order_dish: SingleOrder = {
    dish:currentDish,
    white_bread: false,
    sticky_rice: false,
    whithout_peanuts: false,
    sticky_less_spicy: false,
    quantity: 0,
    total_price: 0,
  };


export function setCurrentDish(allDishes:SingleDish[],currentDishId:string){
    allDishes.forEach((dish: SingleDish) => {
        if (dish.dish_id.toString() == currentDishId.toString()) {
          currentDish = dish;
        }
      });
      return currentDish;
}

export function setOrderDish(){
    return order_dish;
}

export function setBeforeUrl(currentUrl:string[]){
    let beforeUrl = "";
    for (let i = 0; i < currentUrl.length - 1; i++) {
      if (i < currentUrl.length - 2) {
        beforeUrl += currentUrl[i] + "/";
      } else {
        beforeUrl += currentUrl[i];
      }
    }
}