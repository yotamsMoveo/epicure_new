import { SingleDish } from "../../../../assets/interfaces/SingleDish";
import Card, { CardType } from "../../../../components/Card/Card";

export interface RenderDishesProps {
  dishes: SingleDish[];
  onClickFunc:Function;
  isOpen?: boolean;
}

const RenderDishes: React.FC<RenderDishesProps> = ({ dishes,onClickFunc }) => {
  return (
    <div className="dishes">
      {dishes.map((dish: SingleDish, index: any) => (
        <div className="dish-item" onClick={()=>onClickFunc(dish)}>
          <Card
            img={dish.image}
            title={dish.name}
            description={dish.description}
            type={dish.type}
            price={dish.price}
            key={index}
            cardType={CardType.Big}
          />
        </div>
      ))}
    </div>
  );
};

export default RenderDishes;
