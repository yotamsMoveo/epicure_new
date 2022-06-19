import IconDishComp from "../../../../components/IconDish/IconDish";
import "./signatureDishs.scss";
import IconDishes from "../../../../mock-data/mock-icon-dish.json";
import { signature_dish_icons } from "../../../../assets/interfaces/signature_dish_icons";
import IconDish from "../../../../components/IconDish/IconDish";

const SignatureDishsIconComp = () => {
  return (
    <div className="signature-dishs-body">
      <div className="title">Signature Dish Of:</div>
      <div className="icon-list">
        {IconDishes.map((item,index) => {
          return (
            <IconDish
              img={item.img}
              description={item.title}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SignatureDishsIconComp;
