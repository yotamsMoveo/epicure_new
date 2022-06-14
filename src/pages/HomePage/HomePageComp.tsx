import React, { useState, useEffect } from "react";
import "../HomePage/HomePage.scss";
import AboutUsComp from "../../components/Aboutus/AboutUsComp";
import SignatureDishsIconComp from "../../components/Sinature_Dishs_Icon/SignatureDishsIconComp";
import ChefOfTheWeek from "../../components/ChefOfTheWeek/ChefOfTheWeek";
import BestRestaurantsComp from "../../components/BestRestaurants/BestRestaurantsComp";
import BestdishesComp from "../../components/BestDishes/BestDishesComp";
import WelcomeCardComp from "../../components/WelcomeCard/WelcomeCradComp";
import {
  getBestDishesData,
  getBestResturantsData,
  getChefOfTheWeekData,
} from "../../services/api_service";
import { restaurants } from "../../assets/interfaces/restaurants";

const HomePage=()=> {
  const [chefOfTheWeekData, setChefOfTheWeekData] = useState({});
  const [bestDishesData, setBestDishesData] = useState({});
  const [bestResturantsData, setBestResturantsData] = useState({});

  useEffect(() => {
    const data = getChefOfTheWeekData().then((response) =>
      setChefOfTheWeekData(response)
    );
  }, []);

  useEffect(() => {
    const data = getBestResturantsData().then((response) =>
      setBestResturantsData(response)
    );
  }, []);

  useEffect(() => {
    const data = getBestDishesData().then((response) =>
      setBestDishesData(response)
    );
  }, []);

  return (
    <div className="home-page-body">
      <WelcomeCardComp />
      <BestRestaurantsComp />
      <BestdishesComp />
      <SignatureDishsIconComp />
      <ChefOfTheWeek />
      <AboutUsComp />
    </div>
  );
}
export default HomePage;
