import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CardType } from "../../components/Card/Card";
import "./restaurant.scss";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";
import { Dishes } from "../../assets/interfaces/Dishes";
import { SingleDish } from "../../assets/interfaces/SingleDish";
import IsOpen from "./components/IsOpen/IsOpen";
import { Modal } from "react-bootstrap";
import ModalOrder from "./components/Modal/ModalOrder";
import { goBack, setBreakfastDishes, setCurrentRestaurant, setDinnerDishes, setLaunchDishes } from "./RestaurantPageSlice";

const RestaurantPage = () => {
///////////////////////data
  const restauran_page_data = useSelector(
    (state: any) => state.restaurentsPageData
  );
  const currentUrl = window.location.pathname;
  const temp = currentUrl.split("/");
  let currentRestaurantId = temp[temp.length - 1];
  const currentRestaurant=setCurrentRestaurant(restauran_page_data,currentRestaurantId);
  const [restaurantDishes, setRestaurantDishes] = useState(
    currentRestaurant.dishes
  );
  const [isRestaurantOpen, setRestaurantOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(currentRestaurant.dishes[0]);
  const baseDishes = currentRestaurant.dishes;
  let breakfastDishes:SingleDish[]=[];
  let launchDishes:SingleDish[]=[];
  let dinnerDishes:SingleDish[]=[];
  breakfastDishes=setBreakfastDishes(baseDishes,breakfastDishes);
  launchDishes=setLaunchDishes(baseDishes,launchDishes);
  dinnerDishes=setDinnerDishes(baseDishes,dinnerDishes);


 ////////////////////////to do
  const openOrderPage = (dish: SingleDish) => {
    setSelectedDish(dish);
    setOrderModalOpen(prevState => !prevState);
  };
  const localDate = new Date();
  const localHour = localDate.getHours();
  if (currentRestaurant.open_hour <= localHour) {
    setRestaurantOpen(prevState => !prevState);
  }

  const closeModal=()=>{
    setOrderModalOpen(false);
  }
  
////////////////////////component
  return (
    <div className="restaurant-body">
      
      <NavLink to="/restaurants" className="go-back" onClick={goBack}>
        {"<Back"}
      </NavLink>
      <div className="restaurant-card-wrapper">
        <img src={currentRestaurant.image} className="card-img"></img>
        <div className="text-wrapper">
          <text className="card-title">{currentRestaurant.name}</text>
          <text className="card-description">
            {currentRestaurant.chef_name}
          </text>
          {isRestaurantOpen && <IsOpen/>}
        </div>
      </div>
      <nav className="menu">
        <ul className="menu-list">
          <li>
            <NavLink
              to={currentUrl}
              className="list-item"
              onClick={() => setRestaurantDishes(breakfastDishes)}
            >
              Breakfast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={currentUrl}
              className="list-item"
              onClick={() => setRestaurantDishes(launchDishes)}
            >
              Lanch
            </NavLink>
          </li>
          <li>
            <NavLink
              to={currentUrl}
              className="list-item"
              onClick={() => setRestaurantDishes(dinnerDishes)}
            >
              Dinner
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="dishes">
        {restaurantDishes.map((dish: SingleDish) => (
          <div className="dish-item" onClick={() => openOrderPage(dish)}>
            <Card
              img={dish.image}
              title={dish.name}
              description={dish.description}
              type={dish.type}
              price={dish.price}
              key={dish.dish_id}
              cardType={CardType.Big}
            />
          </div>
        ))}
      </div>
      {orderModalOpen && <ModalOrder selectedDish={selectedDish} closeModal={closeModal}/>}
    </div>
    
  );
};
export default RestaurantPage;
