import "./Restaurants.scss";
import CardComp, { CardType } from "../../components/Card/Card";
import { Restaurants } from "../../assets/interfaces/Restaurants";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import RestaurantComp from "../RestaurantPage/RestaurantPage";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";

const RestaurantsPage = () => {
  ////////////data
  const restauran_page_data = useSelector(
    (state: any) => state.restaurentsPageData
  );
  const [dataToShow, setDataToShow] = useState(restauran_page_data);
  let popularRestaurants: Restaurants = {
    resturants: [],
    chef_id: ''
  };
  let openRestaurants: Restaurants = {
    resturants: [],
    chef_id: ''
  };
  let newRestaurants: Restaurants = {
    resturants: [],
    chef_id: ''
  };
  const oldDate = new Date("01/01/2021");
  const localDate = new Date();

///////////////functions
  const goToRestaurantPage=(restaurant: SingleRestaurant)=> {
    const newUrl = restaurant.restaurant_id;
    window.location.href = `/restaurants/${newUrl}`;
  }

  const handleChanges = (showByItem: string) => {
    if (showByItem.localeCompare("new") == 0) {
    
      restauran_page_data.forEach((restaurantItem:SingleRestaurant) => {
        const restaurantDateString = restaurantItem.open_date;
        const restaurantDate = new Date(restaurantDateString);
        if (oldDate.getFullYear() < restaurantDate.getFullYear()) {
          newRestaurants.resturants.push(restaurantItem);
        }
      });
      setDataToShow(newRestaurants.resturants);
    } else if (showByItem.localeCompare("popular") == 0) {
      restauran_page_data.forEach((restaurantItem:SingleRestaurant) => {
        if (restaurantItem.rating > 5) {
          popularRestaurants.resturants.push(restaurantItem);
        }
      });
      setDataToShow(popularRestaurants.resturants);
    } else if (showByItem.localeCompare("open") == 0) {
      const localHour = localDate.getHours();
      restauran_page_data.forEach((restaurantItem:SingleRestaurant) => {
        if (restaurantItem.open_hour <= localHour) {
          openRestaurants.resturants.push(restaurantItem);
        }
      });
      setDataToShow(openRestaurants.resturants);
    } else if (showByItem.localeCompare("all") == 0) {
      setDataToShow(restauran_page_data);
    }
  };

  const goBack = () => {
    window.location.href = "/";
  };
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
        {dataToShow.map((resturant:SingleRestaurant) => (
          <div
            className="restauarant-item"
            onClick={() => goToRestaurantPage(resturant)}
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
