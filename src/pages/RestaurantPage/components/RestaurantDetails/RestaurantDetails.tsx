import { SingleRestaurant } from "../../../../assets/interfaces/SingleRestaurant";
import IsOpen from "../IsOpen/IsOpen";
export interface RestaurantDetailsProps {
    currentRestaurant: SingleRestaurant;
    isOpen?: boolean;
  }

const RestaurantsDetails:React.FC<RestaurantDetailsProps> =({currentRestaurant, isOpen})=>{
return(
    <div className="restaurant-card-wrapper">
        <img src={currentRestaurant.image} className="card-img"></img>
        <div className="text-wrapper">
          <p className="card-title">{currentRestaurant.name}</p>
          <p className="card-description">
            {currentRestaurant.chef_name}
          </p>
          {isOpen && <IsOpen />}
        </div>
      </div>
)
}

export default RestaurantsDetails;