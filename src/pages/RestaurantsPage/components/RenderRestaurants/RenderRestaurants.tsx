import { SingleDish } from "../../../../assets/interfaces/SingleDish";
import { SingleRestaurant } from "../../../../assets/interfaces/SingleRestaurant";
import Card, { CardType } from "../../../../components/Card/Card";

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
    <div className="restaurants">
        {restaurants.map((resturant: SingleRestaurant, index: any) => (
          <div
            className="restauarant-item"
            onClick={() => onClickFunc(resturant)}
          >
            <Card
              img={resturant.image}
              title={resturant.name}
              description={resturant.chef_name}
              key={index}
              cardType={CardType.Small}
            />
          </div>
        ))}
      </div>
  );
};

export default RenderRestaurants;
