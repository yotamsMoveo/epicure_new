import "./Restaurants.scss";
import { CardType } from "../../components/Card/Card";
import { useState } from "react";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";
import "../../state/reducers/RestaurantsSlice";
import {} from "../../state/reducers/RestaurantsSlice";
import {
  setNewRestaurants,
  setOpenRestaurants,
  setPopularRestaurants,
  openRestaurantPage
} from "../FuncFiles/FuncFlieRSP";
import FilterNav from "../../components/FilterNav/FilterNav";
import RenderRestaurants from "./components/RenderRestaurants/RenderRestaurants";

const RestaurantsPage = () => {
  ////////////data
  const { allRestaurants } = useSelector(
    (store: any) => store.restauarantsData
  );
  const [dataToShow, setDataToShow] = useState(allRestaurants);
  let newRestaurants: SingleRestaurant[] = [];
  let popularRestaurants: SingleRestaurant[] = [];
  let openRestaurants: SingleRestaurant[] = [];
  newRestaurants = setNewRestaurants(allRestaurants, newRestaurants);
  popularRestaurants = setPopularRestaurants(
    allRestaurants,
    popularRestaurants
  );
  openRestaurants = setOpenRestaurants(allRestaurants, openRestaurants);

  ////////////////////functions
  const dodo = () => {
    console.log("dodo");
  };
  const setRestaurantsByFilter = (filter: string) => {
    switch (filter) {
      case "All": {
        setDataToShow(allRestaurants);
        break;
      }
      case "New": {
        setDataToShow(newRestaurants);
        break;
      }
      case "Most Popular": {
        setDataToShow(popularRestaurants);
        break;
      }
      case "Open Now": {
        setDataToShow(openRestaurants);
        break;
      }
      case "Map View": {
        setDataToShow(openRestaurants);
        break;
      }
    }
  };


  /////////////////component
  return (
    <div className="restaurant-page-body">
      <div className="page-title">restaurants</div>
      <nav className="menu">
        <FilterNav
          labels={["All", "New", "Most Popular", "Open Now", "Map View"]}
          onClickAction={setRestaurantsByFilter}
          classNameStyleUL="list"
          classNameStyleLI="item"
        />
      </nav>
      <nav className="menu-desktop">
        <FilterNav
          labels={["Price Range V", "Distance V", "Rating V"]}
          classNameStyleUL="list-desktop"
          classNameStyleLI="item-desktop "
          onClickAction={dodo}
        />
      </nav>
      <RenderRestaurants restaurants={dataToShow} onClickFunc={openRestaurantPage}/>
    </div>
  );
};
export default RestaurantsPage;
