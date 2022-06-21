import "./bestDishes.scss";
import bestDishesMock from "../../../../assets/mock-data/mock-dishes.json";
import { CardType } from "../../../../components/Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../../assets/settings/slider_settings";
import { Link } from "react-router-dom";
import Card from "../../../../components/Card/Card";

const BestdishesComp = () => {
  return (
    <div className="best-dishes-comp-body">
      <p className="body-title ">Signature Dish Of:</p>
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
