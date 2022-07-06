import Slider from "react-slick";
import { settings } from "../../assets/settings/slider_settings";
import bestDishesMock from "../../assets/mock-data/mock-dishes.json";
import Card, { CardType } from "../Card/Card";
import { SingleDish } from "../../assets/interfaces/SingleDish";
import { SingleRestaurant } from "../../assets/interfaces/SingleRestaurant";


export interface SliderRestaurantsProps {
    onClickAction?: Function;
    array:SingleRestaurant[];
  }
const SliderRestaurants:React.FC<SliderRestaurantsProps> = ({onClickAction,array}) => {
  return (
    <div className="slider-wrapper">
    {array.length && <Slider {...settings}>
      {array.map((resturant,index) => (
        <Card
          img={resturant.image}
          title={resturant.name}
          description={resturant.chef.name}
          key={index}
          cardType={CardType.Small}
        />
      ))}
    </Slider> }
  </div>
  );
};
export default SliderRestaurants;