import "../CardDish/CardDish.scss";
import { TbCurrencyShekel } from "react-icons/tb";
import line from "../../assets/images/Line.svg";

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
    <div className="card-dish-body">
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
          <div className="prise-warpper">
              <img src={line} />
              <p className="price">
                <TbCurrencyShekel />
                {price}
              </p>
              <img src={line} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default CardDish;
