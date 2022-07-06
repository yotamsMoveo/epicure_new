import "../Card/Card.scss";
import { TbCurrencyShekel } from 'react-icons/tb';

export interface CardCompProps {
  cardType: CardType;
  img: string;
  title: string;
  description?: string;
  types?: [string];
  price?: number;
}

export enum CardType {
  Big = 'CardComp_big',
  Small='CardComp_small',
}

const CardComp: React.FC<CardCompProps> = ({
  cardType,
  img,
  title,
  description,
  types,
  price,
}) => {

  return (
    <div className={cardType}>
      <img className="img" src={img}></img>
      <div className="contant">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        {cardType === CardType.Big && (
          <div className="icon-wrapper">
            <div className="type-array">{
              types?.map((type,index)=>
                <img className="type" src={type} key={index}></img>
              )
            }
            </div>
            <div >
            <p className="price" style={{'textAlign':'center', 'display':'flex', 'flexDirection':'row'}}><TbCurrencyShekel style={{'textAlign':'center', 'display':'flex','justifyContent':'center', 'flexDirection':'row'}}/>{price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComp;
