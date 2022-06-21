import { SingleDish } from "./SingleDish";

export interface SingleRestaurant {
  image: string;
  name: string;
  chef_name: string;
  chef_id: string;
  restaurant_id: string;
  open_date: Date;
  dishes: SingleDish[];
  rating: number;
  open_hour: number;
}
