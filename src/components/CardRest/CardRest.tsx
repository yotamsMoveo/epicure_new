import "../CardRest/CardRest.scss";
import { TbCurrencyShekel } from "react-icons/tb";
import Star from "../Star/Star";
import { useState } from "react";

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
  const [arr, setArr] = useState(["", "", "", "", ""]);
  return (
    <div className="card-rest-body">
      <img className="img" src={img}></img>
      <div className="contant">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <div className="stars">
          {arr.map((a: string, index) => (
            <div key={index}>
              <Star />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardRest;
