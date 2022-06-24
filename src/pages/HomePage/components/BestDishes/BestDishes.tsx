import "./bestDishes.scss";
import bestDishesMock from "../../../../assets/mock-data/mock-dishes.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoTo from "../../../../components/GoTo/GoTo";
import SliderDishes from "../../../../components/SliderWarpper/SliderWrapper";

const BestdishesComp = () => {
  return (
    <div className="best-dishes-comp-body">
      <h1 className="body-title ">Signature Dish Of:</h1>
      <SliderDishes array={bestDishesMock}></SliderDishes>
      <br />
      <div className="button-wrapper ">
        <GoTo text="All Restaurants >>" where="/restaurants"/>
      </div>
    </div>
  );
};
export default BestdishesComp;
