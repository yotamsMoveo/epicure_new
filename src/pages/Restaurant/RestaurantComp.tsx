import { useState } from "react";
import { NavLink } from "react-router-dom";
import CardComp from "../../components/Card/CardComp";
import "../Restaurant/restaurant.scss";
import ResturantsMock from "../../mock-data/mock-restaurants.json";

const RestaurantComp = (restaurant: any) => {
  const allrRestaurants = ResturantsMock;
  const currentUrl = window.location.pathname;
  const temp = currentUrl.split("/");
  let currentRestaurantId = temp[2];
  let currentRestaurant: any;
  allrRestaurants.forEach((restaurant) => {
    if (restaurant.restaurant_id.localeCompare(currentRestaurantId) == 0) {
      currentRestaurant = restaurant;
    }
  });
  const [restaurantDishes, setRestaurantDishes] = useState(
    currentRestaurant.dishes
  );
  const baseDishes = currentRestaurant.dishes;
  let newDishesToShow: any[] = [];

  const handleChanges = (showByItem: string) => {
    if (showByItem.localeCompare("b") == 0) {
      baseDishes.forEach((dish: any) => {
        const dishTimeString = dish.dish_time;
        if (showByItem.localeCompare(dishTimeString) == 0) {
          newDishesToShow.push(dish);
        }
      });
      setRestaurantDishes(newDishesToShow);
    } else if (showByItem.localeCompare("l") == 0) {
      baseDishes.forEach((dish: any) => {
        const dishTimeString = dish.dish_time;
        if (showByItem.localeCompare(dishTimeString) == 0) {
          newDishesToShow.push(dish);
        }
      });
      setRestaurantDishes(newDishesToShow);
    } else if (showByItem.localeCompare("d") == 0) {
      baseDishes.forEach((dish: any) => {
        const dishTimeString = dish.dish_time;
        if (showByItem.localeCompare(dishTimeString) == 0) {
          newDishesToShow.push(dish);
        }
      });
      setRestaurantDishes(newDishesToShow);
    }
  };
  const goBack = () => {
    window.location.href = `/restaurants/`;
  };

  return (
    <div className="restaurant-body">
      <NavLink
        to="/restaurants"
        className="restaurant-go-back"
        onClick={goBack}
      >
        {"<Back"}
      </NavLink>
      <div className="restaurant-restaurant-card" onClick={goBack}>
        <CardComp
          img={currentRestaurant.image}
          title={currentRestaurant.name}
          description={currentRestaurant.chef_name}
          key={currentRestaurant.restaurant_id}
          classNameProp="CardComp_small"
        />
      </div>
      <nav className="restaurant-menu">
        <ul className="restaurant-menu-list">
          <li>
            <NavLink
              to={currentUrl}
              className="restaurant-menu-item"
              onClick={() => handleChanges("b")}
            >
              Breakfast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={currentUrl}
              className="restaurant-page-menu-item"
              onClick={() => handleChanges("l")}
            >
              Lanch
            </NavLink>
          </li>
          <li>
            <NavLink
              to={currentUrl}
              className="restaurant-page-menu-item"
              onClick={() => handleChanges("d")}
            >
              Dinner
            </NavLink>
          </li>
        </ul>
      </nav>

      {restaurantDishes.map((dish: any, index: any) => (
        <div className="restaurant-restaurant-item">
          <CardComp
            img={dish.image}
            title={dish.name}
            description={dish.description}
            type={dish.type}
            price={dish.price}
            key={index}
            classNameProp="CardComp_big"
          />
        </div>
      ))}
    </div>
  );
};
export default RestaurantComp;
