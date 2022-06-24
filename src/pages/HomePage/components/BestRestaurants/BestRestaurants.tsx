import "./bestrestaurants.scss";
import bestResturantsMock from "../../../../assets/mock-data/mock-restaurants.json";
// import "../../pages/HomePage/components/BestDishes/bestDishes.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoTo from "../../../../components/GoTo/GoTo";
import SliderRestaurants from "../../../../components/SliderWarpper/SliderRestaurants";

const BestRestaurantsComp = () => {
  return (
    <div className="best-resturants-comp-body">
      <h1 className="body-title">popular restaurant in epicure:</h1>
      <SliderRestaurants array={bestResturantsMock}></SliderRestaurants>
      <br />
      <div className="button-wrapper">
        <GoTo text="All Restaurants >>" where="/restaurants" />
      </div>
    </div>
  );
};
export default BestRestaurantsComp;
