import { restaurants } from "./restaurants";

export interface chef {
  image: string;
  name: string;
  description: string;
  title: string;
  restaurants: restaurants;
}
