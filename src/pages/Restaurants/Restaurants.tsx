import "./Restaurants.scss";
import ResturantsMock from "../../mock-data/mock-restaurants.json";
import CardComp, { CardType } from "../../components/Card/Card";
import { restaurants } from "../../assets/interfaces/restaurants";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import RestaurantComp from "../Restaurant/Restaurant";
import Card from "../../components/Card/Card";

const Restaurants = () => {
  const [dataToShow, setDataToShow] = useState(ResturantsMock);
  const [isOpenNowClicked, setIsOpenNowClicked] = useState(true);
  const [currantRestaurant, setCurrantRestaurant] = useState({});
  const oldDate = new Date("01/01/2021");
  const localDate = new Date();
  let newRestaurants: any[] = [];
  let popularRestaurants: any[] = [];

  function goToRestaurantPage(restaurant: any) {
    const newUrl = restaurant.restaurant_id;
    window.location.href = `/restaurants/${newUrl}`;
  }

  const handleChanges = (showByItem: string) => {
    if (showByItem.localeCompare("new") == 0) {
      ResturantsMock.forEach((restaurantItem) => {
        const restaurantDateString = restaurantItem.open_date;
        const restaurantDate = new Date(restaurantDateString);
        if (oldDate.getFullYear() < restaurantDate.getFullYear()) {
          newRestaurants.push(restaurantItem);
        }
      });
      setDataToShow(newRestaurants);
    } else if (showByItem.localeCompare("popular") == 0) {
      ResturantsMock.forEach((restaurantItem) => {
        if (restaurantItem.rating > 5) {
          popularRestaurants.push(restaurantItem);
        }
      });
      setDataToShow(popularRestaurants);
    } else if (showByItem.localeCompare("open") == 0) {
      const localHour = localDate.getHours();
      ResturantsMock.forEach((restaurantItem) => {
        if (restaurantItem.open_hour <= localHour) {
          popularRestaurants.push(restaurantItem);
        }
      });
      setDataToShow(popularRestaurants);
    } else if (showByItem.localeCompare("all") == 0) {
      setDataToShow(ResturantsMock);
    }
  };

  const goBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="restaurant-page-body">
      <div className="title">restaurants</div>

      <nav className="menu">
        <ul className="list">
          <li>
            <NavLink
              to="/restaurants"
              className="item"
              onClick={() => handleChanges("all")}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              className="item"
              onClick={() => handleChanges("new")}
            >
              New
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              className="item"
              onClick={() => handleChanges("popular")}
            >
              Most Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              className="item"
              onClick={() => handleChanges("open")}
            >
              Open Now
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/" className="go-back" onClick={goBack}>
        {"<Back"}
      </NavLink>
      <div className="restaurants">
        {dataToShow.map((resturant, index) => (
          <div
            className="restauarant-item"
            onClick={() => goToRestaurantPage(resturant)}
          >
            <Card
              img={resturant.image}
              title={resturant.name}
              description={resturant.chef_name}
              key={index}
              cardType={CardType.Small}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
