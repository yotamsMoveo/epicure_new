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
import CardRest from "../../../../components/CardRest/CardRest";


const BestRestaurantsComp = () => {
  const data: SingleRestaurant[] = [];
  const data1: SingleRestaurant[] = [];
  const [bestRestaurants, setBestRestaurants] = useState(data);
  const [restaurants, setRestaurants] = useState(data1);
  useEffect(() => {
    getResturantsData().then((res) => {
      setBestRestaurants(res.data);
      for(let i=0;i<3;i++){
        data1.push(res.data[i]);
      }
      setRestaurants(data1);
    });
  }, []);
  if (bestRestaurants) {
    return (
      <div className="best-resturants-comp-body">
        <h1 className="body-title">popular restaurant in epicure:</h1>
        <div className="slider-mobile">
          {bestRestaurants.length ? (
            <SliderRestaurants array={bestRestaurants}></SliderRestaurants>
          ) : (
            <CatalogMagic />
          )}
        </div>
        <div className="slider-desktop">
        {restaurants.map((resturant: SingleRestaurant, index) => (
        <div
          key={index}
          className="restauarant-item"
        >
          <CardRest
            img={resturant.image}
            title={resturant.name}
            description={resturant.chef.name}
            key={index}
          />
        </div>
      ))}
        </div>
        <br />
        <div className="button-wrapper">
          <GoTo text="All Restaurants" where="/restaurants" />
        </div>
      </div>
    );
  } else {
    return <h1>loading</h1>;
  }
};
export default BestRestaurantsComp;
