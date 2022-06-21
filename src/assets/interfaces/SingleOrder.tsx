import { SingleDish } from "./SingleDish";

export interface SingleOrder {
  dish: SingleDish ;
  white_bread: boolean ;
  sticky_rice: boolean ;
  whithout_peanuts: boolean ;
  sticky_less_spicy: boolean ;
  quantity: number;
  total_price: number ;
}
