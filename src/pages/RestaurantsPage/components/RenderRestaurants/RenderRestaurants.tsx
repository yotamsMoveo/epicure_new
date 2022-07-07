import { SingleDish } from "../../../../assets/interfaces/SingleDish";
import { SingleRestaurant } from "../../../../assets/interfaces/SingleRestaurant";
import Card, { CardType } from "../../../../components/Card/Card";
import CardRest from "../../../../components/CardRest/CardRest";
import './RenderRestaurants.scss'

export interface RenderRestaurantsProps {
  restaurants: SingleRestaurant[];
  onClickFunc: Function;
  isOpen?: boolean;
}

const RenderRestaurants: React.FC<RenderRestaurantsProps> = ({
  restaurants,
  onClickFunc,
}) => {
  return (
    <div className="restaurants" data-aos="fade-up" data-aos-duration="3000">
      {restaurants.map((resturant: SingleRestaurant, index) => (
        <div
          key={index}
          className="restauarant-item"
          onClick={() => onClickFunc(resturant)}
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
  );
};

export default RenderRestaurants;
