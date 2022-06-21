import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CardType } from "../../components/Card/Card";
import "./restaurant.scss";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";
import { Dishes } from "../../assets/interfaces/Dishes";
import { SingleDish } from "../../assets/interfaces/SingleDish";

const RestaurantPage = () => {
  const restauran_page_data = useSelector(
    (state: any) => state.restaurentsPageData
  );
  const currentUrl = window.location.pathname;
  const temp = currentUrl.split("/");
  let currentRestaurantId = temp[temp.length - 1];
  let currentRestaurant: SingleRestaurant={
    image: "",
    name: "",
    chef_name: "",
    chef_id: "",
    restaurant_id: "",
    open_date: new Date(),
    dishes:[],
    rating: 0,
    open_hour: 0,
  };
  restauran_page_data.forEach((restaurant:SingleRestaurant) => {
    if(restaurant.restaurant_id==currentRestaurantId){
      currentRestaurant=restaurant;
    }
  });

  const [restaurantDishes, setRestaurantDishes] = useState(currentRestaurant.dishes);
  const baseDishes = currentRestaurant.dishes;

  let newDishesToShow: Dishes={
    dishes: [],
    restaurant_id: ""
  };

  const openOrderPage = (dish: SingleDish) => {
    const newUrl = dish.dish_id;
    const url = window.location.pathname + "/" + newUrl.toString();
    window.location.href = url;
  };

  const handleChanges = (showByItem: string) => {
    if (showByItem.localeCompare("b") == 0) {
      baseDishes.forEach((dish: SingleDish) => {
        const dishTimeString = dish.dish_time;
        if (showByItem.localeCompare(dishTimeString) == 0) {
          newDishesToShow.dishes.push(dish);
        }
      });
      setRestaurantDishes(newDishesToShow.dishes);
    } else if (showByItem.localeCompare("l") == 0) {
      baseDishes.forEach((dish: SingleDish) => {
        const dishTimeString = dish.dish_time;
        if (showByItem.localeCompare(dishTimeString) == 0) {
          newDishesToShow.dishes.push(dish);
        }
      });
      setRestaurantDishes(newDishesToShow.dishes);
    } else if (showByItem.localeCompare("d") == 0) {
      baseDishes.forEach((dish: SingleDish) => {
        const dishTimeString = dish.dish_time;
        if (showByItem.localeCompare(dishTimeString) == 0) {
          newDishesToShow.dishes.push(dish);
        }
      });
      setRestaurantDishes(newDishesToShow.dishes);
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

      {restaurantDishes.map((dish: SingleDish, index: any) => (
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
export default RestaurantPage;
