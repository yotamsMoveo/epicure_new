import Slider from "react-slick";
import { settings } from "../../assets/settings/slider_settings";
import bestDishesMock from "../../assets/mock-data/mock-dishes.json";
import Card, { CardType } from "../Card/Card";
import { SingleDish } from "../../assets/interfaces/SingleDish";


export interface SliderDishesProps {
    onClickAction?: Function;
    array:SingleDish[];
  }
const SliderDishes:React.FC<SliderDishesProps> = ({onClickAction,array}) => { 
  return (
    <div className="slider-wrapper" data-aos="flip-up" data-aos-duration="2000">
      <Slider {...settings} >
        {array.map((dish, index) => (
          <Card
            img={dish.image}
            title={dish.name}
            description={dish.description}
            types={dish.type}
            price={dish.price}
            key={index}
            cardType={CardType.Big}
          />
        ))}
      </Slider>
    </div>
  );
};
export default SliderDishes;
