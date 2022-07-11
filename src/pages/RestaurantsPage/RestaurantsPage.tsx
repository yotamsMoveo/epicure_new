import "./Restaurants.scss";
import { CardType } from "../../components/Card/Card";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";
import "../../state/reducers/RestaurantsSlice";
import {} from "../../state/reducers/RestaurantsSlice";
import {
  setNewRestaurants,
  setOpenRestaurants,
  setPopularRestaurants,
} from "../FuncFiles/FuncFlieRSP";
import FilterNav from "../../components/FilterNav/FilterNav";
import RenderRestaurants from "./components/RenderRestaurants/RenderRestaurants";
import { getResturantsData } from "../../services/api_service";
import { useNavigate } from "react-router-dom";
import CatalogMagic from "../../components/Laoder/Laoder";

const RestaurantsPage = () => {
  ////////////data
  //////////////redux
  const { allRestaurants } = useSelector(
    (store: any) => store.restauarantsData
  );
  const [dataToShow, setDataToShow] = useState(allRestaurants);
  
  let newRestaurants: SingleRestaurant[] = [];
  let popularRestaurants: SingleRestaurant[] = [];
  let openRestaurants: SingleRestaurant[] = [];
  const [open, setOpen] = useState(openRestaurants);
  const [newRes, setNew] = useState(newRestaurants);
  const [popular, setPopular] = useState(popularRestaurants);
  // newRestaurants = setNewRestaurants(allRestaurants, newRestaurants);
  // popularRestaurants = setPopularRestaurants(
  //   allRestaurants,
  //   popularRestaurants
  // );
  // openRestaurants = setOpenRestaurants(allRestaurants, openRestaurants);

  ////////////////////api call
  const data: SingleRestaurant[] = [];
  const [restaurants, setRestaurants] = useState(data);
  const [base, setBase] = useState(data);
  useEffect(() => {
    getResturantsData().then((res) => {
      setRestaurants(res.data);
      setBase(res.data);
      newRestaurants = setNewRestaurants(res.data, newRestaurants);
      setNew(newRestaurants);
      popularRestaurants = setPopularRestaurants(
        res.data,
        popularRestaurants
      );
      setPopular(popularRestaurants);
      openRestaurants = setOpenRestaurants(res.data, openRestaurants);
      setOpen(openRestaurants);
    });
  }, []);

  ////////////////////functions
  let navigate = useNavigate();
  const dodo = () => {};
  const setRestaurantsByFilter = (filter: string) => {
    switch (filter) {
      case "All": {
        setRestaurants(base);
        break;
      }
      case "New": {
        setRestaurants(newRes);
        break;
      }
      case "Most Popular": {
        setRestaurants(popular);
        break;
      }
      case "Open Now": {
        setRestaurants(open);
        break;
      }
      case "Map View": {
        setRestaurants(open);
        break;
      }
    }
  };
  const openRestaurantPage = (restauarant: SingleRestaurant) => {
    const currentUrl = window.location.pathname;
    navigate(currentUrl + "/" + restauarant._id);
  };
  const goBack = () => {
    navigate("/");
  };

  /////////////////component
  return (
    <div className="restaurant-page-body">
      <div className="page-title">restaurants</div>
      <h5 onClick={goBack}>{"<< back"}</h5>
      <nav className="menu">
        <FilterNav
          labels={["All", "New", "Most Popular", "Open Now", "Map View"]}
          onClickAction={setRestaurantsByFilter}
          classNameStyleUL="list"
          classNameStyleLI="item"
        />
      </nav>
      <nav className="menu-desktop">
        <FilterNav
          labels={["Price Range V", "Distance V", "Rating V"]}
          classNameStyleUL="list-desktop"
          classNameStyleLI="item-desktop "
          onClickAction={dodo}
        />
      </nav>
      {restaurants.length ? (
        <RenderRestaurants
          restaurants={restaurants}
          onClickFunc={openRestaurantPage}
          
        />
      ) : (
        <CatalogMagic />
      )}
    </div>
  );
};
export default RestaurantsPage;
