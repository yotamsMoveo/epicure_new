import "./chefOfTheWeek.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { SingleRestaurant } from "../../../../assets/interfaces/SingleRestaurant";
import { useEffect, useState } from "react";
import SliderRestaurants from "../../../../components/SliderWarpper/SliderRestaurants";
import { getChefRestaurants } from "../../../../state/reducers/ChefSlice";
import { useDispatch } from "react-redux";
import {
  getChefOfTheWeekData,
  getRestaurantsByChefId,
} from "../../../../services/api_service";
import { Chef } from "../../../../assets/interfaces/Chef";
import CatalogMagic from "../../../../components/Laoder/Laoder";
import CardRest from "../../../../components/CardRest/CardRest";
import CardRestChef from "../../../../components/CardRestChef/CardRestChef";

const ChefOfTheWeek = () => {
  ////////////////data
  ///////////redux
  const { chefData, chefRest } = useSelector((store: any) => store.chefData);
  const dispach = useDispatch();
  dispach(getChefRestaurants());
  ///////////api call
  const chefDataInitelize: Chef = {
    image: "",
    name: "",
    description: "",
    active: true,
    _id: "",
  };
  const chefRestaurants: SingleRestaurant[] = [];
  const chefRestaurants1: SingleRestaurant[] = [];
  const [chefId, setChefId] = useState("");
  const [chefRests, setChefRests] = useState(chefRestaurants);
  const [Rests, setRests] = useState(chefRestaurants1);
  const [chef, setChef] = useState(chefDataInitelize);
  useEffect(() => {
    getChefOfTheWeekData().then((res) => {
      setChef(res.data[0]);
      setChefId(res.data[0]._id);
    });
  }, []);

  useEffect(() => {
    getRestaurantsByChefId(chef._id).then((res1) => {
      setChefRests(res1.data);
      for (let i = 0; i < 3; i++) {
        chefRestaurants1.push(res1.data[i]);
      }
      setRests(chefRestaurants1);
    });
  }, [chef]);

  ///////////////component
  return (
    <div className="chef-of-the-week-body">
      <h1 className="tilte">Chef of the week:</h1>
      <div className="chef-wrapper">
        <div className="parent">
          <img
            src={chef.image}
            alt="chef of the month"
            className="half-fade-image"
          ></img>
          <div className="opacity-div">{chef.name}</div>
        </div>
        <p className="description">{chef.description}</p>
      </div>
      <div className="chef-slider-wrapper">
        <h1 className="tilte-wrapper">Yossi’s Restaurants</h1>
        <div className="slider-mobile">
          {chefRests.length ? (
            <SliderRestaurants array={chefRests}></SliderRestaurants>
          ) : (
            <CatalogMagic />
          )}
        </div>
        <div className="slider-desktop">
          {Rests.map((resturant: SingleRestaurant, index) => (
            <div key={index} className="restauarant-item">
              <CardRestChef
                img={resturant.image}
                title={resturant.name}
                description={resturant.chef.name}
                key={index}
              />
            </div>
          ))}
        </div>

        {/* {chefRests.length&&<SliderRestaurants array={chefRests} />} */}
      </div>
    </div>
  );
};
export default ChefOfTheWeek;
