import "../Resraurans/Restaurants.scss";
import ResturantsMock from "../../mock-data/mock-restaurants.json";
import CardComp from "../../components/Card/CardComp";
import { restaurants } from "../../assets/interfaces/restaurants";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import RestaurantComp from "../Restaurant/RestaurantComp";

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
      <div className="restaurant-page-title">restaurants</div>

      <nav className="restaurant-page-menu">
        <ul className="restaurant-page-menu-list">
          <li>
            <NavLink
              to="/restaurants"
              className="restaurant-page-menu-item"
              onClick={() => handleChanges("all")}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              className="restaurant-page-menu-item"
              onClick={() => handleChanges("new")}
            >
              New
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              className="restaurant-page-menu-item"
              onClick={() => handleChanges("popular")}
            >
              Most Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              className="restaurant-page-menu-item"
              onClick={() => handleChanges("open")}
            >
              Open Now
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/" className="restaurant-page-go-back" onClick={goBack}>
        {"<Back"}
      </NavLink>
      <div className="restaurant-page-restaurants">
        {dataToShow.map((resturant, index) => (
          <div
            className="restaurant-page-restaurant-item"
            onClick={() => goToRestaurantPage(resturant)}
          >
            <CardComp
              img={resturant.image}
              title={resturant.name}
              description={resturant.chef_name}
              key={index}
              classNameProp="CardComp_small"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
