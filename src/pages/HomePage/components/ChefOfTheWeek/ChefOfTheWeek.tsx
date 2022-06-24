import "./chefOfTheWeek.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { SingleRestaurant } from "../../../../assets/interfaces/SingleRestaurant";
import { useState } from "react";
import SliderRestaurants from "../../../../components/SliderWarpper/SliderRestaurants";
import { getChefRestaurants } from "../../../../state/reducers/ChefSlice";
import { useDispatch } from "react-redux";


const ChefOfTheWeek = () => {
  ////////////////data
  const {chefData,chefRest} = useSelector((store:any) => store.chefData);
  const dispach=useDispatch();
  dispach(getChefRestaurants());
  
  ///////////////component
  return (
    <div className="chef-of-the-week-body">
      <h1 className="tilte" >Chef of the week:</h1>
      <div className="chef-wrapper">
        <div className="parent">
          <img
            src={chefData.image}
            alt="chef of the month"
            className="half-fade-image"
          ></img>
          <div className="opacity-div">Yossi Shitrit</div>
        </div>
        <p className="description">{chefData.description}</p>
      </div>
      <div className="chef-slider-wrapper">
        <h1 className="tilte-wrapper">Yossi’s Restaurants</h1>
        <SliderRestaurants array={chefRest}/>
      </div>
    </div>
  );
};
export default ChefOfTheWeek;
