import { useEffect, useState } from "react";
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
import { getDishesByChefId, getRestaurantsById } from "../../services/api_service";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";

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

  const [orderModalOpen, setOrderModalOpen] = useState(false);
  let breakfastDishes: SingleDish[] = [];
  let launchDishes: SingleDish[] = [];
  let dinnerDishes: SingleDish[] = [];
  let isOpen = setIsOpen(currentRestaurant);


  /////////////////////////////////api-call
  const data:SingleDish[]=[];
  const restData:SingleRestaurant={
    image: "string",
    name: "string",
    chef_name: "string",
    chef_id: "string",
    open_date: "string",
    rating: 7,
    open_hour: 6,
    _id:"string"
  }
  const dish:SingleDish={
    image: "string" ,
    name: "string" ,
    description: "string", 
    type: "string" ,
    price: 9,
    restaurant_id: "string" ,
    dish_id: 7,
    dish_time:""
  }
  const [dishes,setDishes] = useState(data);
  const [baseDishes,setBaseDishes] = useState(data);
  const [selectedDish, setSelectedDish] = useState(dish);
  const [rest,setRest]=useState(restData);
  useEffect(() => {
    getRestaurantsById(currentRlestaurantId).then((res) => {
      console.log(res,"ff");
      setRest(res.data[0]);
    });
  }, []);

  useEffect(() => {
    getDishesByChefId(currentRlestaurantId).then((res) => {
      console.log(res,"hh");
      setDishes(res.data);
      setBaseDishes(res.data);
    });
  }, [rest]);
  const [restaurantDishes, setRestaurantDishes] = useState(
    dishes as SingleDish[]
);

  ////////////////////////to do function that happend after events
  const openOrderPage = (dish: SingleDish) => {
    setSelectedDish(dish);
    setOrderModalOpen((prevState) => !prevState);
  };
  const closeModal = () => {
    setOrderModalOpen(false);
  };
  const setDishesByFilter = (filter: string) => {
    switch (filter) {
      case "Breakfast": {
        breakfastDishes = setBreakfastDishes(dishes, breakfastDishes);
        setBaseDishes(breakfastDishes);
        break;
      }
      case "Lanch": {
        launchDishes = setLaunchDishes(dishes, launchDishes);
        setBaseDishes(launchDishes);
        break;
      }
      case "Dinner": {
        dinnerDishes = setDinnerDishes(dishes, dinnerDishes);
        setBaseDishes(dinnerDishes);
        break;
      }
    }
  };

  ////////////////////////component
  return (
 
    <div className="restaurant-body">
      {/* <GoTo text="<Back" where="restaurants/"/> */}
      {rest._id!="string"&& <RestaurantsDetails
        currentRestaurant={rest}
        isOpen={isOpen}
      />}
      <nav className="menu">
         <FilterNav
          labels={["Breakfast", "Lanch", "Dinner"]}
          onClickAction={setDishesByFilter}
          classNameStyleUL="menu-list"
          classNameStyleLI="list-item"
        />
      </nav>
      {baseDishes.length && <RenderDishes dishes={baseDishes} onClickFunc={openOrderPage} />}
      {orderModalOpen && (
        <ModalOrder
          selectedDish={selectedDish}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
export default RestaurantPage;
