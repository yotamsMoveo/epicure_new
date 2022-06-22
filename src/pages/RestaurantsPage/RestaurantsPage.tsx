import "./Restaurants.scss";
import CardComp, { CardType } from "../../components/Card/Card";
import { Restaurants } from "../../assets/interfaces/Restaurants";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import RestaurantComp from "../RestaurantPage/RestaurantPage";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";
import {
  goBack,
  openRestaurantPage,
  setNewRestaurants,
  setOpenRestaurants,
  setPopularRestaurants,
} from "./RestaurantsPageSlice";

const RestaurantsPage = () => {
  ////////////data
  const restauran_page_data = useSelector(
    (state: any) => state.restaurentsPageData
  );
  const [dataToShow, setDataToShow] = useState(restauran_page_data);
  let newRestaurants:SingleRestaurant[]=[];
  let popularRestaurants:SingleRestaurant[]=[];
  let openRestaurants:SingleRestaurant[]=[];
  newRestaurants = setNewRestaurants(restauran_page_data,newRestaurants);
  popularRestaurants = setPopularRestaurants(restauran_page_data,popularRestaurants);
  openRestaurants = setOpenRestaurants(restauran_page_data,openRestaurants);

  /////////////////component
  return (
    <div className="restaurant-page-body">
      <div className="page-title">restaurants</div>

      <nav className="menu">
        <ul className="list">
          <li>
            <NavLink
              to="/restaurants"
              className="item"
              onClick={() => setDataToShow(restauran_page_data)}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              className="item"
              onClick={() => setDataToShow(newRestaurants)}
            >
              New
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              className="item"
              onClick={() => setDataToShow(popularRestaurants)}
            >
              Most Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              className="item"
              onClick={() => setDataToShow(openRestaurants)}
            >
              Open Now
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              className="map"
              onClick={() => setDataToShow(openRestaurants)}
            >
              Map View
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="menu-desktop">
        <ul className="list-desktop">
          <li>
            <NavLink to="/restaurants" className="item-desktop">
              Price Range V
            </NavLink>
          </li>
          <li>
            <NavLink to="/restaurants" className="item-desktop">
              Distance V
            </NavLink>
          </li>
          <li>
            <NavLink to="/restaurants" className="item-desktop">
              Rating V
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/" className="go-back" onClick={goBack}>
        {"<Back"}
      </NavLink>
      <div className="restaurants">
        {dataToShow.map((resturant: SingleRestaurant) => (
          <div
            className="restauarant-item"
            onClick={()=>openRestaurantPage(resturant)}
          >
            <Card
              img={resturant.image}
              title={resturant.name}
              description={resturant.chef_name}
              key={resturant.restaurant_id}
              cardType={CardType.Small}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsPage;
