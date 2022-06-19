import "./bestrestaurants.scss";
import bestResturantsMock from "../../../../mock-data/mock-restaurants.json";
import CardComp, { CardType } from "../../../../components/Card/Card";
import * as React from "react";
// import "../../pages/HomePage/components/BestDishes/bestDishes.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../../assets/settings/slider_settings";
import { restaurants } from "../../../../assets/interfaces/restaurants";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card/Card";

const BestRestaurantsComp = () => {
  const navigateToRestaurants = () => {
    console.log("navigate");
  };
  return (
    <div className="best-resturants-comp-body">
      <p className="title">
        popular restaurant in epicure:
      </p>
      <Slider {...settings}>
        {bestResturantsMock.map((resturant) => (
          <Card
            img={resturant.image}
            title={resturant.name}
            description={resturant.chef_name}
            key={resturant.name}
            cardType={CardType.Small}
          />
        ))}
      </Slider>
      <br />
      <Link
        to="restaurants"
        className="button"
        onClick={navigateToRestaurants}
      >
        {"All Restaurants >>"}
      </Link>
    </div>
  );
};
export default BestRestaurantsComp;
