import "./chefOfTheWeek.scss";
import { CardType } from "../../../../components/Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../../../assets/settings/slider_settings";
import { useSelector } from "react-redux";
import Card from "../../../../components/Card/Card";
import { SingleRestaurant } from "../../../../assets/interfaces/SingleRestaurant";
import {Restaurants } from "../../../../assets/interfaces/Restaurants";
import { useState } from "react";

const ChefOfTheWeek = () => {
  const chefOfTheWeek = useSelector((state: any) =>state.chefData);
  const restauran_page_data = useSelector(
    (state: any) => state.restaurentsPageData
  );
  let chefRestaurants:Restaurants={
    resturants: [],
    chef_id: ''
  }
  
  restauran_page_data.forEach((restaurant:SingleRestaurant) => {
    // if(restaurant.chef_id==chefOfTheWeek._id){
    //   chefRestaurants.resturants.push(restaurant);
    // }
  });
  const [restaurantChef,setRestaurantNames]=useState(restauran_page_data);

  return (
    <div className="chef-of-the-week-body">
       <h1 className="tilte">Chef of the week:</h1>
      <div className="chef-wrapper">
       
        <div className="parent">
          <img
            src={chefOfTheWeek.image}
            alt="chef of the month"
            className="half-fade-image"
          ></img>
          <div className="opacity-div">Yossi Shitrit</div>
        </div>
        <p className="description">{chefOfTheWeek.description}</p>
      </div>
      <div className="chef-slider-wrapper">
        <h1 className="tilte-wrapper">Yossi’s Restaurants</h1>
        <Slider {...settings}>
          {restaurantChef.map((resturant:SingleRestaurant) => (
            <Card
              img={resturant.image}
              title={resturant.name}
              key={resturant.restaurant_id}
              cardType={CardType.Small}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default ChefOfTheWeek;
