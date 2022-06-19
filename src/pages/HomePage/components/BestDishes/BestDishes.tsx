import "./bestDishes.scss";
import bestDishesMock from "../../../../mock-data/mock-dishes.json";
import CardComp, { CardType } from "../../../../components/Card/Card";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../../assets/settings/slider_settings";
import { dishes } from "../../../../assets/interfaces/dishes";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card/Card";

const BestdishesComp = () => {
  return (
    <div className="best-dishes-comp-body">
      <p className="title">Signature Dish Of:</p>
      <Slider {...settings}>
        {bestDishesMock.map((dish,index) => (
          <Card
            img={dish.image}
            title={dish.name}
            description={dish.description}
            type={dish.type}
            price={dish.price}
            key={index}
            cardType={CardType.Big}
          />
        ))}
      </Slider>
      <br />
      <Link
        to="/restaurants"
        className="button"
      >
        {"All Restaurants >>"}
      </Link>
    </div>
  );
};
export default BestdishesComp;
