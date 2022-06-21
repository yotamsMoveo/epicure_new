import { Chef } from "../assets/interfaces/Chef";
import { Dishes } from "../assets/interfaces/Dishes";
import { Restaurants } from "../assets/interfaces/Restaurants";


export async function getBestDishesData(): Promise<Dishes> {
  const url = "https://reqres.in/api/products/3";
  const response = await fetch(url);
  const data = await response.json();
  return data as Dishes;
}

export async function getBestResturantsData(): Promise<Restaurants> {
  const url = "https://reqres.in/api/products/3";
  const response = await fetch(url);
  const data = await response.json();
  return data as Restaurants;
}

export async function getChefOfTheWeekData(): Promise<Chef> {
  const url = "https://reqres.in/api/products/3";
  const response = await fetch(url);
  const data = await response.json();
  return data as Chef;
}


export async function getDataBySearchItem(item: string): Promise<string> {
  console.log(item);
  return "data";
}
