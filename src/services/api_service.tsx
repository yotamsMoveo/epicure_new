
import { chef } from "../assets/interfaces/chef";
import { dishes } from "../assets/interfaces/dishes";
import { restaurants } from "../assets/interfaces/restaurants";
import { home_page_data } from "../assets/interfaces/home_page_data";

export async function getBestDishesData() :Promise<dishes>{
  const url="https://reqres.in/api/products/3";
  const response = await fetch(url);
  const data = await response.json();
  return data as dishes;
}

export async function getBestResturantsData():Promise<restaurants> {
  const url="https://reqres.in/api/products/3";
  const response = await fetch(url);
  const data = await response.json();
  return data as restaurants; 
}

export async function getChefOfTheWeekData():Promise<chef> {
  const url="https://reqres.in/api/products/3";
  const response = await fetch(url);
  const data = await response.json();
  return data as chef;
}

export async function getHomePageData():Promise<home_page_data> {
  const url="https://reqres.in/api/products/3";
  const response = await fetch(url);
  const data = await response.json();
  return data as home_page_data;
}
