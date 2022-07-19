import Slider from "react-slick";
import { settings } from "../../assets/settings/slider_settings";
import bestDishesMock from "../../assets/mock-data/mock-dishes.json";
import Card, { CardType } from "../Card/Card";
import { SingleDish } from "../../assets/interfaces/SingleDish";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";
import star from '../../assets/images/Star.svg'


const Star = () => {
  return (
    <div >
        <img src={star}/>
   
  </div>
  );
};
export default Star;