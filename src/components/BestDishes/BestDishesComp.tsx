import "../BestDishes/bestDishes.scss";
import bestDishesMock from "../../mock-data/mock-dishes.json";
import CardComp from "../Card/CardComp";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../assets/settings/slider_settings";
import { dishes } from "../../assets/interfaces/dishes";
import { Link } from "react-router-dom";

const BestdishesComp=()=> {
  const navigateToDishes=()=> {
    console.log("navigate");
  }
  return (
    <div className="best-dishes-comp-body">
      <p className="best-dishes-comp-title">Signature Dish Of:</p>
        <Slider {...settings} >
          {bestDishesMock.map((dish) => (
            <CardComp
              img={dish.image}
              title={dish.name}
              description={dish.description}
              type={dish.type}
              price={dish.price}
              key={dish.name}
              classNameProp="CardComp_big"
            />
          ))}
        </Slider>
      <br />
      <Link to="/restaurants" className="best-dishes-comp-button" onClick={navigateToDishes}>
        {"All Restaurants >>"}
      </Link>
    </div>
  );
}

// function BestdishesComp(bestDishes:dishes) {
//     function navigateToDishes() {
//       console.log("navigate");
//     }
//     return (
//       <div className="BestdishesComp_body">
//         <p className="BestdishesComp_title">Signature Dish Of:</p>
//         <div className="BestdishesComp_slider">
//           <Slider {...settings}>
//             {bestDishes.dishes.map((dish) => (
//               <CardComp
//                 img={dish.image}
//                 title={dish.name}
//                 description={dish.description}
//                 type={dish.type}
//                 price={dish.price}
//                 key={dish.name}
//                 classNameProp="CardComp_big"
//               />
//             ))}
//           </Slider>
//           </div>
//           <br/>
//         <p className="BestRestaurantsComp_button" onClick={navigateToDishes}>
//           All Restaurants
//         </p>
//       </div>
//     );
//   }
export default BestdishesComp;
