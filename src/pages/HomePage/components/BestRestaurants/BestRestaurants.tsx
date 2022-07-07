import "./bestrestaurants.scss";
import bestResturantsMock from "../../../../assets/mock-data/mock-restaurants.json";
// import "../../pages/HomePage/components/BestDishes/bestDishes.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoTo from "../../../../components/GoTo/GoTo";
import SliderRestaurants from "../../../../components/SliderWarpper/SliderRestaurants";
import { SingleRestaurant } from "../../../../assets/interfaces/SingleRestaurant";
import { useEffect, useState } from "react";
import {
  getBestDishesData,
  getResturantsData,
} from "../../../../services/api_service";
import CatalogMagic from "../../../../components/Laoder/Laoder";

const BestRestaurantsComp = () => {
  const data: SingleRestaurant[] = [];
  const [bestRestaurants, setBestRestaurants] = useState(data);
  useEffect(() => {
    getResturantsData().then((res) => {
      setBestRestaurants(res.data);
    });
  }, []);
  if (bestRestaurants) {
    return (
      <div className="best-resturants-comp-body">
        <h1 className="body-title">popular restaurant in epicure:</h1>
        {bestRestaurants.length ? (
          <SliderRestaurants array={bestRestaurants} ></SliderRestaurants>
        ) : (
          <CatalogMagic />
        )}
        <br />
        <div className="button-wrapper">
          <GoTo text="All Restaurants >>" where="/restaurants" />
        </div>
      </div>
    );
  } else {
    return <h1>loading</h1>;
  }
};
export default BestRestaurantsComp;
