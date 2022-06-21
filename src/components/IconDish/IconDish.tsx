import { SignatureDishIcon } from "../../assets/interfaces/SignatureDishIcon";
import "../../components/IconDish/IconDish.scss";

export interface IconDishProps {
  img: string;
  description?: string;
}

const IconDish:React.FC<IconDishProps> = ({img,description}) => (
  <div className="icon-dish-comp-body">
    <img className="img" src={img} />
    <p className="description">{description}</p>
  </div>
);
export default IconDish;
