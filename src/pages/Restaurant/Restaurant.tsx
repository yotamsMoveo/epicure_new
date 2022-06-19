import { useState } from "react";
import { NavLink } from "react-router-dom";
import CardComp, { CardType } from "../../components/Card/Card";
import "../Restaurant/restaurant.scss";
import ResturantsMock from "../../mock-data/mock-restaurants.json";
import Card from "../../components/Card/Card";

const RestaurantComp = () => {
  const allrRestaurants = ResturantsMock;
  const currentUrl = window.location.pathname;
  const temp = currentUrl.split("/");
  let currentRestaurantId = temp[temp.length - 1];
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

  const openOrderPage = (dish: any) => {
    const newUrl = dish.dish_id;
    const url = window.location.pathname + "/" + newUrl.toString();
    window.location.href = url;
  };

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
        className="go-back"
        onClick={goBack}
      >
        {"<Back"}
      </NavLink>
      <div className="card">
        <Card
          img={currentRestaurant.image}
          title={currentRestaurant.name}
          description={currentRestaurant.chef_name}
          key={currentRestaurant.restaurant_id}
          cardType={CardType.Small}
        />
      </div>
      <nav className="menu">
        <ul className="menu-list">
          <li>
            <NavLink
              to={currentUrl}
              className="list-item"
              onClick={() => handleChanges("b")}
            >
              Breakfast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={currentUrl}
              className="list-item"
              onClick={() => handleChanges("l")}
            >
              Lanch
            </NavLink>
          </li>
          <li>
            <NavLink
              to={currentUrl}
              className="list-item"
              onClick={() => handleChanges("d")}
            >
              Dinner
            </NavLink>
          </li>
        </ul>
      </nav>

      {restaurantDishes.map((dish: any, index: any) => (
        <div
          className="dish-item"
          onClick={() => openOrderPage(dish)}
        >
          <Card
            img={dish.image}
            title={dish.name}
            description={dish.description}
            type={dish.type}
            price={dish.price}
            key={index}
            cardType={CardType.Big}
          />
        </div>
      ))}
    </div>
  );
};
export default RestaurantComp;
