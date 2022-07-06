import "../CardRest/CardRest.scss";
import { TbCurrencyShekel } from "react-icons/tb";

export interface CardRestProps {
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

const CardRest: React.FC<CardRestProps> = ({
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
      </div>
    </div>
  );
};

export default CardRest;
