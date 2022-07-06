import { Chef } from "./Chef";
import { SingleDish } from "./SingleDish";

export interface SingleRestaurant {
  image: string;
  name: string;
  chef: Chef;
  chef_id: string;
  // restaurant_id: string;
  open_date: string;
  // dishes: SingleDish[];
  rating: number;
  open_hour: number;
  _id:string;
}
