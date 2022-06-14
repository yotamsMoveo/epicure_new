import { signature_dish_icon } from "../../assets/interfaces/signature_dish_icon";
import "../../components/IconDish/IconDish.scss";

// const IconDishComp = (signature_dish_icon:signature_dish_icon) => (
//   <div>
//     <div >
//       <img className="icon_dish_img" src={signature_dish_icon.img}/>
//       <p className="icon_dish_description">{signature_dish_icon.title}</p>
//     </div>
//   </div>
// );

const IconDishComp = (props: any) => (
  <div className="icon-dish-comp-body">
    <img className="icon-dish-img" src={props.iconImg} />
    <p className="icon-dish-description">{props.icondescription}</p>
  </div>
);
export default IconDishComp;
