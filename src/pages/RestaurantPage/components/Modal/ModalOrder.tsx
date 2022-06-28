import { Checkbox } from "@material-ui/core";
import "./ModalOrder.scss";
import { SingleOrder } from "../../../../assets/interfaces/SingleOrder";
import { useState } from "react";
import { SingleDish } from "../../../../assets/interfaces/SingleDish";
import { Orders } from "../../../../assets/interfaces/Orders";
import { useSelector } from "react-redux";
import {setBeforeUrl, setCurrentDish, setOrderDish} from './ModalOrderFunc'

const ModalOrder = (props: any) => {
  ////////////////data
  const {allDishes}=useSelector((store:any)=>store.dishesData);
  const [quantity, setQuantity] = useState(0);
  const [white_bread, setWhite_bread] = useState(false);
  const [sticky_rice, setSticky_rice] = useState(false);
  const [whithout_peanuts, setWhithout_peanuts] = useState(false);
  const [sticky_less_spicy, setSticky_less_spicy] = useState(false);
  const currentUrl = window.location.pathname;
  const temp = currentUrl.split("/");
  let currentDishId = temp[temp.length - 1];
  const beforeUrl=setBeforeUrl(temp);
  const currentDish=setCurrentDish(allDishes,currentDishId);
  const order_dish=setOrderDish();


  ///////////////////function to do
  let orders_to_show: Orders = {
    orders_to_show: [],
  };
 
  const handleChange = (setBool: number) => {
    if (setBool == 1) {
      setWhite_bread(!white_bread);
    }
    if (setBool == 2) {
      setSticky_rice(!sticky_rice);
    }
    if (setBool == 3) {
      setWhithout_peanuts(!whithout_peanuts);
    }
    if (setBool == 4) {
      setSticky_less_spicy(!sticky_less_spicy);
    }
  };

  const changeQuantity = (symbol: string) => {
    if (symbol.localeCompare("-") == 0) {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    } else if (symbol.localeCompare("+") == 0) {
      setQuantity(quantity + 1);
    }
  };

  const addToBag = () => {
    if (quantity > 0) {
      order_dish.dish = currentDish;
      order_dish.quantity = quantity;
      order_dish.sticky_less_spicy = sticky_less_spicy;
      order_dish.sticky_rice = sticky_rice;
      order_dish.white_bread = white_bread;
      order_dish.whithout_peanuts = whithout_peanuts;
      order_dish.total_price += currentDish.price * quantity;
      orders_to_show.orders_to_show.push(order_dish);
    }
  };
  return (
    <div className="modal">
      <section className="modal-main">
        <button type="button" onClick={(()=>props.closeModal())}>Close</button>
          <div className="orders-body">
          <img src={props.selectedDish.image} />
          <div className="content">
            <p className="content-title">{props.selectedDish.name}</p>
            <p className="content-description">{props.selectedDish.description}</p>
          </div>
          <div className="adding">
            <p className="adding-title">Choose a side</p>
            <div className="checkbox-warpper">
              <Checkbox
                checked={white_bread}
                onChange={() => handleChange(1)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <p className="boolean">{"White bread"}</p>
            </div>
            <div className="checkbox-warpper">
              <Checkbox
                checked={sticky_rice}
                onChange={() => handleChange(2)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <p className="boolean">{"Sticky rice"}</p>
            </div>
            <p className="adding-title">Changes</p>
            <div className="checkbox-warpper">
              <Checkbox
                checked={whithout_peanuts}
                onChange={() => handleChange(3)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <p className="boolean">{"Whithout peanuts"}</p>
            </div>
            <div className="checkbox-warpper">
              <Checkbox
                checked={sticky_less_spicy}
                onChange={() => handleChange(4)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <p className="boolean"> {"Sticky less spicy "}</p>
            </div>
          </div>

          <div className="quantity">
            <p className="quantity-title">Quantity</p>
            <div className="quantity-content">
              <p onClick={() => changeQuantity("-")} className="symbol">
                -
              </p>
              <p className="symbol">{quantity}</p>
              <p onClick={() => changeQuantity("+")} className="symbol">
                +
              </p>
            </div>
          </div>
          <button className="add-to-bag" onClick={addToBag}>
            add to bag
          </button>
        </div>
      </section>
    </div>
  );
};

export default ModalOrder;
