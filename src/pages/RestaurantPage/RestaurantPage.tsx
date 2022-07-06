import { useEffect, useState } from "react";
import "./restaurant.scss";
import { useSelector } from "react-redux";
import { SingleDish } from "../../assets/interfaces/SingleDish";
import ModalOrder from "./components/Modal/ModalOrder";
import {
  setBreakfastDishes,
  setCurrentRestaurant,
  setDinnerDishes,
  setIsOpen,
  setLaunchDishes,
} from "../FuncFiles/FuncFileRPage";
import FilterNav from "../../components/FilterNav/FilterNav";
import RestaurantsDetails from "./components/RestaurantDetails/RestaurantDetails";
import RenderDishes from "./components/RenderDishes/RenderDishes";
import {
  getDishesByChefId,
  getRestaurantsById,
} from "../../services/api_service";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";
import { useNavigate } from "react-router-dom";
import { Chef } from "../../assets/interfaces/Chef";
import Card, { CardType } from "../../components/Card/Card";
import CardDish from "../../components/CardDish/CardDish";

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
  let navigate = useNavigate();
  let tempChef: Chef = {
    image: "string",
    name: "string",
    description: "string",
    active: false,
    _id: "",
  };
  const data: SingleDish[] = [];
  const restData: SingleRestaurant = {
    image: "string",
    name: "string",
    chef: tempChef,
    chef_id: "string",
    open_date: "string",
    rating: 7,
    open_hour: 6,
    _id: "string",
  };
  const dish: SingleDish = {
    image: "string",
    name: "string",
    description: "string",
    type: ["string"],
    price: 9,
    restaurant_id: "string",
    dish_id: 7,
    dish_time: "",
  };
  const [dishes, setDishes] = useState(data);
  const [baseDishes, setBaseDishes] = useState(data);
  const [selectedDish, setSelectedDish] = useState(dish);
  const [rest, setRest] = useState(restData);
  useEffect(() => {
    getRestaurantsById(currentRlestaurantId).then((res) => {
      console.log(res, "ff");
      setRest(res.data[0]);
    });
  }, []);

  useEffect(() => {
    getDishesByChefId(currentRlestaurantId).then((res) => {
      console.log(res, "hh");
      setDishes(res.data);
      setBaseDishes(res.data);
    });
  }, [rest]);
  const [restaurantDishes, setRestaurantDishes] = useState(
    dishes as SingleDish[]
  );

  ////////////////////////to do function that happend after events
  const goBack = () => {
    navigate("/restaurants");
  };
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
      <h5 onClick={goBack}>{"<< back"}</h5>
      {rest._id != "string" && (
        <RestaurantsDetails currentRestaurant={rest} isOpen={isOpen} />
      )}

      <nav className="menu">
        <FilterNav
          labels={["Breakfast", "Lanch", "Dinner"]}
          onClickAction={setDishesByFilter}
          classNameStyleUL="menu-list"
          classNameStyleLI="list-item"
        />
      </nav>
      <div className="dishes">
      {baseDishes.map((dish: SingleDish,index) => (
        <div className="dish-item" key={index} onClick={()=>openOrderPage(dish)}>
          <CardDish
            img={dish.image}
            title={dish.name}
            description={dish.description}
            types={dish.type}
            price={dish.price}
            key={index}
          />
        </div>
      ))}
    </div>
      {orderModalOpen && (
        <ModalOrder selectedDish={selectedDish} closeModal={closeModal} />
      )}
    </div>
  );
};
export default RestaurantPage;
