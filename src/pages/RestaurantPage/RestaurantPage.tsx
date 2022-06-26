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
import FilterNav from "../../components/FilterNav/FilterNav";
import RestaurantsDetails from "./components/RestaurantDetails/RestaurantDetails";
import RenderDishes from "./components/RenderDishes/RenderDishes";

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
  const setDishesByFilter = (filter: string) => {
    switch (filter) {
      case "Breakfast": {
        setRestaurantDishes(breakfastDishes);
        break;
      }
      case "Lanch": {
        setRestaurantDishes(launchDishes);
        break;
      }
      case "Dinner": {
        setRestaurantDishes(dinnerDishes);
        break;
      }
    }
  };

  ////////////////////////component
  return (
    <div className="restaurant-body">
      {/* <GoTo text="<Back" where="restaurants/"/> */}
      <RestaurantsDetails
        currentRestaurant={currentRestaurant}
        isOpen={isOpen}
      />
      <nav className="menu">
        <FilterNav
          labels={["Breakfast", "Lanch", "Dinner"]}
          onClickAction={setDishesByFilter}
          classNameStyleUL="menu-list"
          classNameStyleLI="list-item"
        />
      </nav>
      <RenderDishes dishes={restaurantDishes} onClickFunc={openOrderPage} />
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
