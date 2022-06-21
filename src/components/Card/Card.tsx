import "../Card/Card.scss";

export interface CardCompProps {
  cardType: CardType;
  img: string;
  title: string;
  description?: string;
  type?: string;
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
  type,
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
            <img className="type" src={type}></img>
            <p className="price">{price}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComp;
