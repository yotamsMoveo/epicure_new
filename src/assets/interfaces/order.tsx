import { dish } from "./dish";

export class order {
  dish: dish = new dish();
  white_bread: boolean = false;
  sticky_rice: boolean = false;
  whithout_peanuts: boolean = false;
  sticky_less_spicy: boolean = false;
  quantity: number = 0;
  total_price: number = 0;

  public setOrderDish(dish: dish) {
    this.dish = dish;
  }
}
