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

  /////////////////component
  return (
    <div className="restaurant-page-body">
      <div className="page-title">restaurants</div>
      <nav className="menu">
        <ul className="list">
          <li className="item" onClick={() => setDataToShow(allRestaurants)}>
            All
          </li>
          <li
            className="item"
            onClick={() => {
              {
                setDataToShow(newRestaurants);
              }
            }}
          >
            New
          </li>
          <li
            className="item"
            onClick={() => setDataToShow(popularRestaurants)}
          >
            Most Popular
          </li>
          <li className="item" onClick={() => setDataToShow(openRestaurants)}>
            Open Now
          </li>
          <li className="map" onClick={() => setDataToShow(openRestaurants)}>
            Map View
          </li>
        </ul>
      </nav>
      {/* <GoTo text="<Back" where="/"/> */}
      <nav className="menu-desktop">
        <ul className="list-desktop">
          <li className="item">Price Range V</li>
          <li className="item">Distance V</li>
          <li className="item">Rating V</li>
        </ul>
      </nav>
      <div className="restaurants">
        {dataToShow.map((resturant: SingleRestaurant) => (
          <div className="restauarant-item" onClick={()=>openRestaurantPage(resturant)}>
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
//onClick={() => openRestaurantPage(resturant)}
export default RestaurantsPage;
