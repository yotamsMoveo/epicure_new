import "./bestDishes.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoTo from "../../../../components/GoTo/GoTo";
import SliderDishes from "../../../../components/SliderWarpper/SliderWrapper";
import { useEffect, useState } from "react";
import {
  getBestDishesData,
} from "../../../../services/api_service";
import { SingleDish } from "../../../../assets/interfaces/SingleDish";
import 'react-loading-skeleton/dist/skeleton.css'
import CatalogMagic from "../../../../components/Laoder/Laoder";
import { BsChevronDoubleRight } from 'react-icons/bs';
import { SingleRestaurant } from "../../../../assets/interfaces/SingleRestaurant";
import CardRest from "../../../../components/CardRest/CardRest";
import CardDish from "../../../../components/CardDish/CardDish";

const BestdishesComp = () => {
  const data:SingleDish[]=[];
  const data1:SingleDish[]=[];
  const [dishesDesk,setDishesDesk] = useState(data1);
  const [bestDishes,setBestDishes] = useState(data);
  useEffect(() => {
    getBestDishesData().then((res) => {
      setBestDishes(res.data);
      for(let i=0;i<3;i++){
        data1.push(res.data[i]);
      }
      setDishesDesk(data1);
    });
  }, []);


  return (
   
    <div className="best-dishes-comp-body">
      <h1 className="body-title ">Signature Dish Of:</h1>
      <div className="slider-mobile">{bestDishes.length?<SliderDishes array={bestDishes}></SliderDishes>:<CatalogMagic/>}</div>
      <div className="slider-desktop">
      {dishesDesk.map((dish: SingleDish,index) => (
        <div className="dish-item" key={index}>
          <CardDish
            img={dish.image}
            title={dish.name}
            description={dish.description}
            types={dish.type}
            price={dish.price}
            key={index}
            //cardType={CardType.Big}
          />
        </div>
      ))}
     
      </div>
      
      <br />
      <div className="button-wrapper ">
        <GoTo text="All Restaurants" where="/restaurants" ></GoTo>
      </div>
    </div>
  );
};
export default BestdishesComp;
