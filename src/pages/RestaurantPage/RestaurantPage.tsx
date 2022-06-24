import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CardType } from "../../components/Card/Card";
import "./restaurant.scss";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { SingleDish } from "../../assets/interfaces/SingleDish";
import IsOpen from "./components/IsOpen/IsOpen";
import ModalOrder from "./components/Modal/ModalOrder";
import {
  goBack,
  setBreakfastDishes,
  setCurrentRestaurant,
  setDinnerDishes,
  setIsOpen,
  setLaunchDishes,
} from "../FuncFiles/FuncFileRPage";
import GoTo from "../../components/GoTo/GoTo";

const RestaurantPage = () => {
  ///////////////////////data
  const { allRestaurants } = useSelector(
    (store: any) => store.restauarantsData
  );
  
  const currentUrl = window.location.pathname;
  const temp = currentUrl.split("/");
  let currentRlestaurantId = temp[temp.length - 1];
  const currentRestaurant = setCurrentRestaurant(
    allRestaurants,
    currentRlestaurantId
  );
  const [restaurantDishes, setRestaurantDishes] = useState(
    currentRestaurant.dishes as SingleDish[]
  );
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(currentRestaurant.dishes[0]);
  const baseDishes = currentRestaurant.dishes;
  let breakfastDishes: SingleDish[] = [];
  let launchDishes: SingleDish[] = [];
  let dinnerDishes: SingleDish[] = [];
  breakfastDishes = setBreakfastDishes(baseDishes, breakfastDishes);
  launchDishes = setLaunchDishes(baseDishes, launchDishes);
  dinnerDishes = setDinnerDishes(baseDishes, dinnerDishes);
  let isOpen = setIsOpen(currentRestaurant);

  ////////////////////////to do function that happend after events
  const openOrderPage = (dish: SingleDish) => {
    debugger;
    setSelectedDish(dish);
    setOrderModalOpen((prevState) => !prevState);
  };

  const closeModal = () => {
    setOrderModalOpen(false);
  };

  ////////////////////////component
  return (
    <div className="restaurant-body">
      {/* <GoTo text="<Back" where="restaurants/"/> */}
      <div className="restaurant-card-wrapper">
        <img src={currentRestaurant.image} className="card-img"></img>
        <div className="text-wrapper">
          <p className="card-title">{currentRestaurant.name}</p>
          <p className="card-description">
            {currentRestaurant.chef_name}
          </p>
          {isOpen && <IsOpen />}
        </div>
      </div>
      <nav className="menu">
        <ul className="menu-list">
          <li
            className="list-item"
            onClick={() => setRestaurantDishes(breakfastDishes)}
          >
            Breakfast
          </li>
          <li
            className="list-item"
            onClick={() => setRestaurantDishes(launchDishes)}
          >
            Lanch
          </li>
          <li className="list-item"
              onClick={() => setRestaurantDishes(dinnerDishes)}>
              Dinner
          </li>
        </ul>
      </nav>
      <div className="dishes">
        {restaurantDishes.map((dish: SingleDish, index:any) => (
          <div className="dish-item" onClick={() => openOrderPage(dish)}>
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
      {orderModalOpen && (
        <ModalOrder
          selectedDish={selectedDish}
          closeModal={() => closeModal()}
        />
      )}
    </div>
  );
};
export default RestaurantPage;
