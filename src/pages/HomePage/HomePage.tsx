import "../HomePage/HomePage.scss";
import AboutUsComp from "./components/Aboutus/AboutUs";
import SignatureDishsIconComp from "./components/Sinature_Dishs_Icon/SignatureDishsIcon";
import ChefOfTheWeek from "./components/ChefOfTheWeek/ChefOfTheWeek";
import BestRestaurantsComp from "./components/BestRestaurants/BestRestaurants";
import BestdishesComp from "./components/BestDishes/BestDishes";
import WelcomeCardComp from "./components/WelcomeCard/WelcomeCrad";
import { useSelector } from "react-redux";


const HomePage = () => {
  return (
    <div className="home-page-body">
      {/* <WelcomeCardComp />
      <BestRestaurantsComp />
      <BestdishesComp />
      <SignatureDishsIconComp />
      <ChefOfTheWeek />
      <AboutUsComp /> */}
    </div>
  );
};
export default HomePage;
