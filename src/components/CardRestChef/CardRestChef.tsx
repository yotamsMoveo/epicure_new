import "../CardRestChef/CardRestChef.scss";
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

const CardRestChef: React.FC<CardRestProps> = ({
  img,
  title,
  description,
  types,
  price,
}) => {
  
  return (
    <div className="card-rest-body-chef">
      <img className="img-chef" src={img}></img>
      <div className="contant-chef">
        <p className="title-chef">{title}</p>
        {/* <p className="description">{description}</p> */}
      </div>
    </div>
  );
};

export default CardRestChef;
