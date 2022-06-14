import "../Resraurans/Restaurants.scss";
import bestResturantsMock from "../../mock-data/mock-restaurants.json";
import CardComp from "../../components/Card/CardComp";
// import { Navbar, NavLink } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Restaurants=()=> {

  const [isAllOpen,setIsAllOpen]=useState(true);
  const [isNewOpen,setIsNewOpen]=useState(true);
  const [isPopularOpen,setIsPopularOpen]=useState(true);
  const [isNowOpen,setIsNowOpen]=useState(true);

  return (
    <div className="restaurant_page_body">
      <div className="restaurant_page_title">restaurants</div>
      <nav className="restaurant_page_menu">
        <ul className="restaurant_page_menu_list">
          <li>
            <NavLink to="/restaurants" className="restaurant_page_menu_item">
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/restaurants" className="restaurant_page_menu_item">
              New
            </NavLink>
          </li>
          <li>
            <NavLink to="/restaurants" className="restaurant_page_menu_item">
              Most Popular
            </NavLink>
          </li>
          <li>
            <NavLink to="/restaurants" className="restaurant_page_menu_item" >
              Open Now
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="restaurant_page_restaurants" >
        {bestResturantsMock.map((resturant, index) => (
          <CardComp
            img={resturant.image}
            title={resturant.name}
            description={resturant.chef}
            key={index}
            classNameProp="CardComp_small"
          />
        ))}
      </div>
    </div>
  );
}

export default Restaurants;
