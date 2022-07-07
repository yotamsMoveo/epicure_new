import { SingleRestaurant } from "../../../../assets/interfaces/SingleRestaurant";
import IsOpen from "../IsOpen/IsOpen";
export interface RestaurantDetailsProps {
  currentRestaurant: SingleRestaurant;
  isOpen?: boolean;
}

const RestaurantsDetails: React.FC<RestaurantDetailsProps> = ({
  currentRestaurant,
  isOpen,
}) => {
  return (
    <div className="restaurant-card-wrapper">
      <img
        src={currentRestaurant.image}
        className="card-img"
        data-aos="fade-up"
        data-aos-duration="3000"
      ></img>
      <div className="text-wrapper">
        <p className="card-title">{currentRestaurant.name}</p>
        <p className="card-description">{currentRestaurant.chef.name}</p>
        {isOpen && <IsOpen />}
      </div>
    </div>
  );
};

export default RestaurantsDetails;
