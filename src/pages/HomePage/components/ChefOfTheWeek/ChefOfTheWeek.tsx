import "./chefOfTheWeek.scss";
import mockChef from "../../../../mock-data/mock-chefs.json";
import CardComp, { CardType } from "../../../../components/Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../../assets/settings/slider_settings";
import { chef } from "../../../../assets/interfaces/chef";
import { useSelector } from "react-redux";
import Card from "../../../../components/Card/Card";

const ChefOfTheWeek = () => {
  const chef_of_the_week = useSelector((state: any) => state.chefData);
  const restaurantNames = mockChef.restaurants;
  return (
    <div className="chef-of-the-week-body">
      <div className="chef-wrapper">
        <h1 className="tilte">Chef of the week:</h1>
        <div className="parent">
          <img
            src={mockChef.image}
            alt="chef of the month"
            className="half-fade-image"
          ></img>
          <div className="opacity-div">Yossi Shitrit</div>
        </div>
        <p className="description">{mockChef.description}</p>
      </div>
      <div className="chef-slider-wrapper">
        <h1 className="tilte-wrapper">Chef of the week:</h1>
        <Slider {...settings}>
          {restaurantNames.map((resturant) => (
            <Card
              img={resturant.image}
              title={resturant.name}
              key={resturant.name}
              cardType={CardType.Small}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default ChefOfTheWeek;
