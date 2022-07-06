import "../CardDish/CardDish.scss";
import { TbCurrencyShekel } from "react-icons/tb";

export interface CardDishProps {
  //   cardType: CardType;
  img: string;
  title: string;
  description?: string;
  types?: [string];
  price?: number;
}

// export enum CardType {
//   Big = 'CardComp_big',
//   Small='CardComp_small',
// }

const CardDish: React.FC<CardDishProps> = ({
  img,
  title,
  description,
  types,
  price,
}) => {
  return (
    <div className="card-rest-body">
      <img className="img" src={img}></img>
      <div className="contant">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <div className="icon-wrapper">
          <div className="type-array">
            {types?.map((type, index) => (
              <img className="type" src={type} key={index}></img>
            ))}
          </div>
          <div>
            <p className="price">
              <TbCurrencyShekel />
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDish;
