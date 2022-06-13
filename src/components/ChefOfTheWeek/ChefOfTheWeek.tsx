import "../../components/ChefOfTheWeek/chefOfTheWeek.scss";
import mockChef from "../../mock-data/mock-chefs.json";
import CardComp from "../Card/CardComp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../assets/settings/slider_settings";
import { chef } from "../../assets/interfaces/chef";

function ChefOfTheWeek() {
  var restaurantNames = mockChef.restaurants;
  return (
    <div className="ChefOfTheWeek_body">
      <h1 className="ChefOfTheWeek_tilte">Chef of the week:</h1>
      <div className="parent">
        <img
          src={mockChef.image}
          alt="chef of the month"
          className="half-fade-image"
        ></img>
        <div className="opacity_div">Yossi Shitrit</div>
       
      </div>
      <p className="ChefOfTheWeek_description">{mockChef.description}</p>
      <h1 className="ChefOfTheWeek_tilte">Chef of the week:</h1>
      <div className="ChefOfTheWeek_slider">
        <Slider {...settings}>
          {restaurantNames.map((resturant) => (
            <CardComp
              img={resturant.image}
              title={resturant.name}
              key={resturant.name}
              classNameProp="CardComp_small"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

// function ChefOfTheWeek(che_of_the_week:chef) {
//   var restaurantNames = che_of_the_week.restaurants.resturants;
//   return (
//     <div className="ChefOfTheWeek_body">
//       <h1 className="ChefOfTheWeek_tilte">Chef of the week:</h1>
//       <div className="parent">
//         <img
//           src={che_of_the_week.image}
//           alt="chef of the month"
//           className="half-fade-image"
//         ></img>
//         <div className="opacity_div">Yossi Shitrit</div>
//       </div>
//       <p className="ChefOfTheWeek_description">{mockChef.description}</p>
//       <div className="ChefOfTheWeek_slider">
//         <Slider {...settings}>
//           {restaurantNames.map((resturant) => (
//             <CardComp
//               img={resturant.image}
//               title={resturant.name}
//               key={resturant.name}
//               classNameProp="CardComp_small"
//             />
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

export default ChefOfTheWeek;
